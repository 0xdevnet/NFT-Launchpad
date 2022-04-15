import React from 'react'
import {Box, Container, ContainerProps} from '@mui/material'
import NavBar from './NavBar/NavBar'
import HomeNavBar from '../components/NavBar/HomeNavBar'
import HomeFooter from './HomeFooter'
type Props = ContainerProps

const HomeAppPage: React.FC<Props> = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      {/*Nav Bar*/}
      <HomeNavBar />
      {/*Main content*/}
      <Container
        {...rest}
        sx={{
          padding: (theme) => ({
            xs: theme.spacing(2, 1),
            sm: theme.spacing(2, 2),
            md: theme.spacing(4, 6),
          }),
        }}
        maxWidth="lg"
      >
        {children}
      </Container>
      <HomeFooter />
    </Box>
  )
}

export default HomeAppPage
