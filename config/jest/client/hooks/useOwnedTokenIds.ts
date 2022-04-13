import { getLogger } from '../../util/logger';
import { getTokensOwnedByAddress } from '../../util/terra/contracts/nftContractUtils';
import useSWR from 'swr';
import { TokensQueryResponse } from '../../util/terra/contracts/nftContractTypes';

export type UseOwnedTokenIdsState = {
  ownedTokenIds?: string[];
  loading: boolean;
  error: boolean;
};

export type UseOwnedTokenIdsParams = {
  contractAddress: string;
  walletAddress: string;
  startAfter?: string; // Token ID to start pagination AFTER (ie. this should be the last tokenId in ownedTokenIds
  limit?: number; // Leave undefined to fetch all
};

const logger = getLogger('useOwnedTokenIds');

const ownedTokenIdsFetcher = async (
  contractAddress: string,
  walletAddress: string,
  startAfter?: string,
  limit?: number
): Promise<string[]> => {
  let lastOwnedTokenId: string | undefined = startAfter;
  // Contract enforces a max of 30, so default to this;
  const fetchLimit = Math.min(limit ?? 30, 30);
  const ownedTokenIds: string[] = [];

  while (true) {
    const nextPageData: TokensQueryResponse = await getTokensOwnedByAddress(
      contractAddress,
      {
        owner: walletAddress,
        start_after: lastOwnedTokenId,
        limit: fetchLimit,
      }
    );
    if (nextPageData.tokens.length === 0) {
      break;
    }
    lastOwnedTokenId = nextPageData.tokens[nextPageData.tokens.length - 1];
    ownedTokenIds.push(...nextPageData.tokens);
  }

  return ownedTokenIds;
};

export const useOwnedTokenIds = (
  params?: UseOwnedTokenIdsParams
): UseOwnedTokenIdsState => {
  const { data: ownedTokenIds, error } = useSWR(
    params != null
      ? [
          params.contractAddress,
          params.walletAddress,
          params.startAfter,
          params.limit,
        ]
      : null,
    ownedTokenIdsFetcher
  );

  if (error) {
    logger.error('Fetch error', error);
  }

  return {
    ownedTokenIds: ownedTokenIds,
    loading: !error && ownedTokenIds == null,
    error: error,
  };
};
