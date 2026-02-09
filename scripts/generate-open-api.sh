#!/bin/bash
set -e

# Parse command line arguments
validate_only=false
while getopts "v-:" opt; do
  case "${opt}" in
    -)
      case "${OPTARG}" in
        validate-only)
          validate_only=true
          ;;
        *)
          echo "Invalid option: --${OPTARG}" >&2
          exit 1
          ;;
      esac
      ;;
    v)
      validate_only=true
      ;;
    *)
      echo "Usage: $0 [--validate-only]" >&2
      exit 1
      ;;
  esac
done

# array to store background process PIDs
pids=()

# variable to track if any lint commands fail
lint_failed=0

input_dir="src/openapi"
output_dir="fern/api-specs"

# Process only the main YAML file in each subdirectory
for dir in ${input_dir}/*/; do
  if [ -d "$dir" ]; then
    # Get the main YAML file (same name as directory)
    dirname=$(basename "$dir")
    file="$dir${dirname}.yaml"
    
    if [ -f "$file" ]; then
      filename="${output_dir}/alchemy/rest/${dirname}.json"
      (
        if [ "$validate_only" = true ]; then
          # Only run lint when validate-only is true
          if ! pnpm exec redocly lint "$file" --format json; then
            exit 1
          fi
        else
          # Run both bundle and lint when validate-only is false
          if ! pnpm exec redocly bundle "$file" --dereferenced --output "$filename" --ext json --remove-unused-components; then
            exit 1
          fi
          # Add warning message to the JSON file
          jq '{"x-generated-warning": "⚠️ This file is auto-generated. Do not edit manually"} + .' "$filename" > "$filename.tmp" && mv "$filename.tmp" "$filename" || exit 1
          if ! pnpm exec redocly lint "$filename" --format json; then
            exit 1
          fi
        fi
      ) &
      
      # Store the PID of the background process
      pids+=($!)
    fi
  fi
done

# --- Remote specs ---
# Specs hosted externally that should be included alongside local specs.
# Config lives in fern/remote-specs.json as an array of { name, url } objects.
remote_specs_file="fern/remote-specs.json"

if [ -f "$remote_specs_file" ]; then
  for entry in $(jq -c '.[]' "$remote_specs_file"); do
    name=$(echo "$entry" | jq -r '.name')
    url=$(echo "$entry" | jq -r '.url')
    filename="${output_dir}/alchemy/rest/${name}.json"
    (
      if [ "$validate_only" = true ]; then
        echo "Skipping remote spec: ${name} (validate-only mode)"
      else
        if ! pnpm exec redocly bundle "$url" --dereferenced --output "$filename" --ext json --remove-unused-components; then
          exit 1
        fi
        jq '{"x-generated-warning": "⚠️ Auto-generated from remote spec. Do not edit."} + .' "$filename" > "$filename.tmp" && mv "$filename.tmp" "$filename" || exit 1
      fi
    ) &
    pids+=($!)
  done
fi

# Wait for all background processes and check their exit codes
for pid in "${pids[@]}"; do
  if ! wait $pid; then
    lint_failed=1
  fi
done

# Exit with failure if any lint commands failed
if [ $lint_failed -eq 1 ]; then
  exit 1
fi

