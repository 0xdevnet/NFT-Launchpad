import { usePunkMetadata } from './usePunkMetadata';
import {
  useOwnerOfNft,
  UseOwnerOfNftParams,
  UseOwnerOfNftState,
} from '../useOwnerOfNft';
import { GP_NFT_ADDRESS } from '../../utils/punks/constants';

export const useOwnerOfPunk = (punkNumber: number): UseOwnerOfNftState => {
  const { data: punkMetadata } = usePunkMetadata(punkNumber);
  const ownerOfParams: UseOwnerOfNftParams | undefined =
    punkMetadata != null
      ? {
          contractAddress: GP_NFT_ADDRESS,
          tokenId: punkMetadata.token_id,
        }
      : undefined;

  return useOwnerOfNft(ownerOfParams);
};
