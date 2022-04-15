import {createTheme, PaletteMode} from '@mui/material'
import {lightBlue, blueGrey, purple} from '@mui/material/colors'

const getAppTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#8e8ffe',
      },
      secondary: {
        main: '#1c1c20',
      },
    },
    typography: {
      fontFamily: 'Roboto,sans-serif',
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 10,
    },
  })
}

export default getAppTheme
