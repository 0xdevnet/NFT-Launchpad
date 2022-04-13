import React, { useState } from 'react';
import AppPage from '../../components/AppPage';
import useTerraWalletContext from '../../context/terraWallet/useTerraWalletContext';
import { Box, Link, Stack, Typography } from '@mui/material';
import WalletButton from '../../components/WalletButton';
import NoConnectedWalletContainer from './components/NoConnectedWalletContainer';
import PunkNftGrid from './components/NftCardGrids/PunkNftGrid';
import TransferNftDialog, {
  TransferNftDialogProps,
} from '../../components/TransferNftDialog';

/*
Wallet page that currently displays ALL holdings without pagination
 */
const WalletPage = () => {
  const terraWalletContext = useTerraWalletContext();

  const [showTransferDialogForNft, setShowTransferDialogForNft] =
    useState<TransferNftDialogProps>();
  const closeTransferDialog = () => setShowTransferDialogForNft(undefined);

  // In the future, we should have section headings (ex. punks, gridz, etc.)
  // Or a tabbed structure, each section with its own pagination component
  let pageContent: JSX.Element;
  if (terraWalletContext.currentWallet == null) {
    pageContent = <NoConnectedWalletContainer />;
  } else {
    const headerRow = (
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box mr={2} mb={2}>
          <Typography variant="h4">Your Items</Typography>
          <Typography variant="caption">
            NFTs listed on marketplaces such as&nbsp;
            <Link
              href="https://randomearth.io/home"
              target="_blank"
              rel="noreferrer"
            >
              RandomEarth
            </Link>
            &nbsp;are not shown.
          </Typography>
        </Box>
        <Box>
          <WalletButton />
        </Box>
      </Stack>
    );

    pageContent = (
      <>
        {/*Transfer Dialog*/}
        {showTransferDialogForNft && (
          <TransferNftDialog
            nftName={showTransferDialogForNft.nftName}
            tokenId={showTransferDialogForNft.tokenId}
            contractAddress={showTransferDialogForNft.contractAddress}
            open={true}
            onClose={closeTransferDialog}
          />
        )}
        <Box>
          {headerRow}
          {/*Punk holdings*/}
          <PunkNftGrid showTransferNftDialog={setShowTransferDialogForNft} />
        </Box>
      </>
    );
  }

  return <AppPage>{pageContent}</AppPage>;
};

export default WalletPage;
