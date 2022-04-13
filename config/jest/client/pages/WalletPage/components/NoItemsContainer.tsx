import React from 'react';
import { Paper, Typography } from '@mui/material';

type Props = {
  infoText?: string;
};

const NoItemsContainer: React.FC<Props> = ({ infoText }) => {
  const text = infoText ?? 'No Items Found';

  return (
    <Paper
      sx={{
        padding: 8,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6">{text}</Typography>
    </Paper>
  );
};

export default NoItemsContainer;
