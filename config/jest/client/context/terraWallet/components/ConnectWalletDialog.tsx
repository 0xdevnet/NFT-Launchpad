import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from '@mui/material';

type Props = {
  open: boolean;
  setOpen(val: boolean): void;
  // Render state
  canInstallChromeExtension: boolean;
  onInstallChromeExtensionClicked(): void;
  canConnectWithWalletConnect: boolean;
  onConnectWithWalletConnectClicked(): void;
};

const ConnectWalletDialog: React.FC<Props> = ({
  open,
  setOpen,
  canConnectWithWalletConnect,
  canInstallChromeExtension,
  onConnectWithWalletConnectClicked,
  onInstallChromeExtensionClicked,
}) => {
  const closeDialog = () => setOpen(false);

  return (
    <Dialog open={open} onClose={closeDialog} fullWidth>
      <DialogTitle>Connect Wallet</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          {/*Helper text*/}
          <Typography align="left">
            It looks like your browser doesn&rsquo;t have the{' '}
            <Link
              href="https://chrome.google.com/webstore/detail/terra-station/aiifbnbfobpmeekipheeijimdpnlpgpp?hl=en"
              target="_blank"
            >
              Terra Station Wallet Chrome Extension
            </Link>{' '}
            installed. For the best experience, please use Google Chrome with
            the Terra Station extension.
          </Typography>
          {/*Install chrome extension*/}
          {canInstallChromeExtension && (
            <Button
              onClick={onInstallChromeExtensionClicked}
              color="primary"
              variant="contained"
            >
              Install Chrome Extension
            </Button>
          )}
          {/*Wallet connect*/}
          {canConnectWithWalletConnect && (
            <Button
              onClick={onConnectWithWalletConnectClicked}
              color="primary"
              variant="outlined"
            >
              Connect with WalletConnect
            </Button>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletDialog;
