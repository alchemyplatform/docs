# array to store background process PIDs
pids=()

# variable to track if any lint commands fail
lint_failed=0

for file in src/openapi/*; do
  if [ -f "$file" ]; then
    filename="docs/api-specs/alchemy/rest/$(basename "$file" .yaml).json"
    (
      if ! pnpm exec redocly bundle "$file" --dereferenced --output "$filename" --ext json || \
         ! pnpm exec redocly lint "$filename" --format json; then
        # If either command fails, signal failure
        exit 1
      fi
    ) &
    
    # Store the PID of the background process
    pids+=($!)
  fi
done

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

