import React from 'react';
import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

type RoadmapItemProps = {
  title: string;
  content: React.ReactNode;
  isComplete?: boolean;
  withoutConnector?: boolean;
};

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  title,
  content,
  isComplete,
  withoutConnector,
}) => {
  const theme = useTheme();
  const showLargerText = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <TimelineItem>
      <TimelineOppositeContent
        color="text.secondary"
        mb={4}
        variant={showLargerText ? 'body1' : 'caption'}
      >
        {content}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          variant="outlined"
          color={isComplete ? 'primary' : 'secondary'}
        >
          {isComplete && (
            <Box
              height={24}
              width={24}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                sx={{
                  fontSize: 20,
                }}
              >
                🚀
              </Typography>
            </Box>
          )}
        </TimelineDot>
        {!withoutConnector && (
          <TimelineConnector
            sx={{
              backgroundColor: (theme) =>
                isComplete
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
            }}
          />
        )}
      </TimelineSeparator>
      <TimelineContent variant="h6">
        <strong>{title}</strong>
      </TimelineContent>
    </TimelineItem>
  );
};

const RoadmapSection = () => {
  return (
    <Stack spacing={4} justifyContent="center">
      {/*Title*/}
      <Box textAlign="center">
        <Typography
          variant="h4"
          display="inline"
          sx={{
            borderBottom: (theme) => `4px solid ${theme.palette.primary.main}`,
          }}
        >
          Roadmap
        </Typography>
      </Box>
      {/*Timeline*/}
      <Paper>
        <Timeline position="alternate">
          <RoadmapItem
            title="Galactic Punks Mint & Reveal"
            content="10,921 randomly generated NFTs are minted into the Terraverse. LUNAtic Twitter PFPs will never be the same."
            isComplete
          />
          <RoadmapItem
            title="Marketplace"
            content="Galactic Punks touch-down on RandomEarth and was the first collection available to buy, sell and auction on their marketplace. Rarity tools & features added."
            isComplete
          />
          <RoadmapItem
            title="Clubbing in the Cosmos & the Intergalactic Council"
            content="An intergalactic council will be established and its crew of community managers, event organizers, moderators and contributors seek to grow the Galactic mission."
            isComplete
          />
          <RoadmapItem
            title="GalacticDAO V1"
            content="Launch a social voting system for Galactic Punk holders to govern the Galactic treasury and future vision of the project. GPs will also have access to holder only channels."
          />
          <RoadmapItem
            title="GalacticShips"
            content="Every Galactic Punk needs a ship. Holders will be airdropped a randomly generated GalacticShip, which will be viewable in the Galactic Hub and added to RandomEarth."
          />
          <RoadmapItem
            title="Galactic Merch Drop"
            content="URL to IRL. The Galactic Merch drop will allow holders to rep GPs not only on Twitter."
          />
          <RoadmapItem
            title="NFTerra Hackathon"
            content="The Galactic mission is to further the NFT ecosystem in the Terraverse. Community members will be able to help host a NFT hackathon with a goal to encourage builders, artists and creators to build on Terra."
          />
          <RoadmapItem
            title="GalacticDAO V2"
            content="Transition governance onto the Galactic Hub and decentralize treasury control."
            withoutConnector
          />
        </Timeline>
      </Paper>
    </Stack>
  );
};

export default RoadmapSection;
