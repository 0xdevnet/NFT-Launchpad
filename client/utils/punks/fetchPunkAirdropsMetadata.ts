import { validateGlitchTokenId, validatePortraitTokenId } from './utils';
import { OnChainNftMetadata } from '../../../types/NftMetadataTypes';
import { getInfoForToken } from '../../../util/terra/contracts/nftContractUtils';
import { GP_GLITCH_NFT_ADDRESS, GP_PORTRAIT_NFT_ADDRESS } from './constants';

//TODO: Just return static data
/*
Airdrop metadata is predictable so we don't really need to make a call
 */

export const fetchPunkPortraitMetadata = async (
  tokenId: string
): Promise<OnChainNftMetadata> => {
  if (!validatePortraitTokenId(tokenId)) {
    throw Error('Invalid portrait token ID: ' + tokenId);
  }

  // return {
  //   token_uri:
  //     'ipfs://bafybeibxqt3hfce4phwzoixkj4kyxxit2wkznsylcim6pwlntq4frd3rri',
  //   extension: {
  //     image:
  //       'ipfs://bafybeibxqt3hfce4phwzoixkj4kyxxit2wkznsylcim6pwlntq4frd3rri',
  //     description: '',
  //     name: `Meeting of the Galactics #${tokenId}`,
  //     attributes: [],
  //   },
  // };

  return getInfoForToken(GP_PORTRAIT_NFT_ADDRESS, {
    token_id: tokenId,
  });
};

export const fetchPunkGlitchMetadata = async (
  tokenId: string
): Promise<OnChainNftMetadata> => {
  if (!validateGlitchTokenId(tokenId)) {
    throw Error('Invalid glitch token ID: ' + tokenId);
  }

  // return {
  //   token_uri:
  //     'ipfs://bafybeiawqw4rr2fg7oavwjiirpzxaybcaw4ats3uvcfswl2c3n2hrqfy54',
  //   extension: {
  //     image:
  //       'ipfs://bafybeiawqw4rr2fg7oavwjiirpzxaybcaw4ats3uvcfswl2c3n2hrqfy54',
  //     description: '',
  //     name: `Genesis Glitch #${tokenId}`,
  //     attributes: [],
  //   },
  // };

  return getInfoForToken(GP_GLITCH_NFT_ADDRESS, {
    token_id: tokenId,
  });
};
