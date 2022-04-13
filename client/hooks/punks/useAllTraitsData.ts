import useSWR from 'swr';
import { TraitData } from '../../../types/PunkMetadataTypes';
import { getLogger } from '../../../util/logger';
import { fetchTraitData } from '../../utils/punks/fetchTraitData';

/**
 * A somewhat hacky way to fetch data for traits by relying on a generated JSON file
 */

export type UseAllTraitsDataState = {
  allTraitsData?: TraitData;
  loading: boolean;
  error: boolean;
};

const logger = getLogger('useAllTraitsData');

export const useAllTraitsData = (): UseAllTraitsDataState => {
  const { data, error } = useSWR('useAllTraitsData', fetchTraitData, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) {
    logger.error('Fetch error', error);
  }

  return {
    allTraitsData: data,
    loading: !error && !data,
    error: error,
  };
};
