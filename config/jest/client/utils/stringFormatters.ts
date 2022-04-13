/**
 * Uppercases first letter of every word
 */
export const uppercaseFirstLetters = (str: string) => {
  return str
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1))
    .join(' ');
};

/**
 * Mapping of trait_type -> display name
 */
export const TRAIT_TYPE_TO_DISPLAY_NAME: Record<string, string> = {
  backgrounds: 'Background',
  suits: 'Suit',
  species: 'Species',
  jewelry: 'Jewelry',
  face: 'Face',
  hair: 'Hair',
  glasses: 'Glasses',
  headware: 'Headware',
};

/**
 * Formats trait rarity percentage
 */
export const formatTraitRarityPercentage = (
  rarityPercentage: number
): string => {
  return `${rarityPercentage.toFixed(2)}%`;
};
