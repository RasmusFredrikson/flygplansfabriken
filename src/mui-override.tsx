import {
    CssBaseline,
    responsiveFontSizes,
    StyledEngineProvider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { PropsWithChildren } from "react";

export const MuiOverride = responsiveFontSizes(
    createTheme({
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
                default: "#FFFFFF",
            },
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
                textTransform: "uppercase",
                color: "#393939",
            },
            h2: {
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                color: "#393939",
            },
            h3: {
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                color: "#393939",
            },
            h4: {
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                color: "#393939",
            },
            h5: {
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                color: "#393939",
            },
            h6: {
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                color: "#393939",
            },
            subtitle1: {},
            subtitle2: {},
            body1: {},
            body2: {
                color: "#868686",
            },
            caption: {},
            overline: {},
        },
        components: {
            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                    position: "relative",
                },
                styleOverrides: {
                    colorPrimary: {
                        backgroundColor: "rgba(32,37,41,0.9)",
                    },
                },
            },
            MuiGrid: {
                styleOverrides: {
                    root: {},
                },
            },
            MuiMenu: {
                defaultProps: {
                    elevation: 1,
                },
            },
            MuiLink: {
                defaultProps: {
                    color: "secondary",
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    regular: {
                        backgroundColor: "transparent",
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        backgroundColor: "rgb(243, 243, 243)",
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected, &.Mui-selected:hover": {
                            backgroundColor: "#F47A1F",
                            color: "white",
                        },
                    },
                    button: {
                        color: "black",
                        textTransform: "uppercase",
                        textDecoration: "none",
                    },
                },
            },
        },
        shape: {
            borderRadius: 0,
        },
        mixins: {
            toolbar: {
                minHeight: 64,
            },
        },
    }),
);

export const GlobalStyle = ({ children }: PropsWithChildren) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={MuiOverride}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
