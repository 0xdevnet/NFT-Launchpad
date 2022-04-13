import { NftInfoQueryResponse } from '../util/terra/contracts/nftContractTypes';

export type NftAttribute = {
  trait_type: string;
  value: string;
};

export type NftMetadataExtension = {
  name: string;
  description: string;
  image: string;
  attributes: NftAttribute[];
};

export type OnChainNftMetadata = NftInfoQueryResponse;
