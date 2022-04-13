import { getLogger } from '../../../util/logger';
import { useAllTraitsData } from './useAllTraitsData';
import { useEffect, useMemo, useState } from 'react';
import { compact, flatMap, intersection, mapValues, union } from 'lodash';

export type TraitTypeToValues = Record<string, string[]>;

/**
 * Util hook to enable easy filtering for traits
 */
export type UseFilterByTraitState = {
  matchingPunkNumbers?: number[];
  // Mapping of trait_type to an array of applied values
  appliedFilters: TraitTypeToValues; // TODO: Consider nested mapping
  // Mapping of trait_type to all filters
  availableFiltersByType: TraitTypeToValues;
  setAppliedFilters(filters: TraitTypeToValues): void;
  resetFilters(): void;
  loading: boolean;
  error: boolean;
};

const logger = getLogger('useFilterByTrait');

export const useFilterByTrait = (): UseFilterByTraitState => {
  const { allTraitsData, loading, error } = useAllTraitsData();
  const [appliedFilters, setAppliedFilters] = useState<
    Record<string, string[]>
  >({});

  const resetFilters = () => {
    setAppliedFilters((prev) => mapValues(prev, () => []));
  };

  useEffect(() => {
    if (allTraitsData != null) {
      // Initialize applied filters to be empty when we have data
      setAppliedFilters(mapValues(allTraitsData, () => []));
    }
  }, [allTraitsData]);

  const availableFiltersByType: Record<string, string[]> = useMemo(() => {
    if (allTraitsData == null) {
      return {};
    }

    return mapValues(allTraitsData, (traitDataForType) =>
      Object.keys(traitDataForType.valueData)
    );
  }, [allTraitsData]);

  // Filter will take the union across values within a trait_type and the intersection of
  // all trait_types that have filters applied
  const matchingPunkNumbers: number[] | undefined = useMemo(() => {
    if (
      flatMap(Object.values(appliedFilters)).length === 0 ||
      allTraitsData == null
    ) {
      // No data or no filters, so just return undef
      return;
    }

    // Get union of all punk numbers that match all applied filters
    const allPunkNumbersMatchingFilterValues: (number[] | undefined)[] =
      Object.keys(appliedFilters).map((filterType) => {
        const appliedFilterValues = appliedFilters[filterType];
        const matchingPunkNumbers = appliedFilterValues.map(
          (value) => allTraitsData[filterType].valueData[value].punkNumbers
        );

        // Return undefined if there are no filters so we can filter these out later
        // this is because we ignore cases where there are no applied filters
        return appliedFilterValues.length > 0
          ? union(...matchingPunkNumbers)
          : undefined;
      });

    // Return union of all matches
    return intersection(...compact(allPunkNumbersMatchingFilterValues));
  }, [allTraitsData, appliedFilters]);

  return {
    matchingPunkNumbers,
    appliedFilters,
    availableFiltersByType,
    setAppliedFilters,
    resetFilters,
    loading,
    error,
  };
};
