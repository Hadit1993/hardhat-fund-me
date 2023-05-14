interface NetworkConfig {
  name: string;
  ethUsdPriceFeed: string;
}

export const networkConfig: Record<number, NetworkConfig> = {
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
  },

  137: {
    name: "polygon",
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
};

export const developmentChains = ["hardhat", "localhost"];

export const DECIMALS = 8;

export const INITIAL_ANSWER = 200000000000;
