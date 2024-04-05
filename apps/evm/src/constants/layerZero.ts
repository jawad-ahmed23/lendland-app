import { ChainId } from 'types';

export const LAYER_ZERO_CHAIN_IDS: Record<ChainId, number> = {
  [ChainId.BSC_MAINNET]: 102,
  [ChainId.BSC_TESTNET]: 10102,
  [ChainId.ETHEREUM]: 101,
  [ChainId.SEPOLIA]: 10161,
  [ChainId.OPBNB_MAINNET]: 202,
  [ChainId.OPBNB_TESTNET]: 10202,
  [ChainId.BOBA]: 288
};

export const DEFAULT_ADAPTER_PARAMS =
  '0x000100000000000000000000000000000000000000000000000000000000000493E0';
