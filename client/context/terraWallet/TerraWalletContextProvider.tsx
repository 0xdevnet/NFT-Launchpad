import React from 'react';
import {
  StaticWalletProvider,
  WalletProvider,
} from '@terra-money/wallet-provider';
import CoreTerraWalletContextProvider from './CoreTerraWalletContextProvider';
import terraChainInfo from '../../../util/terra/terraChainInfo';

/*
Outer wrapper around the core TerraWalletContextProvider to wrap our logic in a `WalletProvider` instance
 */
const TerraWalletContextProvider: React.FC = ({ children }) => {
  const mainContent = (
    <CoreTerraWalletContextProvider>{children}</CoreTerraWalletContextProvider>
  );

  return typeof window !== 'undefined' ? (
    <WalletProvider
      defaultNetwork={terraChainInfo.defaultNetwork}
      walletConnectChainIds={terraChainInfo.walletConnectChainIds}
    >
      {mainContent}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={terraChainInfo.defaultNetwork}>
      {mainContent}
    </StaticWalletProvider>
  );
};

export default TerraWalletContextProvider;
