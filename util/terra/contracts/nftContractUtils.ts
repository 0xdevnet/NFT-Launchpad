import {
  executeContractFromClient,
  FeeDenom,
  queryContract,
} from './contractUtils';
import terraLCDClient from '../terraLCDClient';
import {
  NftInfoQueryRequest,
  NftInfoQueryResponse,
  OwnerOfQueryRequest,
  OwnerOfQueryResponse,
  TokensQueryRequest,
  TokensQueryResponse,
  TransferNftRequest,
  TransferNftResponse,
} from './nftContractTypes';
import { ConnectedWallet, TxResult } from '@terra-money/wallet-provider';

/*
Transfers the NFT from the signing wallet to the given address, to be used client-side only
as we use the wallet provider API
 */
export const transferNftClientSide = async (
  contractAddress: string,
  currentWallet: ConnectedWallet,
  params: TransferNftRequest & {
    feeDenom: FeeDenom;
  }
): Promise<TransferNftResponse & TxResult> => {
  const { feeDenom, ...transferParams } = params;
  return executeContractFromClient(
    {
      senderWallet: currentWallet,
      contractAddress,
      feeDenom: feeDenom,
      operations: [
        {
          message: {
            transfer_nft: transferParams,
          },
        },
      ],
    },
    terraLCDClient
  );
};

/*
Retrieves the tokenID's owned by a given address, limited to 30 results at a time
 */
export const getTokensOwnedByAddress = async (
  contractAddress: string,
  params: TokensQueryRequest
): Promise<TokensQueryResponse> => {
  return queryContract({
    lcdClient: terraLCDClient,
    contractAddress,
    queryName: 'tokens',
    queryParams: params,
  });
};

/*
Retrieves the owner of a specific token
 */
export const getOwnerOfToken = async (
  contractAddress: string,
  params: OwnerOfQueryRequest
): Promise<OwnerOfQueryResponse> => {
  return queryContract({
    lcdClient: terraLCDClient,
    contractAddress,
    queryName: 'owner_of',
    queryParams: params,
  });
};

/*
Retrieves NFT info for a specific token
 */
export const getInfoForToken = async (
  contractAddress: string,
  params: NftInfoQueryRequest
): Promise<NftInfoQueryResponse> => {
  return queryContract({
    lcdClient: terraLCDClient,
    contractAddress,
    queryName: 'nft_info',
    queryParams: params,
  });
};
