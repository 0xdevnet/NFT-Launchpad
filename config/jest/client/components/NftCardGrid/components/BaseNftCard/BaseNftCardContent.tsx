import React from 'react';
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Send } from '@mui/icons-material';

export type BaseNftCardContentProps = {
  name: string;
  description: string;
  // Image
  imageSrc?: string;
  // If either are given, card will be wrapped with an action area
  detailsHref?: string;
  onClick?(): void;
  // If given, a send action button is added
  onSendClicked?(): void;
};

const BaseNftCardContent: React.FC<BaseNftCardContentProps> = ({
  name,
  description,
  imageSrc,
  onSendClicked,
  detailsHref,
  onClick,
}) => {
  let cardContent = (
    <>
      <CardMedia
        component="img"
        image={imageSrc}
        alt={name}
        sx={{
          objectFit: 'cover',
          height: 256,
        }}
      />
      <CardContent>
        <Typography variant="caption">{description}</Typography>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </>
  );

  if (detailsHref) {
    cardContent = (
      <Link href={detailsHref} passHref>
        <CardActionArea>{cardContent}</CardActionArea>
      </Link>
    );
  } else if (onClick) {
    cardContent = (
      <CardActionArea onClick={onClick}>{cardContent}</CardActionArea>
    );
  }

  return (
    <Stack height="100%" justifyContent="space-between">
      {/*Main content*/}
      {cardContent}
      {/*Send button*/}
      {onSendClicked != null && (
        <Stack direction="row-reverse" mx={1} mb={1} mt={1}>
          <Button
            color="primary"
            endIcon={<Send fontSize="small" />}
            onClick={onSendClicked}
            size="small"
          >
            Send
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default BaseNftCardContent;
