import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, IconButtonProps, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppThemeContext } from '../context/view/AppThemeContext';

type Props = {} & IconButtonProps;

const ColorModeToggle: React.FC<Props> = ({ ...rest }) => {
  const theme = useTheme();
  const appThemeContext = useAppThemeContext();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <IconButton
      onClick={appThemeContext.toggleColorMode}
      color={isDarkMode ? 'primary' : 'secondary'}
      {...rest}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ColorModeToggle;
