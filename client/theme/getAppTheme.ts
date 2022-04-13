import { createTheme, PaletteMode } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

const getAppTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: deepOrange,
      secondary: deepPurple,
    },
    typography: {
      fontFamily: 'Open Sans, sans-serif',
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 24,
    },
  });
};

export default getAppTheme;
