import React from 'react';
import AppPage from './AppPage';
import { Box } from '@mui/material';
import SuspenseContainer, { SuspenseContainerProps } from './SuspenseContainer';

/**
 * A generic app page that shows a loader or an error depending on current state
 */
const SuspenseAppPage: React.FC<SuspenseContainerProps> = ({ state }) => {
  return (
    <AppPage>
      <Box marginTop="10vh">
        <SuspenseContainer state={state} />
      </Box>
    </AppPage>
  );
};

export default SuspenseAppPage;
