import { OnChainNftMetadata } from './NftMetadataTypes';

/**
 * Retrievable metadata for each punk - currently just a JSON file
 */
export type PunkMetadata = OnChainNftMetadata & {
  token_id: string;
  punk_number: number;
  rarity_score: number;
};

/**
 * Contains data on trait info
 */
export type TraitValueData = {
  // Punk #'s with trait
  punkNumbers: number[];
  // Rarity % for the punk
  rarityPercentage: number;
};

export type TraitTypeData = {
  // Total # of punks with this trait type
  total: number;
  valueData: {
    [value: string]: TraitValueData;
  };
};

export type TraitData = {
  [trait_type: string]: TraitTypeData;
};
