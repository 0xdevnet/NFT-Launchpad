import React from 'react'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import {Box, Button, Divider, Link, Stack} from '@mui/material'
import ColorModeToggle from '../ColorModeToggle'
import NotificationBadge from '../NotificationBadge'
import {PUNKS_COLLECTION_PATH} from '../../../util/pathConstants'

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

  const onViewCollectionPage = currentPath === PUNKS_COLLECTION_PATH
  const onWalletPage = currentPath === '/wallet'

  return (
    <Stack direction="row" alignItems="center" spacing={4} pr={2}>
      <NavItem href={'/'} label="Home" isCurrentPath={onViewCollectionPage} />
      <NavItem
        href={'/'}
        label="Launchpad"
        isCurrentPath={onViewCollectionPage}
      />
      <NotificationBadge size="small" />
      <Button variant="contained">Connect Wallet</Button>
      <ColorModeToggle size="small" />
    </Stack>
  )
}

export default FullNavMenu
