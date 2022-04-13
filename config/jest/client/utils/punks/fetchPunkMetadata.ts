import { PunkMetadata } from '../../../types/PunkMetadataTypes';
import { fetchJson } from '../../../util/fetchJson';
import { validatePunkNumber } from './utils';

export const fetchPunkMetadata = async (
  punkNumber: number
): Promise<PunkMetadata> => {
  if (!validatePunkNumber(punkNumber)) {
    throw Error('Invalid punk number: ' + punkNumber);
  }

  return fetchJson('/assets/punk-metadata/' + punkNumber.toFixed(0) + '.json');
};
