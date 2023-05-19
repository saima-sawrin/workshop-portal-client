import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background:{
        main: '#2563EB',
        white: '#FFFFFF'

    },
    text: {
        white: '#FFFFFF',
        Blue: '#2563EB'
    }
  },
});

export default theme;