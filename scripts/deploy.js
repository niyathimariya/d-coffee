const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.deployContract("Coffee");//fetching ABI and bytecode

  await Coffee.waitForDeployment();//creating an instance of our smartcontract and deploiyng

  console.log(
    `Contract deployed to ${Coffee.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});