import {Box, useTheme} from '@mui/material'
import {borderRadius} from '@mui/system'
import React from 'react'

const DiscordIcon = () => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  return (
    <Box
      sx={[
        {
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backgroundColor: isDarkMode
            ? theme.palette.primary.light
            : theme.palette.secondary.light,
          borderRadius: '100%',
          height: '35px',
          width: '35px',
        },
      ]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        // fill={theme.palette.primary.main}
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </Box>
  )
}

export default DiscordIcon
