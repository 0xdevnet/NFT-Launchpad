import Link from 'next/link';
import React from 'react';

import FullNavMenu from './FullNavMenu';
import MobileNavMenu from './MobileNavMenu';
import { AppBar, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import classes from './NavBar.module.scss';
import AppLogoFull from '../AppLogoFull';
import AppLogo from '../AppLogo';

/*
Nav bar component
 */
const NavBar: React.FC = () => {
  const theme = useTheme();
  const renderFullMenu = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/*Logo*/}
            <Link href="/" passHref>
              {renderFullMenu ? (
                <AppLogoFull
                  className={classes.logo}
                  alt="Galactic Punks Logo"
                  width={256}
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
            </Link>

            {/*Nav*/}
            {renderFullMenu ? <FullNavMenu /> : <MobileNavMenu />}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
