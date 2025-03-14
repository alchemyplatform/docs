# build the alchemy rest api specs
for file in src/openapi/*; do
  if [ -f "$file" ]; then
    filename="docs/api-specs/alchemy/rest/$(basename "$file" .yaml).json"
    (
      redocly bundle "$file" --dereferenced --output "$filename" --ext json && \
      redocly lint "$filename" --format json
    ) &
  fi
done &

# copy the markdown files to the docs dir
rsync -av src/markdown docs/ &

# build the rpc specs
ts-node ./scripts/build-rpc.ts &

wait
