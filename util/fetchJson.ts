export const fetchJson = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const resp = await fetch(input, init);
  const respJson = await resp.json();

  return respJson as T;
};
