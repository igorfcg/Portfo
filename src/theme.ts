import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main:'#4fe8e3e',
    },
  },
  typography: {
    fontFamily: "segoe UI",
  }
});

theme = responsiveFontSizes(theme)

export default theme;