import { Box, BoxProps, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

type Props = {} & Partial<BoxProps>;

/*
Container for general help / error information. All items are centered
 */
const CenteredInfoContainer: React.FC<Props> = ({ children, ...boxProps }) => {
  const theme = useTheme();
  const useLargePadding = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      textAlign="center"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={useLargePadding ? 5 : 2}
      py={useLargePadding ? 15 : 5}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default CenteredInfoContainer;
