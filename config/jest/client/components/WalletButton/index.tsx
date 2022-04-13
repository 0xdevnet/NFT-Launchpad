import React from 'react';
import useTerraWalletContext from '../../context/terraWallet/useTerraWalletContext';
import { Button, ButtonProps, Tooltip } from '@mui/material';
import { getShortenedTerraAddress } from '../../../util/terra/terraUtils';

type Props = {} & ButtonProps;

const WalletButton: React.FC<Props> = ({ ...rest }) => {
  const terraWalletContext = useTerraWalletContext();
  const connectedWalletAddress =
    terraWalletContext.currentWallet?.walletAddress;

  let buttonText: string;
  let onClick: () => void;

  if (connectedWalletAddress) {
    // Has connected wallet
    buttonText = getShortenedTerraAddress(connectedWalletAddress);
    onClick = () => {
      terraWalletContext.disconnectWallet();
    };
  } else {
    // Prompt for Connection
    buttonText = 'Connect Wallet';
    onClick = () => {
      terraWalletContext.promptForWalletConnection();
    };
  }

  const button = (
    <Button
      variant="outlined"
      onClick={onClick}
      {...rest}
      sx={{
        // Prevents text wrapping
        minWidth: 150,
      }}
    >
      {buttonText}
    </Button>
  );

  return connectedWalletAddress ? (
    <Tooltip title="Click to disconnect">{button}</Tooltip>
  ) : (
    button
  );
};

export default WalletButton;
