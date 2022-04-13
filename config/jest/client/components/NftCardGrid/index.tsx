import React from 'react';
import { Grid, GridProps } from '@mui/material';

type Props = {} & GridProps;

const NftCardGrid: React.FC<Props> = ({ children, ...gridProps }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} {...gridProps}>
      {React.Children.map(children, (child) => {
        return (
          <Grid item xs={6} md={4} lg={3}>
            {child}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NftCardGrid;
