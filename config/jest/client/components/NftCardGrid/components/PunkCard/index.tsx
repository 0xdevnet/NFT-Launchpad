import React from 'react';
import { usePunkMetadata } from '../../../../hooks/punks/usePunkMetadata';
import { BaseNftCardContentProps } from '../BaseNftCard/BaseNftCardContent';
import { getRandomEarthCloudfrontUrl } from '../../../../../util/cidUtils';
import { PUNKS_COLLECTION_PATH } from '../../../../../util/pathConstants';
import BaseNftCard from '../BaseNftCard';

export type PunkCardProps = {
  punkNumber: number;
  // If given, a send action button is added
  onSendClicked?(): void;
};

const PunkCard: React.FC<PunkCardProps> = ({ punkNumber, onSendClicked }) => {
  const { data, error, loading } = usePunkMetadata(punkNumber);
  const punkNumberText = punkNumber.toFixed(0);

  const cardContentProps: BaseNftCardContentProps | undefined =
    data != null
      ? {
          name: `#${punkNumberText}`,
          description: 'Galactic Punks',
          imageSrc: getRandomEarthCloudfrontUrl(data.extension.image),
          detailsHref: `${PUNKS_COLLECTION_PATH}/${punkNumberText}`,
          onClick: undefined,
          onSendClicked,
        }
      : undefined;

  const errorText = error
    ? `Punk #${punkNumberText} could not be loaded`
    : undefined;

  return (
    <BaseNftCard
      loading={loading}
      error={errorText}
      loadedContentProps={cardContentProps}
    />
  );
};

export default PunkCard;
