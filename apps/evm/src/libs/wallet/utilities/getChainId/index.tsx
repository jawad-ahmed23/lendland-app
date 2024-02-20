import { getChainIdFromSearchParams } from 'libs/wallet/utilities/getChainIdFromSearchParams';

export const getChainId = () => {
  const searchParams = new URLSearchParams(`?${window.location.hash.split('?')[1]}`);
  return getChainIdFromSearchParams({ searchParams });
};