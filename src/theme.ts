import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main:'#35612d',
    },
  },
  typography: {
    fontFamily: "segoe UI",
  }
});

theme = responsiveFontSizes(theme)

export default theme;