import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// TODO: extract some of the common theme elements from the changeable ones
const theme = createMuiTheme({
  // https://next.material-ui.com/customization/color/
  palette: {
    type: 'dark',
    primary: {
      main: '#0fb658'
    },
    secondary: {
      main: '#d500f9'
    },
    background: {
      default: '#b96480'
    }
  },
  overrides: {
    MuiButton: {
      label: {
        // justifyContent: 'left',
        // textTransform: 'none'
      },
      root: {
        // borderRadius: 10
      }
    },
    MuiPaper: {
      root: {
        // borderRadius: 24
        // backgroundColor: 'orange'
      }
    }
  }
});

export default responsiveFontSizes(theme);
