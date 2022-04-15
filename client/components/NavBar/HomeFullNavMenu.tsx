import React from 'react'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Link,
  Stack,
  TextField,
  useTheme,
} from '@mui/material'
import ColorModeToggle from '../ColorModeToggle'
import NotificationBadge from '../NotificationBadge'
import {PUNKS_COLLECTION_PATH} from '../../../util/pathConstants'
import {Search} from '@mui/icons-material'
import {styled, alpha} from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import {ClassNames} from '@emotion/react'
import classes from './NavBar.module.scss'

type NavItemProps = {
  href: string
  label: string
  isCurrentPath: boolean
}

const NavItem: React.FC<NavItemProps> = ({href, label, isCurrentPath}) => {
  return (
    <NextLink href={href} passHref>
      <Link color="primary" underline="none">
        <Box fontWeight={isCurrentPath ? 'bold' : undefined}>{label}</Box>
      </Link>
    </NextLink>
  )
}

const FullNavMenu: React.FC = () => {
  const currentPath = useRouter().pathname
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  const onViewCollectionPage = currentPath === PUNKS_COLLECTION_PATH
  const onWalletPage = currentPath === '/wallet'

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Stack direction="row" gap={3}>
        <NavItem href={'/'} label="Home" isCurrentPath={currentPath === '/'} />
        <NavItem
          href={'/'}
          label="Launchpad"
          isCurrentPath={currentPath === '/launchpad'}
        />
      </Stack>
      <Stack direction="row" alignItems="center" gap={3}>
        <TextField
          placeholder="Search Here"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              padding: 10,
            },
          }}
        />
        <NotificationBadge
          size="small"
          sx={{
            border: '1px solid #00000024',
          }}
        />
        <Button
          variant="contained"
          color={'secondary'}
          sx={[
            {
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            },
          ]}
        >
          Connect Wallet
        </Button>
        <ColorModeToggle
          size="small"
          color={'secondary'}
          sx={{
            border: '1px solid #00000024',
          }}
        />
      </Stack>
    </Stack>
  )
}

export default FullNavMenu
