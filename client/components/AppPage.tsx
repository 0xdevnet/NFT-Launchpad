import React from 'react';
import { Box, Container, ContainerProps } from '@mui/material';
import NavBar from './NavBar/NavBar';

type Props = ContainerProps;

const AppPage: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh'
      }}
    >
      {/*Nav Bar*/}
      <NavBar />
      {/*Main content*/}
      <Container
        {...rest}
        sx={{
          padding: (theme) => ({
            xs: theme.spacing(4, 2),
            sm: theme.spacing(4, 4),
            md: theme.spacing(8, 12),
          }),
        }}
        maxWidth="lg"
      >
        {children}
      </Container>
    </Box>
  );
};

export default AppPage;
