import React from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

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
      <Box mb={4} textAlign="center">
        <Typography
          variant="h4"
          display="inline"
          sx={{
            borderBottom: (theme) => `4px solid ${theme.palette.primary.main}`,
          }}
        >
          Latest Announcement
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Typography variant="h6">
          <strong>The Galactic Punks Validator is now live!</strong>
        </Typography>
        <Typography>
          The Validator was born out of Proposal 003 of GalacticDAO and provides
          everyone with a possibility to stake their LUNA with a reliable,
          low-commission, community-led Validator. Revenue is reinvested into
          DAO, and a part is used to fund NFT raffles for all stakers!
        </Typography>
        <Box textAlign="center">
          <Button
            variant="outlined"
            href="https://station.terra.money/validator/terravaloper19z68rv3d7dzvvtlxzma89jxsrssf9j36ylsfwc"
            target="_blank"
          >
            Stake with Us
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default AboutSection;
