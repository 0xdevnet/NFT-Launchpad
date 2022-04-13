import React from 'react'
import NextImage, {ImageProps} from 'next/image'
import LogoBlackText from '/public/images/logo.png'
import LogoWhiteText from '/public/images/logo.png'
import {useTheme} from '@mui/material'

const AppLogoFull: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const theme = useTheme()
  const isDarkTheme = theme.palette.mode === 'dark'

  return (
    <NextImage src={isDarkTheme ? LogoWhiteText : LogoBlackText} {...props} />
  )
}

export default AppLogoFull
