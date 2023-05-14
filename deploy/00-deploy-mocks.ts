import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  DECIMALS,
  INITIAL_ANSWER,
  developmentChains,
} from "../helper-hardhat.config";
const deployMocks = async ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");

    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });

    log("Mocks deployed!");
    log(
      "----------------------------------------------------------------------------"
    );
  }
};
deployMocks.tags = ["all", "mocks"];
export default deployMocks;
