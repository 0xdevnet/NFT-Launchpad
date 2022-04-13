import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import WalletButton from '../../../components/WalletButton';

const NoConnectedWalletContainer: React.FC = () => {
  return (
    <Paper
      sx={{
        padding: (theme) => theme.spacing(8, 8),
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4" textAlign="center">
          Wallet Not Connected
        </Typography>
        <WalletButton size="large" />
      </Stack>
    </Paper>
  );
};

export default NoConnectedWalletContainer;
