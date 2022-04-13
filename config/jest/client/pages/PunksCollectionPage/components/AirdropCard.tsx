import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

/*
Info cards for airdrops
 */

type Props = {
  onClick(): void;
  image: string;
  title: string;
};

const InfoCard: React.FC<Props> = ({ onClick, image, title }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea
        onClick={onClick}
        sx={{
          height: '100%',
        }}
      >
        <CardMedia height={128} component="img" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Airdrop
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const GlitchAirdropCard: React.FC<{
  onClick(): void;
}> = ({ onClick }) => (
  <InfoCard
    onClick={onClick}
    title="Genesis Glitch"
    image="/images/collection/punks/genesis-glitch-banner-lowres.jpg"
  />
);

export const MeetingAirdropCard: React.FC<{
  onClick(): void;
}> = ({ onClick }) => (
  <InfoCard
    onClick={onClick}
    title="Meeting of the Galactics"
    image="/images/collection/punks/meeting-of-the-galactics.png"
  />
);
