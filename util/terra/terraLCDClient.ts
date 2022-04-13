import { LCDClient } from '@terra-money/terra.js';
import terraChainInfo from './terraChainInfo';

const terraLCDClient = new LCDClient({
  URL: terraChainInfo.defaultNetwork.lcd,
  chainID: terraChainInfo.defaultNetwork.chainID,
});

export default terraLCDClient;
