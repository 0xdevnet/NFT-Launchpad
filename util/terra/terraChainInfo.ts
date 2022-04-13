import { NetworkInfo } from '@terra-dev/wallet-types';
import {
  TERRA_LOCAL_CONFIG,
  TERRA_MAINNET_CONFIG,
  TERRA_TESTNET_CONFIG,
} from './terraNetworks';

/*
Provides chain information depending on environment
 */
const terraNetworkConfig = process.env.NEXT_PUBLIC_TERRA_NETWORK;

let defaultNetwork: NetworkInfo;
let walletConnectChainIds: Record<string, NetworkInfo>;

if (terraNetworkConfig === 'MAINNET') {
  defaultNetwork = TERRA_MAINNET_CONFIG;
  walletConnectChainIds = {
    1: TERRA_MAINNET_CONFIG,
  };
} else if (terraNetworkConfig === 'LOCAL') {
  defaultNetwork = TERRA_LOCAL_CONFIG;
  walletConnectChainIds = {
    2: TERRA_LOCAL_CONFIG,
  };
} else {
  defaultNetwork = TERRA_TESTNET_CONFIG;
  walletConnectChainIds = {
    0: TERRA_TESTNET_CONFIG,
  };
}

const terraChainInfo = {
  defaultNetwork,
  walletConnectChainIds,
} as const;

export default terraChainInfo;
