# bundle the alchemy rest api specs
for file in src/openapi/*; do
  if [ -f "$file" ]; then
    filename="docs/api-specs/alchemy/rest/$(basename "$file" .yaml).json"
    (
      redocly bundle "$file" --dereferenced --output "$filename" --ext json && \
      redocly lint "$filename" --format json
    ) &
  fi
done

wait

cp -r src/markdown docs/markdown

ts-node ./scripts/build-rpc.ts
