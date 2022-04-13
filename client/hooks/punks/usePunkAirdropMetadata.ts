import useSWR from 'swr';
import { getLogger } from '../../../util/logger';
import { OnChainNftMetadata } from '../../../types/NftMetadataTypes';
import { PunkAirdropType } from '../../utils/punks/constants';
import {
  fetchPunkGlitchMetadata,
  fetchPunkPortraitMetadata,
} from '../../utils/punks/fetchPunkAirdropsMetadata';

export type UsePunkAirdropMetadataState = {
  data?: OnChainNftMetadata;
  loading: boolean;
  error: boolean;
};

const logger = getLogger('usePunkAirdropMetadata');

export const usePunkAirdropMetadata = (
  type: PunkAirdropType,
  tokenId: string
): UsePunkAirdropMetadataState => {
  const { data, error } = useSWR(
    [tokenId],
    type === 'glitch' ? fetchPunkGlitchMetadata : fetchPunkPortraitMetadata,
    {
      // Disable refetching as this is static data
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) {
    logger.error('Fetch error', error);
  }

  return {
    data,
    loading: !error && !data,
    error: error,
  };
};
