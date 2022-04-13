import React, { useState } from 'react';
import {
  Alert,
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import useTerraWalletContext from '../../context/terraWallet/useTerraWalletContext';
import { transferNftClientSide } from '../../../util/terra/contracts/nftContractUtils';
import LoadingView from '../LoadingView';
import { getLogger } from '../../../util/logger';
import {
  getTerraFinderUrlForTx,
  getValidatedWalletAddress,
} from '../../../util/terra/terraUtils';
import ProgressButton from '../ProgressButton';

export type TransferNftDialogProps = {
  // Name to display for a description, so we don't have to retrieve metadata
  nftName: string;
  tokenId: string;
  contractAddress: string;
};

type Props = TransferNftDialogProps & DialogProps;

const logger = getLogger('TransferNftDialog');

const TransferNftDialog: React.FC<Props> = ({
  nftName,
  tokenId,
  contractAddress,
  onClose,
  ...rest
}) => {
  // Local form state
  const [addressError, setAddressError] = useState<string>();
  const [destinationWalletAddr, setDestinationWalletAddr] = useState('');
  const validatedTerraAddress = getValidatedWalletAddress(
    destinationWalletAddr
  );
  // Validation - just checks that we have a valid address that's not
  // the same as the current address
  const onAddressFieldBlur = () => {
    if (!destinationWalletAddr.trim()) {
      // No input
      setAddressError(undefined);
    } else if (validatedTerraAddress != null) {
      // Valid address
      const isCurrentAddress =
        terraWalletContext.currentWallet?.walletAddress ===
        destinationWalletAddr;
      setAddressError(
        isCurrentAddress ? 'You cannot transfer to yourself.' : undefined
      );
    } else {
      // Invalid address
      setAddressError('Please enter a valid Terra address.');
    }
  };

  const terraWalletContext = useTerraWalletContext();
  // No need to check ownership - txn will just fail
  const canExecuteTransfer = terraWalletContext.currentWallet != null;

  // Transfer state + fns
  const [transferTxHash, setTransferTxHash] = useState<string>();
  const [isTransferring, setIsTransferring] = useState(false);
  const [transferError, setTransferError] = useState(false);
  const transferNftClicked = async () => {
    if (
      !canExecuteTransfer ||
      isTransferring ||
      terraWalletContext.currentWallet == null ||
      !validatedTerraAddress
    ) {
      logger.warn('Transfer clicked in invalid state');
      return;
    }

    setIsTransferring(true);
    try {
      const txResult = await transferNftClientSide(
        contractAddress,
        terraWalletContext.currentWallet,
        {
          feeDenom: 'uluna', // Need to support UST in the future
          recipient: validatedTerraAddress,
          token_id: tokenId,
        }
      );
      setTransferTxHash(txResult.result.txhash);
    } catch (err) {
      logger.error('Error transferring NFT', err);
      setTransferError(true);
    }
    setIsTransferring(false);
  };

  // View state
  const disableButton =
    !validatedTerraAddress || isTransferring || !canExecuteTransfer;

  // Reset state on unmount
  const onDialogClose: DialogProps['onClose'] = (event, reason) => {
    setAddressError(undefined);
    setDestinationWalletAddr('');
    setIsTransferring(false);
    setTransferTxHash(undefined);
    setTransferError(false);
    onClose?.(event, reason);
  };

  let content = <LoadingView />;
  if (transferTxHash) {
    content = (
      <Box padding={4} textAlign="center">
        <Stack alignItems="center">
          <Typography variant="h6">{nftName} Transferred!</Typography>
          <Link href={getTerraFinderUrlForTx(transferTxHash)} target="_blank">
            View Transaction
          </Link>
        </Stack>
      </Box>
    );
  } else if (!canExecuteTransfer) {
    // Show error
    content = (
      <Box padding={4} textAlign="center">
        <Typography variant="h6">
          Something went wrong. Please close this dialog and try again.
        </Typography>
      </Box>
    );
  } else {
    // Valid state
    content = (
      <Stack spacing={2} paddingTop={1}>
        {transferError && (
          <Alert severity="error" onClose={() => setTransferError(false)}>
            Something went wrong. Please try again.
          </Alert>
        )}
        <TextField
          label="Address"
          value={destinationWalletAddr}
          onChange={(e) => setDestinationWalletAddr(e.currentTarget.value)}
          onBlur={onAddressFieldBlur}
          error={!!addressError}
          helperText={
            addressError ??
            'Please ensure you have LUNA for the transaction fee.'
          }
          fullWidth
        />
        <ProgressButton
          variant="contained"
          color="primary"
          onClick={transferNftClicked}
          disabled={disableButton}
          loading={isTransferring}
        >
          Send
        </ProgressButton>
      </Stack>
    );
  }

  return (
    <Dialog {...rest} fullWidth maxWidth="xs" onClose={onDialogClose}>
      {canExecuteTransfer && <DialogTitle>Transfer {nftName}</DialogTitle>}
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default TransferNftDialog;
