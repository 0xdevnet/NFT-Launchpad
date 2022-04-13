import { ConnectedWallet, Wallet } from '@terra-money/wallet-provider';
import { createContext } from 'react';

export type TerraWalletContextData = {
  // Wallet object provided by https://github.com/terra-money/wallet-provider
  wallet: Wallet;
  // Currently connected wallet
  currentWallet?: ConnectedWallet;
  disconnectWallet(): void;
  // Attempts to establish connection to a wallet, or prompt an install of chrome extension
  promptForWalletConnection(): void;
};

// Hacky default for empty object
export const TerraWalletContext = createContext<TerraWalletContextData>(
  {} as TerraWalletContextData
);
