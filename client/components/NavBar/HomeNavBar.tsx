import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
  const isDarkTheme = theme.palette.mode === 'dark'
  const renderFullMenu = useMediaQuery(theme.breakpoints.up('sm'))
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', function (e) {
        if (this.window.scrollY > 100) setIsScrolling(true)
        else setIsScrolling(false)
      })
    }
  }, [])
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: 'none',
          borderBottom: !isDarkTheme ? '1px solid #00000024' : '1px solid #ffffff14',
          backgroundColor: isScrolling && !isDarkTheme ? '#f5f8fa' : isDarkTheme ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
          backdropFilter: isScrolling && isDarkTheme && 'blur(8px)',
          padding: (theme) => ({
             xs: theme.spacing(2, 1),
            sm: theme.spacing(2, 2),
            md: theme.spacing(4, 6),
          })
        }}
      >
        <Toolbar>
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
