import {createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider} from '@material-ui/core';
import React, {PropsWithChildren} from 'react';

export const MuiOverride = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#393939",
    },
    secondary: {
      main: "#F47A1F",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF"
    }
  },
  typography: {
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    htmlFontSize: 14,
    fontSize: 12,
    h1: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: 'uppercase',
      color: "#393939",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: 'uppercase',
      color: "#393939"
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: 'uppercase',
      color: "#393939",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: 'uppercase',
      color: "#393939",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: 'uppercase',
      color: "#393939",
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: 'uppercase',
      color: "#393939",
    },
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {
      color: "#868686"
    },
    caption: {},
    overline: {},
  },
  props: {
    MuiAppBar: {
      elevation: 0,
      position: 'relative',
    },
    MuiMenu: {
      elevation: 1,
    },
    MuiLink: {
      color: "secondary"
    }
  },
  overrides: {
    MuiGrid: {
      root: {}
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "rgba(32,37,41,0.9)",
      }
    },
    MuiToolbar: {
      regular: {
        backgroundColor: 'transparent',
      }
    },
    MuiAccordionSummary: {
      root: {
        backgroundColor: "rgb(243, 243, 243)"
      },
    },
    MuiListItem: {
      root: {
        "&$selected, &$selected:hover": {
          backgroundColor: "#F47A1F",
          color: "white"
        },
      },
      button: {
        color: 'black',
        textTransform: 'uppercase',
        textDecoration: 'none'
      },
    }
  },
  shape: {
    borderRadius: 0
  },
  mixins: {
    toolbar: {
      minHeight: 64
    }
  },
}));

export const GlobalStyle = ({children}: PropsWithChildren<any>) => {
  return (
    <ThemeProvider theme={MuiOverride}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
};
