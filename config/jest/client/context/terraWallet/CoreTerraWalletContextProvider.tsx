import React, { useEffect, useState } from 'react';
import {
  ConnectType,
  useConnectedWallet,
  useWallet,
  WalletStatus,
} from '@terra-money/wallet-provider';
import {
  TerraWalletContext,
  TerraWalletContextData,
} from './TerraWalletContext';
import ConnectWalletDialog from './components/ConnectWalletDialog';

/*
Application specific terra wallet context to attempt to establish connection to a wallet
 */
const CoreTerraWalletContextProvider: React.FC = ({ children }) => {
  // Wallet object given by wallet-provider
  const wallet = useWallet();
  const connectedWallet = useConnectedWallet();

  // Whether to show the secondary connect wallet dialog
  const [showConnectWalletDialog, setShowConnectWalletDialog] = useState(false);

  // Close the connect wallet dialog if connected
  useEffect(() => {
    if (wallet.status === WalletStatus.WALLET_CONNECTED) {
      setShowConnectWalletDialog(false);
    }
  }, [wallet.status]);

  // Only allow these connection types
  const canConnectWithChromeExtension = wallet.availableConnectTypes.includes(
    ConnectType.CHROME_EXTENSION
  );
  const canConnectWithWalletConnect = wallet.availableConnectTypes.includes(
    ConnectType.WALLETCONNECT
  );

  // Only allow chrome extension install, but only if it's not available already
  const canInstallChromeExtension =
    !canConnectWithChromeExtension &&
    wallet.availableInstallTypes.includes(ConnectType.CHROME_EXTENSION);

  const promptForWalletConnection = () => {
    if (canConnectWithChromeExtension) {
      // Best case - chrome extension already installed
      wallet.connect(ConnectType.CHROME_EXTENSION);
      return;
    } else if (!canInstallChromeExtension && canConnectWithWalletConnect) {
      // Can't have chrome extension (on mobile) - trigger wallet connect
      wallet.connect(ConnectType.WALLETCONNECT);
      return;
    }

    // Otherwise, show the connect wallet dialog to prompt for chrome extension installation
    setShowConnectWalletDialog(true);
  };

  const walletContextData: TerraWalletContextData = {
    wallet,
    promptForWalletConnection,
    currentWallet: connectedWallet,
    disconnectWallet: wallet.disconnect,
  };

  return (
    <TerraWalletContext.Provider value={walletContextData}>
      <ConnectWalletDialog
        open={showConnectWalletDialog}
        setOpen={setShowConnectWalletDialog}
        canInstallChromeExtension={canInstallChromeExtension}
        onInstallChromeExtensionClicked={() =>
          wallet.install(ConnectType.CHROME_EXTENSION)
        }
        canConnectWithWalletConnect={canConnectWithWalletConnect}
        onConnectWithWalletConnectClicked={() =>
          wallet.connect(ConnectType.WALLETCONNECT)
        }
      />
      {children}
    </TerraWalletContext.Provider>
  );
};

export default CoreTerraWalletContextProvider;
