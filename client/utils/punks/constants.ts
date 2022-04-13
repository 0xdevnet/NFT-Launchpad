import { range } from 'lodash';

export const MIN_PUNK_NUMBER = 1;
export const MAX_PUNK_NUMBER = 10921;
export const ALL_PUNK_NUMBERS = range(MIN_PUNK_NUMBER, MAX_PUNK_NUMBER + 1);

export type PunkAirdropType = 'portrait' | 'glitch';

// Contract addresses
export const GP_NFT_ADDRESS = process.env.NEXT_PUBLIC_GP_NFT_ADDRESS as string;
export const GP_PORTRAIT_NFT_ADDRESS = process.env
  .NEXT_PUBLIC_GP_PORTRAIT_NFT_ADDRESS as string;
export const GP_GLITCH_NFT_ADDRESS = process.env
  .NEXT_PUBLIC_GP_GLITCH_NFT_ADDRESS as string;
if (!GP_NFT_ADDRESS || !GP_PORTRAIT_NFT_ADDRESS || !GP_GLITCH_NFT_ADDRESS) {
  throw Error('GP NFT addresses not defined');
}
