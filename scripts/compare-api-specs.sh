#!/bin/bash

# Script to compare api-specs and api-specs-reference directories
# Usage: ./scripts/compare-api-specs.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔍 Running generate:rpc...${NC}"
echo ""
pnpm generate:rpc
echo ""

echo -e "${YELLOW}🔍 Comparing api-specs and api-specs-reference directories...${NC}"
echo ""

# Run the TypeScript comparison script
if pnpm exec ts-node ./scripts/compare-api-specs.ts; then
    echo -e "${GREEN}✅ Comparison completed successfully!${NC}"
    exit 0
else
    echo -e "${RED}❌ Comparison found differences!${NC}"
    exit 1
fi
