for file in src/openapi/*; do
  if [ -f "$file" ]; then
    filename="docs/api-specs/alchemy/rest/$(basename "$file" .yaml).json"
    (
      pnpm exec redocly bundle "$file" --dereferenced --output "$filename" --ext json && \
      pnpm exec redocly lint "$filename" --format json
    ) &
  fi
done

wait

