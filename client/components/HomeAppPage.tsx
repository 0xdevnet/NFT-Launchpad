import React from 'react'
import {Box, Container, ContainerProps} from '@mui/material'
import NavBar from './NavBar/NavBar'
import HomeNavBar from '../components/NavBar/HomeNavBar'
import HomeFooter from './NavBar/HomeFooter'
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
  )
}

export default HomeAppPage
