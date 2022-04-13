import useSWR from 'swr';
import { getLogger } from '../../util/logger';
import { getOwnerOfToken } from '../../util/terra/contracts/nftContractUtils';

export type UseOwnerOfNftState = {
  owner?: string;
  loading: boolean;
  error: boolean;
};

export type UseOwnerOfNftParams = {
  contractAddress: string;
  tokenId: string;
};

const logger = getLogger('useOwnerOfNft');

const ownerOfFetcher = async (
  contractAddress: string,
  tokenId: string
): Promise<string> => {
  const ownerOfResp = await getOwnerOfToken(contractAddress, {
    token_id: tokenId,
  });
  return ownerOfResp.owner;
};

export const useOwnerOfNft = (
  params?: UseOwnerOfNftParams
): UseOwnerOfNftState => {
  const { data: owner, error } = useSWR(
    params != null ? [params.contractAddress, params.tokenId] : null,
    ownerOfFetcher
  );

  if (error) {
    logger.error('Fetch error', error);
  }

  return {
    owner,
    loading: !error && !owner,
    error: error,
  };
};
