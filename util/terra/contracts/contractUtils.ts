import {
  Coins,
  LCDClient,
  MsgExecuteContract,
  StdFee,
} from '@terra-money/terra.js';
import { getLogger } from '../../logger';
import {
  ConnectedWallet,
  TxResult,
  UserDenied,
} from '@terra-money/wallet-provider';
import { getUstEquivalentCoin } from '../terraUtils';

const logger = getLogger('ContractUtils');

export type FeeDenom = 'uusd' | 'uluna';

/*
Queries
 */
export type QueryContractVariables<TRequest extends Record<string, any>> = {
  lcdClient: LCDClient;
  contractAddress: string;
  queryName: string; // (ex. all_tokens)
  queryParams: TRequest;
};

export const queryContract = async <TRequest, TResponse>({
  lcdClient,
  contractAddress,
  queryName,
  queryParams,
}: QueryContractVariables<TRequest>): Promise<TResponse> => {
  logger.debug('Query contract with params', {
    contractAddress,
    queryName,
    queryParams,
  });

  const result = await lcdClient.wasm.contractQuery(contractAddress, {
    [queryName]: queryParams,
  });

  logger.debug('Query complete with result', result);

  return result as TResponse;
};

/*
Execute
 */
export type ExecuteContractOperation = {
  message: Record<string, any>;
  coins?: Coins.Input;
};

export type ExecuteContractVariables = {
  senderWallet: ConnectedWallet; // Wallet object from wallet-provider.useConnectedWallet
  contractAddress: string;
  operations: Array<ExecuteContractOperation>;
  feeDenom: FeeDenom;
};

// Possible errors can be found here: https://github.com/terra-money/wallet-provider/blob/main/templates/next/pages/tx-sample.tsx#L46
export const executeContractFromClient = async (
  variables: ExecuteContractVariables,
  lcdClient: LCDClient
): Promise<TxResult> => {
  logger.debug('Execute contract with params', JSON.stringify(variables));

  const executeMessages: MsgExecuteContract[] = variables.operations.map(
    (op) => {
      return new MsgExecuteContract(
        variables.senderWallet.walletAddress,
        variables.contractAddress,
        op.message,
        op.coins
      );
    }
  );

  // Use the LCD client to create the transaction for fee estimation, which defaults to uluna
  const transaction = await lcdClient.tx.create(
    variables.senderWallet.walletAddress,
    {
      msgs: executeMessages,
    }
  );

  // Convert fee to UST if needed
  const txnFeeAmountInLuna = transaction.fee.amount.get('uluna');
  if (variables.feeDenom === 'uusd' && txnFeeAmountInLuna) {
    const txnFeeUst = await getUstEquivalentCoin(txnFeeAmountInLuna);
    transaction.fee = new StdFee(transaction.fee.gas, [txnFeeUst]);
  }

  const walletTransactionResult = await variables.senderWallet.post(
    transaction
  );

  logger.debug('Finished executing transaction', walletTransactionResult);

  if (!walletTransactionResult.success) {
    throw Error('Wallet transaction result indicates non-success');
  }

  return walletTransactionResult;
};

export const isUserDeniedTransactionError = (err: unknown): boolean => {
  return err instanceof UserDenied;
};
