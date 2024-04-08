import { type Chain, bsc, bscTestnet, mainnet, opBNB, opBNBTestnet, sepolia, boba } from 'wagmi/chains';

import localConfig from 'config';

const getSupportedChains = (): Chain[] => {
  if (localConfig.isOnTestnet) {
    return [bscTestnet, opBNBTestnet, sepolia, boba];
  }

  //return [bsc, mainnet, opBNB];
    return [boba, mainnet]
};

export const governanceChain = localConfig.isOnTestnet ? bscTestnet : bsc;

export const chains = getSupportedChains();

export const defaultChain = chains[0];
