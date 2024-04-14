import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const initialOwnerAddress = process.env.OWNER_ADDRESS || "0x69325849D862BcDA56216123E89F4e6717BBffb6";

    try {
        const deploymentResult = await deploy("YourContract", {
            from: deployer,
            args: [initialOwnerAddress], // Only passing the initial owner address
            log: true,
            autoMine: true,
        });

        console.log(`YourContract was deployed at ${deploymentResult.address} by deployer ${deployer} with owner set to ${initialOwnerAddress}`);
        console.log(`Transaction hash: ${deploymentResult.transactionHash}`);
    } catch (error) {
        console.error("Failed to deploy YourContract:", error);
    }
};

export default deployYourContract;
deployYourContract.tags = ["YourContract"];
