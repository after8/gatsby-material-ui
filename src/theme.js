import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BC8F8F',
    },
    secondary: {
      main: '#800000',
    },
    error: {
      main: '#CD5C5C',
    },
    background: {
      default: '#FFF',
    },
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 16,
  },
});

export default theme;