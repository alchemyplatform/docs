type CodeSample = {
  [key: string]: string
}

export enum CodeBlockLanguage {
  CLI = 'bash',
  JavaScript = 'javascript',
  Python = 'python',
  JSON = 'json',
}

export const Languages = [
  CodeBlockLanguage.CLI,
  CodeBlockLanguage.JavaScript,
  CodeBlockLanguage.Python,
]

export const languageOptions = [
  { value: CodeBlockLanguage.CLI as string, label: 'curl' },
  { value: CodeBlockLanguage.JavaScript as string, label: 'JavaScript' },
  { value: CodeBlockLanguage.Python as string, label: 'Python' },
  // { value: CodeBlockLanguage.JSON as string, label: 'JSON' },
]

export const chainOptions = [
  { value: 'Ethereum', label: 'Ethereum' },
  { value: 'Polygon', label: 'Polygon' },
  { value: 'Arbitrum', label: 'Arbitrum' },
]

export const codeMap: { [endpoint: string]: CodeSample } = {
  getNFTsForCollection: {
    [CodeBlockLanguage.CLI]: `curl 'https://eth-mainnet.g.alchemy.com/nft/v3/{alchemy_api_key}/getNFTsForCollection?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&refreshCache=false'
  --request GET
  --header 'accept: application/json'`,
    [CodeBlockLanguage.JavaScript]: `// Declaring variables
let message = "Hello, World!";
const PI = 3.14159;

// Displaying output
console.log(message); // Output to the console
// alert(message); // Displays an alert box in the browser

// Functions
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("The sum is: " + sum);

// Event listener
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button Clicked!');
    });
});`,
    [CodeBlockLanguage.Python]: `# Hello, World! program
print("Hello, World!")

# Function to add two numbers
def add_numbers(x, y):
  """This function takes two numbers as input and returns their sum."""
  return x + y

# Example of using the function
num1 = 5
num2 = 3
sum_of_numbers = add_numbers(num1, num2)
print(f"The sum of {num1} and {num2} is: {sum_of_numbers}")`,
    [CodeBlockLanguage.JSON]: `{
    "contract": {
      "address": "0xe785E82358879F061BC3dcAC6f0444462D4b5330",
      "name": "World Of Women",
      "symbol": "WOW",
      "totalSupply": "10000",
      "tokenType": "ERC721",
      "contractDeployer": "0xc9b6321dc216D91E626E9BAA61b06B0E4d55bdb1",
      "deployedBlockNumber": 12907782,
      "openSeaMetadata": {
        "floorPrice": 0.3759905,
        "collectionName": "World of Women",
        "collectionSlug": "world-of-women-nft",
        "safelistRequestStatus": "verified",
        "imageUrl": "https://i.seadn.io/gcs/files/8604de2d9aaec98dd389e3af1b1a14b6.gif?w=500&auto=format",
        "description": "World of Women is a collection of 10,000 NFTs that gives you full access to our network of artists, creators, entrepreneurs, and executives who are championing diversity and equal opportunity on the blockchain. Created and illustrated by Yam Karkai (@ykarkai), World of Women has made prominent appearances at Christie's, The New Yorker and Billboard. The Time is WoW.",
        "externalUrl": null,
        "twitterUsername": "worldofwomennft",
        "discordUrl": "https://discord.gg/worldofwomen",
        "bannerImageUrl": "https://stream.mux.com/nVJE3CtLDe6ZsghV00Bxc4YKx6vB0201D8rtmfFB2ohhnc/high.mp4",
        "lastIngestedAt": "2025-05-20T06:29:10.000Z"
      },
      "isSpam": null,
      "spamClassifications": []
    },
    "tokenId": "44",
    "tokenType": "ERC721",
    "name": "WoW #44",
    "description": null,
    "tokenUri": "https://alchemy.mypinata.cloud/ipfs/QmTNBQDbggLZdKF1fRgWnXsnRikd52zL5ciNu769g9JoUP/44",
    "image": {
      "cachedUrl": "https://nft-cdn.alchemy.com/eth-mainnet/9316855d8f60a32cd44aa71f07cd7dc1",
      "thumbnailUrl": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/9316855d8f60a32cd44aa71f07cd7dc1",
      "pngUrl": "https://res.cloudinary.com/alchemyapi/image/upload/convert-png/eth-mainnet/9316855d8f60a32cd44aa71f07cd7dc1",
      "contentType": "image/png",
      "size": 105117,
      "originalUrl": "https://ipfs.io/ipfs/QmUkdJKCsV8ixm2eDLJGosH8Bntwwx942YXxfuF9yXPBzi"
    },
    "animation": {
      "cachedUrl": null,
      "contentType": null,
      "size": null,
      "originalUrl": null
    },
    "raw": {
      "tokenUri": "ipfs://QmTNBQDbggLZdKF1fRgWnXsnRikd52zL5ciNu769g9JoUP/44",
      "metadata": {
        "name": "WoW #44",
        "image": "ipfs://QmUkdJKCsV8ixm2eDLJGosH8Bntwwx942YXxfuF9yXPBzi",
        "attributes": [
          { "value": "Green Orange", "trait_type": "Background" },
          { "value": "Medium Gold", "trait_type": "Skin Tone" },
          { "value": "Green To The Left", "trait_type": "Eyes" },
          { "value": "Freckles", "trait_type": "Facial Features" },
          { "value": "Boy Cut", "trait_type": "Hairstyle" },
          { "value": "Tunic", "trait_type": "Clothes" },
          { "value": "Spikes", "trait_type": "Earrings" },
          { "value": "Slight Smile", "trait_type": "Mouth" },
          { "value": "Purple", "trait_type": "Lips Color" }
        ]
      },
      "error": null
    },
    "collection": {
      "name": "World of Women",
      "slug": "world-of-women-nft",
      "externalUrl": null,
      "bannerImageUrl": "https://stream.mux.com/nVJE3CtLDe6ZsghV00Bxc4YKx6vB0201D8rtmfFB2ohhnc/high.mp4"
    },
    "mint": {
      "mintAddress": null,
      "blockNumber": null,
      "timestamp": null,
      "transactionHash": null
    },
    "owners": ["0x9f4f78a6c4a5e6f8afa81631b9120ae3c831b494"],
    "timeLastUpdated": "2025-05-21T08:00:05.265Z"
  }`,
  },
  getNFTMetadata: {
    [CodeBlockLanguage.CLI]: `curl 'https://eth-mainnet.g.alchemy.com/nft/v3/{alchemy_api_key}/getNFTMetadata?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44&refreshCache=false'
    --request GET
    --header 'accept: application/json'
`,
    [CodeBlockLanguage.JavaScript]: `// Declaring variables
let message = "Hello, World!";
const PI = 3.14159;

// Displaying output
console.log(message); // Output to the console
// alert(message); // Displays an alert box in the browser

// Functions
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("The sum is: " + sum);

// Event listener
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button Clicked!');
    });
})`,
    [CodeBlockLanguage.Python]: `# Hello, World! program
print("Hello, World!")

# Function to add two numbers
def add_numbers(x, y):
  """This function takes two numbers as input and returns their sum."""
  return x + y

# Example of using the function
num1 = 5
num2 = 3
sum_of_numbers = add_numbers(num1, num2)
print(f"The sum of {num1} and {num2} is: {sum_of_numbers}")`,
    [CodeBlockLanguage.JSON]: `{}`,
  },
  getTokenBalances: {
    [CodeBlockLanguage.CLI]: `curl 'https://eth-mainnet.g.alchemy.com/nft/v3/{alchemy_api_key}/getTokenBalances?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44&refreshCache=false'
    --request GET
    --header 'accept: application/json'
`,
    [CodeBlockLanguage.JavaScript]: `// Declaring variables
let message = "Hello, World!";
const PI = 3.14159;

// Displaying output
console.log(message); // Output to the console
// alert(message); // Displays an alert box in the browser

// Functions
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("The sum is: " + sum);

// Event listener
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button Clicked!');
    });
})`,
    [CodeBlockLanguage.Python]: `# Hello, World! program
print("Hello, World!")

# Function to add two numbers
def add_numbers(x, y):
  """This function takes two numbers as input and returns their sum."""
  return x + y

# Example of using the function
num1 = 5
num2 = 3
sum_of_numbers = add_numbers(num1, num2)
print(f"The sum of {num1} and {num2} is: {sum_of_numbers}")`,
    [CodeBlockLanguage.JSON]: `{}`,
  },
}
