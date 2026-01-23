#!/bin/bash
# Detect which API specs have changed by comparing hashes
#
# Usage: ./scripts/detect-spec-changes.sh
# Output: JSON array of changed spec URLs to stdout
#
# Environment variables:
#   SPECS_DIR: Directory containing specs (default: fern/api-specs)
#   BASE_URL: Base URL for specs (default: https://dev-docs.alchemy.com)
#   OLD_HASHES_URL: URL to fetch previous hashes (default: $BASE_URL/hashes.json)

set -e

# Configuration
SPECS_DIR="${SPECS_DIR:-fern/api-specs}"
BASE_URL="${BASE_URL:-https://dev-docs.alchemy.com}"
OLD_HASHES_URL="${OLD_HASHES_URL:-$BASE_URL/hashes.json}"
OLD_HASHES_FILE="old-hashes.json"
NEW_HASHES_FILE="$SPECS_DIR/hashes.json"

echo "Detecting spec changes..." >&2

# Step 1: Fetch old hashes from deployment (or create empty if first deploy)
echo "Fetching old hashes from $OLD_HASHES_URL..." >&2
if curl -sf "$OLD_HASHES_URL" > "$OLD_HASHES_FILE"; then
  echo "✓ Fetched old hashes" >&2
else
  echo "⚠ No old hashes found (first deploy?), using empty baseline" >&2
  echo '{"hashes":{}}' > "$OLD_HASHES_FILE"
fi

# Step 2: Generate new hashes
echo "Generating new hashes for specs in $SPECS_DIR..." >&2

if [ ! -d "$SPECS_DIR" ]; then
  echo "Error: Specs directory not found: $SPECS_DIR" >&2
  echo "Run 'pnpm generate' first to generate the specs." >&2
  exit 1
fi

# Find all JSON files, hash them, and build a JSON object
# Use associative array-like structure via jq
TMP_HASHES=$(mktemp)

find "$SPECS_DIR" -type f -name "*.json" \
  ! -name "hashes.json" \
  ! -name "metadata.json" \
  ! -name ".*" \
  | sort | while read -r filepath; do
    # Get relative path from specs directory
    relpath="${filepath#$SPECS_DIR/}"
    
    # Build full URL
    url="$BASE_URL/$relpath"
    
    # Compute SHA256 hash
    if command -v sha256sum &> /dev/null; then
      hash=$(sha256sum "$filepath" | awk '{print $1}')
    elif command -v shasum &> /dev/null; then
      # macOS fallback
      hash=$(shasum -a 256 "$filepath" | awk '{print $1}')
    else
      echo "Error: No SHA256 command found (sha256sum or shasum)" >&2
      exit 1
    fi
    
    # Output as JSON key-value pair
    jq -n --arg url "$url" --arg hash "$hash" '{($url): $hash}'
  done | jq -s 'add // {}' > "$TMP_HASHES"

# Build final hashes.json with metadata
SPEC_COUNT=$(jq 'length' "$TMP_HASHES")
echo "✓ Generated hashes for $SPEC_COUNT specs" >&2

jq -n \
  --arg timestamp "$(date -u +"%Y-%m-%dT%H:%M:%SZ")" \
  --slurpfile hashes "$TMP_HASHES" \
  '{
    generatedAt: $timestamp,
    hashes: $hashes[0]
  }' > "$NEW_HASHES_FILE"

echo "✓ Saved hashes to $NEW_HASHES_FILE" >&2

# Step 3: Compare old and new hashes to find changes
echo "Comparing hashes to detect changes..." >&2

CHANGED_URLS=$(jq -n \
  --slurpfile old "$OLD_HASHES_FILE" \
  --slurpfile new "$NEW_HASHES_FILE" \
  '
  ($old[0].hashes // {}) as $old_hashes |
  ($new[0].hashes // {}) as $new_hashes |
  
  # Get all unique URLs from both old and new
  ([$old_hashes, $new_hashes] | add | keys) as $all_urls |
  
  # Find URLs where hash changed (new, modified, or removed)
  $all_urls |
  map(select($old_hashes[.] != $new_hashes[.]))
  ')

# Step 4: Output results
# Default to 0 if jq fails or returns null/empty
CHANGE_COUNT=$(echo "$CHANGED_URLS" | jq -r 'length // 0' 2>/dev/null || echo "0")

# Ensure CHANGE_COUNT is a valid integer
if ! [[ "$CHANGE_COUNT" =~ ^[0-9]+$ ]]; then
  CHANGE_COUNT=0
fi

if [ "$CHANGE_COUNT" -gt 0 ]; then
  echo "✓ Found $CHANGE_COUNT changed spec(s):" >&2
  echo "$CHANGED_URLS" | jq -r '.[] | "  - " + .' >&2 | head -10
  if [ "$CHANGE_COUNT" -gt 10 ]; then
    echo "  ... and $((CHANGE_COUNT - 10)) more" >&2
  fi
else
  echo "✓ No spec changes detected" >&2
fi

# Output changed URLs as JSON array to stdout (for GHA to capture)
echo "$CHANGED_URLS"

# Cleanup
rm -f "$TMP_HASHES" "$OLD_HASHES_FILE"
