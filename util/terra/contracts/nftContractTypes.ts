import { NftMetadataExtension } from '../../../types/NftMetadataTypes';

export type TokensQueryRequest = {
  owner: string;
  start_after?: string;
  limit?: number; // Max 30
};

export type TokensQueryResponse = {
  tokens: string[];
};

export type OwnerOfQueryRequest = {
  token_id: string;
  // unset or false will filter out expired approvals, you must set to true to see them
  include_expired?: boolean;
};

export type OwnerOfQueryResponse = {
  owner: string;
  approvals: unknown[]; // Not needed
};

export type NftInfoQueryRequest = {
  token_id: string;
};

export type NftInfoQueryResponse = {
  token_uri: string;
  extension: NftMetadataExtension;
};

export type TransferNftRequest = {
  token_id: string;
  recipient: string;
};

export type TransferNftResponse = {};
