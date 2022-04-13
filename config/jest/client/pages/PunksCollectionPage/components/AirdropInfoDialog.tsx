import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  Stack,
  Typography,
} from '@mui/material';
import NextImage from 'next/image';
import GlitchImage from '/public/images/collection/punks/genesis-glitch-banner-lowres.jpg';
import PortraitImage from '/public/images/collection/punks/meeting-of-the-galactics.png';

import LaunchIcon from '@mui/icons-material/Launch';
import { getTerraFinderUrlForAddress } from '../../../../util/terra/terraUtils';

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  contractAddress: string;
} & DialogProps;

const AirdropInfoDialog: React.FC<Props> = ({
  image,
  title,
  description,
  contractAddress,
  ...rest
}) => {
  return (
    <Dialog maxWidth="md" fullWidth {...rest}>
      <Box height={512} maxHeight="30vh" position="relative">
        <NextImage
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Box textAlign="center">
            <Button
              variant="text"
              startIcon={<LaunchIcon />}
              size="small"
              href={getTerraFinderUrlForAddress(contractAddress)}
              target="_blank"
            >
              Smart Contract
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export const GlitchAirdropDialog: React.FC<DialogProps> = (props) => {
  return (
    <AirdropInfoDialog
      image={GlitchImage}
      title="Genesis Glitch"
      description="The Genesis Glitch is a unique celebration of the Galactic Punks mint, showcasing every punk made. A limited supply was airdropped to every Galactic Glitch holder on Oct 16th."
      contractAddress="terra1tf0ns9mvytce37l4kf7vrslayjplwaufhvh3mu"
      {...props}
    />
  );
};

export const PortraitAirdropDialog: React.FC<DialogProps> = (props) => {
  return (
    <AirdropInfoDialog
      image={PortraitImage}
      title="Meeting of the Galactics"
      description="The Meeting of the Galactics was designed by Luna Millionaire Portrait and captures the meeting of First Galactic Settlers & Explorers as they discuss the formation of GalacticDAO. The portrait was airdropped on Oct 16th, the same weekend the first version of the DAO was announced."
      contractAddress="terra1547l9gaz36s6p30lpmgwy9ezs07wsflpha68yx"
      {...props}
    />
  );
};
