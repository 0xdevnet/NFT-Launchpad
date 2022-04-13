import useSWR from 'swr';
import { fetchPunkMetadata } from '../../utils/punks/fetchPunkMetadata';
import { PunkMetadata } from '../../../types/PunkMetadataTypes';
import { getLogger } from '../../../util/logger';

export type UsePunkMetadataState = {
  data?: PunkMetadata;
  loading: boolean;
  error: boolean;
};

const logger = getLogger('usePunkMetadata');

export const usePunkMetadata = (punkNumber?: number): UsePunkMetadataState => {
  const { data, error } = useSWR(
    punkNumber != null ? [punkNumber] : [],
    fetchPunkMetadata,
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
