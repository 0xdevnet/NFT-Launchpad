import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import LogoBlackText from '/public/images/gp_full_logo_black_text.png';
import LogoWhiteText from '/public/images/gp_full_logo_white_text.png';
import { useTheme } from '@mui/material';

const AppLogoFull: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <NextImage src={isDarkTheme ? LogoWhiteText : LogoBlackText} {...props} />
  );
};

export default AppLogoFull;
