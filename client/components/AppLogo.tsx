import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import Logo from '/public/images/logo-dark.png';

const AppLogo: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  return <NextImage src={Logo} {...props} />;
};

export default AppLogo;
