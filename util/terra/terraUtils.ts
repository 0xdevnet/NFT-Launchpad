import { Coin } from '@terra-money/terra.js';
import terraLCDClient from './terraLCDClient';

const TERRA_FINDER_DOMAIN = 'https://finder.terra.money/columbus-5';

export const getTerraFinderUrlForTx = (txHash: string) => {
  return TERRA_FINDER_DOMAIN + '/tx/' + txHash;
};

export const getTerraFinderUrlForAddress = (address: string) => {
  return TERRA_FINDER_DOMAIN + '/address/' + address;
};

// Addresses are 44ch, so take first 7 and last 7
export const getShortenedTerraAddress = (address: string) => {
  return `${address.substring(0, 7)}…${address.substring(37)}`;
};

// Returns undefined if not a valid input
export const getValidatedWalletAddress = (
  input: string
): string | undefined => {
  const trimmed = input.trim();
  return trimmed.length === 44 && trimmed.startsWith('terra')
    ? trimmed
    : undefined;
};

// Gets current swap rate in UST for given coin
export const getUstEquivalentCoin = async (coin: Coin): Promise<Coin> => {
  return terraLCDClient.market.swapRate(coin, 'uusd');
};
