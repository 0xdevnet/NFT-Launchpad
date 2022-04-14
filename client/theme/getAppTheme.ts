import { createTheme, PaletteMode } from '@mui/material';
import { lightBlue, blueGrey } from '@mui/material/colors';

const getAppTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#8E8FFE',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea'
    },
      secondary: blueGrey,
    },
    typography: {
      fontFamily: 'Open Sans, sans-serif',
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 10,
    },
  });
};

export default getAppTheme;
