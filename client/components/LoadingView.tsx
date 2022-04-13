import {
  BoxProps,
  CircularProgress,
  CircularProgressProps,
} from '@mui/material';
import React from 'react';
import CenteredInfoContainer from './CenteredInfoContainer';

type Props = {
  container?: BoxProps;
  loader?: CircularProgressProps;
};

const LoadingView: React.FC<Props> = ({ container, loader }) => {
  return (
    <CenteredInfoContainer {...container}>
      <CircularProgress color="primary" {...loader} />
    </CenteredInfoContainer>
  );
};

export default LoadingView;
