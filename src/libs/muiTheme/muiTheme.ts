import { blue, common, grey } from '@mui/material/colors';
import { customColorMode } from '../../types/generalTypes';

const palette = {
  light: {
    primary: {
      main: '#1078ca',
      light: '#41a3f0',
      dark: '#0b548d',
    },
    secondary: {
      main: '#f87304',
      light: '#fb9036',
      dark: '#c85d03',
    },
  },
  dark: {
    primary: {
      main: '#1078ca',
      light: '#41a3f0',
      dark: '#0b548d',
    },
    secondary: {
      main: '#f87304',
      light: '#fb9036',
      dark: '#c85d03',
    },
  }
};

export const getDesignTokens = (mode: customColorMode | undefined) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },
          divider: grey[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: [
      'Oswald',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  },
});

export const getThemedComponents = (mode: customColorMode | undefined) => ({
  components: {
    ...(mode === 'light'
      ? {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: palette.light.primary.main,
              },
            },
          },
          MuiLink: {
            variant: 'h3',
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 0,
                color: common.white,
                fontFamily:
                  "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: 20,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              },
            },
            variants: [
              {
                props: { variant: 'contained' },
                style: {
                  fontFamily:
                    "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                },
              },
              {
                props: { variant: 'outlined' },
                style: {
                  color: palette.light.primary.main,
                },
              },
              {
                props: { variant: 'primary', color: 'primary' },
                style: {
                  border: '4px dashed blue',
                },
              },
            ],
          },
          MuiList: {
            styleOverrides: {
              root: {},
            },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                color: common.white,
                alignItems: 'stretch',
                fontFamily:
                  "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
              },
            },
          },
          MuiAccordion: {
            styleOverrides: {
              root: {
                color: common.white,
                fontFamily:
                  "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
              },
            },
          },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: blue[800],
              },
            },
          },
        }),
  },
});