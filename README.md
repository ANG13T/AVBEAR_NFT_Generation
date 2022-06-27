# Aviation Bears (AVBEAR) NFT Generation Script

<br/>
<p align="center">
    <a href="https://rinkeby.etherscan.io/token/0x2ed40df8a93b0e3748fcccc1b5ad5b0c410febcb" target="_blank">
        <img width="20%" src="https://github.com/angelina-tsuboi/AVBEAR_Generation/blob/master/logo.png" alt="AVBEAR logo">
    </a>
</p>
<br/>

Aviation Bears (AVBEAR) is a NFT collection consisting of 100 unique NFTs uploaded onto OpenSea. This script is capable of generating 3125 unique bears, but due to price restrictions the number of bears available is 100. The NFTs are currently uploaded onto the Rinkeby chain using the Hashlips art engine. 

<h2 align="center"><a href="https://testnets.opensea.io/collection/aviation-bears" target="_blank">🐻 Buy an AVBEAR on OpenSea 🐻</a></h2>


## Installation 📁

```sh
git clone https://github.com/angelina-tsuboi/AVBEAR_NFT_Generation.git
```

Go to the root of your folder and run this command if you have yarn installed.

```sh
yarn install
```

Alternatively you can run this command if you have node installed.

```sh
npm install
```

## Scripts 🛠
To generate AVBEARs, execute the following command sequentially inside the root directory of the project
#### 1. **main.js**
```sh
npm run generate
```
Generates artwork and json files given layers inside layers folder and rarity of each item

#### 2. **uploadFiles.js**
```sh
node utils/nftport/uploadFiles.js
```
Uploads each artwork inside build directory to IPFS, and updates the respective JSON file with the IPFS URL

#### 3. **uploadMetadata.js**
```sh
node utils/nftport/uploadMetadata.js
```
Iterates through JSON files inside build directory, and updates metadata (ie. NFT custom fields)

#### 4. **mint.js**
```sh
node utils/nftport/mint.js
```
Mints each NFT using NFTPort, and uploads NFT information (ie. TXN) to JSON file in build directory
