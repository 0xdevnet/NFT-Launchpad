import React from 'react';
import { usePunkAirdropMetadata } from '../../../../hooks/punks/usePunkAirdropMetadata';
import { BaseNftCardContentProps } from '../BaseNftCard/BaseNftCardContent';
import BaseNftCard from '../BaseNftCard';

type Props = {
  type: 'portrait' | 'glitch';
  tokenId: string;
  onSendClicked?(): void;
};

const PunkAirdropCard: React.FC<Props> = ({ type, tokenId, onSendClicked }) => {
  const { data, loading, error } = usePunkAirdropMetadata(type, tokenId);
  const imageSrc =
    type === 'glitch'
      ? '/images/collection/punks/genesis-glitch-banner-lowres.jpg'
      : '/images/collection/punks/meeting-of-the-galactics.png';

  const cardContentProps: BaseNftCardContentProps | undefined =
    data != null
      ? {
          name: data.extension.name,
          description: 'Airdrop',
          imageSrc: imageSrc,
          detailsHref: undefined,
          onClick: undefined,
          onSendClicked,
        }
      : undefined;

  const errorMessage = error ? 'NFT could not be loaded' : undefined;

  return (
    <BaseNftCard
      loading={loading}
      error={errorMessage}
      loadedContentProps={cardContentProps}
    />
  );
};

export default PunkAirdropCard;
