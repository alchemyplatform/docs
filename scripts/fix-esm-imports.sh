#!/bin/bash

# Fix all @/ and relative imports to add .js extensions for ESM compatibility
# This converts:
#   from "@/foo"    ->  from "@/foo.js"
#   from "./foo"    ->  from "./foo.js"
#   from "../foo"   ->  from "../foo.js"

# Process src/, fern/, and scripts/ directories
for dir in src fern scripts; do
  if [ -d "$dir" ]; then
    find "$dir" -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i '' \
      -e 's|from "\(@/[^"]*\)"|from "\1.js"|g' \
      -e 's|from '"'"'\(@/[^'"'"']*\)'"'"'|from '"'"'\1.js'"'"'|g' \
      -e 's|from "\(\./[^"]*\)"|from "\1.js"|g' \
      -e 's|from '"'"'\(\./[^'"'"']*\)'"'"'|from '"'"'\1.js'"'"'|g' \
      -e 's|from "\(\.\./[^"]*\)"|from "\1.js"|g' \
      -e 's|from '"'"'\(\.\./[^'"'"']*\)'"'"'|from '"'"'\1.js'"'"'|g' \
      {} \;
  fi
done

echo "✅ Fixed all imports to include .js extensions"
