import { defineChain } from 'viem';
import { type Chain, bsc, bscTestnet, mainnet, opBNB, opBNBTestnet, sepolia, boba } from 'wagmi/chains';

export const bobaSepolia =  defineChain({
  id: 28882,
  name: "Boba Sepolia",
  network: 'boba',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://sepolia.boba.network'] },
    public: { http: ['https://sepolia.boba.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'BOBAScan', url: 'https://testnet.bobascan.com' },
    default: { name: 'BOBAScan', url: 'https://testnet.bobascan.com' },
  },
  contracts: {
    multicall3: {
      address: '0x0216a640C4d53F2a6603042d4E14A2B890efcD45',
      blockCreated: 154928,
    },
  },
  testnet: true,
})



import localConfig from 'config';

const getSupportedChains = (): Chain[] => {
  if (localConfig.isOnTestnet) {
    return [bobaSepolia];
  }

  //return [bsc, mainnet, opBNB];
    return [boba, mainnet]
};

export const governanceChain = localConfig.isOnTestnet ? bscTestnet : bsc;

export const chains = getSupportedChains();

export const defaultChain = chains[0];
