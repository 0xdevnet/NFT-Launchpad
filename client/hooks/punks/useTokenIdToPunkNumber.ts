import useSWR from 'swr';
import { fetchTokenIdToPunkNumber } from '../../utils/punks/fetchTokenIdToPunkNumber';
import { getLogger } from '../../../util/logger';

export type UseTokenIdToPunkNumberState = {
  mapping?: Record<string, number>;
  loading: boolean;
  error: boolean;
};

const logger = getLogger('useTokenIdToPunkNumber');

export const useTokenIdToPunkNumber = (): UseTokenIdToPunkNumberState => {
  // Pass a dummy arg as falsy args prevent data fetching
  const { data, error } = useSWR('gp', fetchTokenIdToPunkNumber, {
    // Disable refetching as this is static data
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) {
    logger.error('Fetch error', error);
  }

  return {
    mapping: data,
    loading: !error && !data,
    error: error,
  };
};
