import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

type CoreTeamMemberCardProps = {
  image: string;
  name: string;
  role: string;
  description: string;
};

const CoreTeamMemberCard: React.FC<CoreTeamMemberCardProps> = ({
  image,
  name,
  role,
  description,
}) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        alt={name + ' punk'}
        height="256"
        image={image}
      />
      <CardContent>
        <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
          <strong>{name}</strong>
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TEAM_MEMBER_PROPS: CoreTeamMemberCardProps[] = [
  {
    name: 'TASA',
    role: 'Co-Pilot',
    description:
      'Marketing, partnerships and business. Involved in growing and promoting collaboration in the Terra community - hackathon organizer and business development specialist. Currently working in the VC space.',
    image: '/images/team/tasa.png',
  },
  {
    name: 'GOODFUTURE_GG',
    role: 'Co-Pilot',
    description:
      'Marketing, creative direction, social media content marketer and web designer / developer. Passionate about NFTs and crypto. Has lead and worked to grow multiple crypto related projects.',
    image: '/images/team/goodfuture.png',
  },
  {
    name: 'FRANKFKA',
    role: 'Head Engineer',
    description:
      'Full stack engineer. Winner of multiple crypto hackathons. Passionate about blockchain technologies and finding ways to innovate in the fast growing space.',
    image: '/images/team/frankfka.png',
  },
  {
    name: 'JACKISNOTINABOX',
    role: 'Head of Community',
    description:
      'Community manager and community growth specialist. Fosters strong and non-toxic communities. Promotes and empowers community engagement.',
    image: '/images/team/jackisnotinabox.png',
  },
  {
    name: 'KARMA',
    role: 'Head of Design & Events',
    description:
      'Art historian and paintings conservator turned NFT aficionado. Excited to explore new forms of engagement at the intersection of social governance and art.',
    image: '/images/team/wagmigently.png',
  },
];

type ModeratorCardProps = {
  name: string;
  discord: string;
};

const ModeratorCard: React.FC<ModeratorCardProps> = ({ name, discord }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
          <strong>{name}</strong>
        </Typography>
        <Typography variant="body1">Discord: {discord}</Typography>
      </CardContent>
    </Card>
  );
};

const MODERATOR_PROPS: ModeratorCardProps[] = [
  {
    name: 'MC',
    discord: 'MC#6735',
  },
  {
    name: 'raldeo',
    discord: 'raldeo#1519',
  },
  {
    name: 'KOP.',
    discord: 'KOP.#9843',
  },
  {
    name: 'urboymm',
    discord: 'urboymm#3661',
  },
  {
    name: 'johnny boy',
    discord: 'johnnyboy#2731',
  },
  {
    name: 'samsepIOL🌔',
    discord: 'samsepIOL🌔#4584',
  },
  {
    name: 'ilcampe',
    discord: 'ilcampe#0782',
  },
  {
    name: 'kief',
    discord: 'kief#1702',
  },
];

const TeamSection = () => {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography
          variant="h4"
          display="inline"
          sx={{
            borderBottom: (theme) => `4px solid ${theme.palette.primary.main}`,
          }}
        >
          Meet the Team
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} alignItems="stretch">
          {TEAM_MEMBER_PROPS.map((teamMember) => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={teamMember.name}>
                <CoreTeamMemberCard {...teamMember} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box>
        <Box>
          <Typography
            variant="h6"
            display="inline"
            sx={{
              borderBottom: (theme) =>
                `2px solid ${theme.palette.primary.main}`,
            }}
          >
            Community Moderators
          </Typography>
        </Box>
        <Grid container spacing={2} alignItems="stretch" mt={1}>
          {MODERATOR_PROPS.map((moderator) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={moderator.name}>
                <ModeratorCard {...moderator} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

export default TeamSection;
