import React from 'react';
import NextImage from 'next/image';
import {
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import classes from '../HomePage.module.scss';
import ContainerBackgroundImg from '../../../../public/images/background_night.png';
import NextLink from 'next/link';
import { PUNKS_COLLECTION_PATH } from '../../../../util/pathConstants';
import { SocialIcon } from 'react-social-icons';

const HeaderSection = () => {
  const theme = useTheme();
  const useLargeText = useMediaQuery(theme.breakpoints.up('sm'));

  const socialBackgroundColor = theme.palette.primary.main;
  const socialIconSize = useLargeText ? 48 : 36;
  return (
    <Paper
      sx={{
        padding: (theme) => ({
          xs: theme.spacing(8, 4, 6),
          sm: theme.spacing(12, 8, 8),
        }),
        position: 'relative',
      }}
    >
      <NextImage
        className={classes.background}
        src={ContainerBackgroundImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Stack
        spacing={2}
        sx={{
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Typography
          variant={useLargeText ? 'h2' : 'h4'}
          sx={{
            color: (theme) => theme.palette.common.white,
          }}
        >
          The Galactic Hub
        </Typography>
        <Typography
          variant={useLargeText ? 'subtitle1' : 'body1'}
          sx={{
            color: (theme) => theme.palette.common.white,
          }}
        >
          Welcome to the new home of the Galactic Punks.
        </Typography>
        <Stack direction="row" spacing={2}>
          <NextLink href={PUNKS_COLLECTION_PATH} passHref>
            <Button variant="contained" color="primary">
              View the Collection
            </Button>
          </NextLink>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">
          <SocialIcon
            style={{
              height: socialIconSize,
              width: socialIconSize,
            }}
            url="https://twitter.com/galactic_punks"
            target="_blank"
            bgColor={socialBackgroundColor}
          />
          <SocialIcon
            style={{
              height: socialIconSize,
              width: socialIconSize,
            }}
            url="https://discord.gg/TFwFze88Zy"
            target="_blank"
            bgColor={socialBackgroundColor}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HeaderSection;
