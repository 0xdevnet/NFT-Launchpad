import React from 'react';
import useTerraWalletContext from '../../../../context/terraWallet/useTerraWalletContext';
import { useTokenIdToPunkNumber } from '../../../../hooks/punks/useTokenIdToPunkNumber';
import {
  useOwnedTokenIds,
  UseOwnedTokenIdsParams,
} from '../../../../hooks/useOwnedTokenIds';
import {
  GP_GLITCH_NFT_ADDRESS,
  GP_NFT_ADDRESS,
  GP_PORTRAIT_NFT_ADDRESS,
  PunkAirdropType,
} from '../../../../utils/punks/constants';
import SuspenseContainer from '../../../../components/SuspenseContainer';
import NftCardGrid from '../../../../components/NftCardGrid';
import PunkCard from '../../../../components/NftCardGrid/components/PunkCard';
import NoItemsContainer from '../NoItemsContainer';
import PunkAirdropCard from '../../../../components/NftCardGrid/components/PunkAirdropCard';
import { TransferNftDialogProps } from '../../../../components/TransferNftDialog';

type Props = {
  showTransferNftDialog(props: TransferNftDialogProps): void;
};

const PunkNftGrid: React.FC<Props> = ({ showTransferNftDialog }) => {
  const terraWalletContext = useTerraWalletContext();

  // Params for ownership
  const ownedTokenIdParams:
    | Record<'punk' | PunkAirdropType, UseOwnedTokenIdsParams>
    | undefined =
    terraWalletContext.currentWallet?.walletAddress != null
      ? {
          punk: {
            walletAddress: terraWalletContext.currentWallet.walletAddress,
            contractAddress: GP_NFT_ADDRESS,
          },
          glitch: {
            walletAddress: terraWalletContext.currentWallet.walletAddress,
            contractAddress: GP_GLITCH_NFT_ADDRESS,
          },
          portrait: {
            walletAddress: terraWalletContext.currentWallet.walletAddress,
            contractAddress: GP_PORTRAIT_NFT_ADDRESS,
          },
        }
      : undefined;

  // Owned airdrops
  const { ownedTokenIds: ownedGlitchTokenIds } = useOwnedTokenIds(
    ownedTokenIdParams?.glitch
  );
  const { ownedTokenIds: ownedPortraitTokenIds } = useOwnedTokenIds(
    ownedTokenIdParams?.portrait
  );

  // Owned punks -> map to punk number
  const { mapping: tokenIdToPunkNumber } = useTokenIdToPunkNumber();
  const {
    ownedTokenIds: ownedPunkTokenIds,
    loading,
    error,
  } = useOwnedTokenIds(ownedTokenIdParams?.punk);
  const hasPunks =
    ownedPunkTokenIds != null &&
    tokenIdToPunkNumber != null &&
    ownedPunkTokenIds.length > 0;

  if (loading || error) {
    return <SuspenseContainer state={loading ? 'loading' : 'error'} />;
  }

  return hasPunks ? (
    <NftCardGrid>
      {/*Airdrops*/}
      {ownedGlitchTokenIds?.map((tokenId) => (
        <PunkAirdropCard
          type="glitch"
          tokenId={tokenId}
          key={'glitch-' + tokenId}
          onSendClicked={() => {
            showTransferNftDialog({
              contractAddress: GP_GLITCH_NFT_ADDRESS,
              tokenId: tokenId,
              nftName: `Galactic Glitch #${tokenId}`,
            });
          }}
        />
      ))}
      {ownedPortraitTokenIds?.map((tokenId) => (
        <PunkAirdropCard
          type="portrait"
          tokenId={tokenId}
          key={'portrait-' + tokenId}
          onSendClicked={() => {
            showTransferNftDialog({
              contractAddress: GP_PORTRAIT_NFT_ADDRESS,
              tokenId: tokenId,
              nftName: `Meeting of the Galactics #${tokenId}`,
            });
          }}
        />
      ))}
      {/*Cards*/}
      {ownedPunkTokenIds?.map((punkTokenId) => {
        const punkNum = tokenIdToPunkNumber[punkTokenId];
        if (punkNum == null) {
          return null;
        }

        return (
          <PunkCard
            punkNumber={punkNum}
            key={'punk-' + punkTokenId}
            onSendClicked={() =>
              showTransferNftDialog({
                contractAddress: GP_NFT_ADDRESS,
                tokenId: punkTokenId,
                nftName: `Punk #${punkNum}`,
              })
            }
          />
        );
      })}
    </NftCardGrid>
  ) : (
    <NoItemsContainer />
  );
};

export default PunkNftGrid;
