import React from 'react';
import Image from 'next/image';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';

import MoonImage from '/public/images/moon_punks.png';
import LaunchIcon from '@mui/icons-material/Launch';
import StoreIcon from '@mui/icons-material/Store';

const paragraphs = [
  'Galactic Punks are 10,921 randomly generated NFTs on the Terra blockchain.',
  'It was the year 2021 and Columbus-5 was around the corner. UST was the fastest growing stablecoin and the #TerraAutumn season was among them. Yet a group of LUNAtics couldn’t help feel like something was missing.',
  'After soul searching in the depths of the cosmos, it was clear what was needed: a jpeg for the people, specifically the LUNAtics of the Terraverse. Frustrated with gas wars down on Earthereum, they met on the Moon to mint Galactic Punks, the first collection of Terra NFTs. Join the Galactic Punks on their mission to bring NFTs to Terra.',
  'Galactic Punks were minted on October 2nd and sold out in 8 minutes. They can now be purchased on the RandomEarth marketplace.',
];

const AboutSection = () => {
  return (
    <Paper
      sx={{
        padding: {
          xs: 2,
          sm: 4,
        },
      }}
    >
      <Box mb={4}>
        <Typography
          variant="h4"
          display="inline"
          sx={{
            borderBottom: (theme) => `4px solid ${theme.palette.primary.main}`,
          }}
        >
          About Galactic Punks
        </Typography>
      </Box>
      <Box>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs md={9} pr={4}>
            {paragraphs.map((paragraph, idx) => {
              return (
                <Typography variant="body1" paragraph key={idx.toFixed(0)}>
                  {paragraph}
                </Typography>
              );
            })}
            <Stack direction="row" alignItems="center" spacing={2} mt={2}>
              <Button
                variant="text"
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
          </Grid>
          <Grid item md={3} display={{ xs: 'none', md: 'block' }}>
            <Image src={MoonImage} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default AboutSection;
