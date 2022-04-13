import React from 'react';
import LoadingView from './LoadingView';
import { Stack, Typography } from '@mui/material';

export type SuspenseContainerProps = {
  state: 'loading' | 'error';
};

/**
 * A generic container that shows a loader / error message depending on given state
 */
const SuspenseContainer: React.FC<SuspenseContainerProps> = ({ state }) => {
  let content = <LoadingView />;
  if (state === 'error') {
    content = (
      <Stack spacing={2} textAlign="center">
        <Typography variant="h4">Something went wrong.</Typography>
        <Typography variant="subtitle1">
          Please refresh the page and try again.
        </Typography>
      </Stack>
    );
  }

  return content;
};

export default SuspenseContainer;
