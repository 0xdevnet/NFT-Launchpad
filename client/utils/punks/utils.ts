import { MAX_PUNK_NUMBER, MIN_PUNK_NUMBER } from './constants';

export const validatePunkNumber = (punkNum: string | number): boolean => {
  const numToValidate = typeof punkNum === 'string' ? Number(punkNum) : punkNum;

  return numToValidate >= MIN_PUNK_NUMBER && numToValidate <= MAX_PUNK_NUMBER;
};

const validateOrderedTokenId = (
  tokenId: string,
  max: number,
  min: number = 1
): boolean => {
  const tokenIdNum = Number(tokenId);

  return Number.isInteger(tokenIdNum) && tokenIdNum >= min && tokenIdNum <= max;
};

export const validatePortraitTokenId = (tokenId: string): boolean => {
  return validateOrderedTokenId(tokenId, 255);
};

export const validateGlitchTokenId = (tokenId: string): boolean => {
  return validateOrderedTokenId(tokenId, 718);
};
