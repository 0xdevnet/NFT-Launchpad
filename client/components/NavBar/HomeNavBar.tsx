import Link from 'next/link'
import React from 'react'

// import FullNavMenu from './FullNavMenu';
import HomeFullNavMenu from '../NavBar/HomeFullNavMenu'
import MobileNavMenu from './MobileNavMenu'
import {
  AppBar,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
} from '@mui/material'

import classes from './NavBar.module.scss'
import AppLogoFull from '../AppLogoFull'
import AppLogo from '../AppLogo'
/*
Nav bar component
 */
const NavBar: React.FC = () => {
  const theme = useTheme()
  const renderFullMenu = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid #00000024',
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '0px 50px',
          }}
        >
          <Stack direction="row" alignItems="center" width="100%">
            {/*Logo*/}
            <Link href="/" passHref>
              <Box className={classes.logoContainer}>
                {renderFullMenu ? (
                  <AppLogoFull
                    className={classes.logo}
                    alt="Galactic Punks Logo"
                    width={150}
                    height={50}
                    objectFit="contain"
                  />
                ) : (
                  <AppLogo
                    className={classes.logo}
                    alt="Galactic Punks Logo"
                    width={32}
                    height={32}
                    objectFit="contain"
                  />
                )}
              </Box>
            </Link>

            {/*Nav*/}
            {renderFullMenu ? <HomeFullNavMenu /> : <MobileNavMenu />}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default NavBar
