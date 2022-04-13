import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ColorModeToggle from '../ColorModeToggle';
import { PUNKS_COLLECTION_PATH } from '../../../util/pathConstants';

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

  const currentPath = useRouter().pathname;

  const onViewCollectionPage = currentPath === PUNKS_COLLECTION_PATH;
  const onWalletPage = currentPath === '/wallet';

  return (
    <div>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MenuIcon color="primary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={() => setAnchorEl(undefined)}
      >
        <MenuList>
          <NavItem
            href={PUNKS_COLLECTION_PATH}
            isCurrentPath={onViewCollectionPage}
            label="Collection"
          />
          <NavItem href="/wallet" isCurrentPath={onWalletPage} label="Wallet" />
          <Box display="flex" justifyContent="center">
            <ColorModeToggle size="small" />
          </Box>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MobileNavMenu;
