# build the alchemy rest api specs
# ./scripts/build-open-api.sh &

# build the json-rpc specs
ts-node ./scripts/build-rpc.ts &

# copy the markdown files to the docs dir
rsync -av src/markdown docs/ &

wait
