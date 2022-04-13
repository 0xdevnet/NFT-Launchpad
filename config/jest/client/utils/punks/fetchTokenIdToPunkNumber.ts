import { fetchJson } from '../../../util/fetchJson';

export const fetchTokenIdToPunkNumber = async (): Promise<
  Record<string, number>
> => {
  return fetchJson('/assets/token_id_to_punk_num.json');
};
