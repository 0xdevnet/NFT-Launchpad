import React, { useState } from 'react';
import {
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import NextImage from 'next/image';
import classes from './CollectionHeader.module.scss';
import StoreIcon from '@mui/icons-material/Store';
import LaunchIcon from '@mui/icons-material/Launch';

import Banner from '/public/images/background_punks.png';
import { GlitchAirdropCard, MeetingAirdropCard } from './AirdropCard';
import {
  GlitchAirdropDialog,
  PortraitAirdropDialog,
} from './AirdropInfoDialog';
import { PunkAirdropType } from '../../../utils/punks/constants';

const CollectionHeader = () => {
  const theme = useTheme();
  const isMediumScreenOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

  const [airdropDetailsDialogToShow, setAirdropDetailsDialogToShow] =
    useState<PunkAirdropType>();
  const closeAirdropDetailsDialog = () =>
    setAirdropDetailsDialogToShow(undefined);

  return (
    <Paper
      sx={{
        padding: (theme) => theme.spacing(8, 4),
        mb: 4,
        position: 'relative',
      }}
    >
      {/*Airdrop info dialogs*/}
      <PortraitAirdropDialog
        open={airdropDetailsDialogToShow === 'portrait'}
        onClose={closeAirdropDetailsDialog}
      />
      <GlitchAirdropDialog
        open={airdropDetailsDialogToShow === 'glitch'}
        onClose={closeAirdropDetailsDialog}
      />
      {/*Background image*/}
      <NextImage
        className={classes.banner}
        src={Banner}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {/*Content items*/}
      <Stack
        spacing={4}
        sx={{
          zIndex: 1,
          position: 'relative',
        }}
        alignItems="center"
      >
        <Typography
          textAlign="center"
          variant={isMediumScreenOrLarger ? 'h2' : 'h4'}
          sx={{
            color: (theme) => theme.palette.common.white,
          }}
        >
          The Collection
        </Typography>
        {/*Links to contract / mktplace*/}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<StoreIcon />}
            href="https://randomearth.io/collections/terra103z9cnqm8psy0nyxqtugg6m7xnwvlkqdzm4s4k"
            target="_blank"
          >
            Marketplace
          </Button>
          <Button
            variant="text"
            startIcon={<LaunchIcon />}
            size="small"
            href="https://finder.terra.money/columbus-5/address/terra103z9cnqm8psy0nyxqtugg6m7xnwvlkqdzm4s4k"
            target="_blank"
          >
            Smart Contract
          </Button>
        </Stack>
        {/*Airdrops*/}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
          <GlitchAirdropCard
            onClick={() => setAirdropDetailsDialogToShow('glitch')}
          />
          <MeetingAirdropCard
            onClick={() => setAirdropDetailsDialogToShow('portrait')}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CollectionHeader;
