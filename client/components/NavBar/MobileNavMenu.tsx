import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, Divider, Fade, IconButton, Menu, MenuItem, MenuList, SwipeableDrawer, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ColorModeToggle from '../ColorModeToggle';
import { PUNKS_COLLECTION_PATH } from '../../../util/pathConstants';
import AppLogo from '../AppLogo';
import { Close } from '@mui/icons-material';

type NavItemProps = {
  href: string;
  label: string;
  isCurrentPath: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ href, label, isCurrentPath }) => {
  return (
    <Link href={href} passHref>
      <MenuItem
        selected={isCurrentPath}
        sx={{
          textAlign: 'center',
        }}
      >
        {label}
      </MenuItem>
    </Link>
  );
};


const MobileNavMenu: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>();
  const theme = useTheme()
  const currentPath = useRouter().pathname;
  const onHomePage = currentPath === '/';
  const onLaunchPadPage = currentPath === '/launchpad';

  return (
    <Box>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MenuIcon color="primary" />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={!!anchorEl}
        onClose={() => setAnchorEl(undefined)}
        onOpen={() => { }}
      >
        <Box sx={{ width: 375 }}>
          <MenuList>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={theme.spacing(3, 4)}>
              <AppLogo
                alt="Galactic Punks Logo"
                width={50}
                height={50}
                objectFit="contain"
              />
              <Box padding={theme.spacing(1)}
                sx={{
                  width: 50,
                  height: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '100%',
                  backgroundColor: theme.palette.secondary.light
                }}
                onClick={() => setAnchorEl(undefined)}
              >
                <Close />
              </Box>
            </Box>
            <Divider variant="fullWidth" />

            <NavItem
              href={'/'}
              isCurrentPath={onHomePage}
              label="Home"
              sx={{ paddingTop: '5px' }}
            />
            <Divider variant="fullWidth" />
            <NavItem href="/wallet" isCurrentPath={onLaunchPadPage} label="Launchpad" />
            <Divider variant="fullWidth" />
            <ColorModeToggle size="large" />
          </MenuList>
        </Box>
      </SwipeableDrawer >
    </Box >
  );
};

export default MobileNavMenu;
