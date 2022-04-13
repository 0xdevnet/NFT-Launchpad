import { TraitTypeToValues } from '../../../../hooks/punks/useFilterByTrait';

export type TraitFilterProps = {
  previousFilters: TraitTypeToValues;
  availableFilters: TraitTypeToValues;
  setTraitFilters(filters: TraitTypeToValues): void;
  resetTraitFilters(): void;
};
