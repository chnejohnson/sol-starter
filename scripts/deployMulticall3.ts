import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()

  const Multicall3 = await ethers.getContractFactory('Multicall3', deployer)
  const multicall3 = await Multicall3.deploy()
  await multicall3.deployTransaction.wait()
  console.log(`Multicall3 deployed: ${multicall3.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
