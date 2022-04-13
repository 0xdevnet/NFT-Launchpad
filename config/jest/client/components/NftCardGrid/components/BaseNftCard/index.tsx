import { Card, CardProps, Typography } from '@mui/material';
import React from 'react';
import LoadingView from '../../../LoadingView';
import CenteredInfoContainer from '../../../CenteredInfoContainer';
import BaseNftCardContent, {
  BaseNftCardContentProps,
} from './BaseNftCardContent';

export type BaseNftCardProps = {
  loading?: boolean;
  // Error message
  error?: string;
  loadedContentProps?: BaseNftCardContentProps;
} & CardProps;

const BaseNftCard: React.FC<BaseNftCardProps> = ({
  loading,
  error,
  loadedContentProps,
  ...cardProps
}) => {
  let cardContent = <LoadingView />;
  if (loadedContentProps != null) {
    cardContent = <BaseNftCardContent {...loadedContentProps} />;
  } else if (error) {
    cardContent = (
      <CenteredInfoContainer>
        <Typography variant="body1">{error}</Typography>
      </CenteredInfoContainer>
    );
  }

  return (
    <Card sx={{ height: '100%' }} {...cardProps}>
      {cardContent}
    </Card>
  );
};

export default BaseNftCard;
