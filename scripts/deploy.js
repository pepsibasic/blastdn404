// dn404/script/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const SimpleDN404 = await ethers.getContractFactory("SimpleDN404");
  const simpleDN404 = await SimpleDN404.deploy();

  await simpleDN404.deployed();

  console.log("SimpleDN404 deployed to:", simpleDN404.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
