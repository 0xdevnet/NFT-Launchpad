import * as React from 'react'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LightModeIcon from '@mui/icons-material/LightMode'
import {IconButton, IconButtonProps, useTheme} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import {useAppThemeContext} from '../context/view/AppThemeContext'

type Props = {} & IconButtonProps

const NotificationBadge: React.FC<Props> = ({...rest}) => {
  const theme = useTheme()
  const appThemeContext = useAppThemeContext()
  const isDarkMode = theme.palette.mode === 'dark'

  return (
    <IconButton
      onClick={appThemeContext.toggleColorMode}
      color={isDarkMode ? 'primary' : 'secondary'}
      {...rest}
    >
      {isDarkMode ? <Notification /> : <Notification />}
    </IconButton>
  )
}

export function Notification() {
  return (
    <Badge badgeContent={4} color="primary">
      <NotificationsNoneIcon color="action" />
    </Badge>
  )
}

export default NotificationBadge
