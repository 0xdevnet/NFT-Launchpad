import { TraitData } from '../../../types/PunkMetadataTypes';
import { fetchJson } from '../../../util/fetchJson';

export const fetchTraitData = async (): Promise<TraitData> => {
  return fetchJson('/assets/trait_data.json');
};
