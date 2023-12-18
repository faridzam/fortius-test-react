import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deepmerge } from '@mui/utils';
import React from 'react';
import { customColorMode } from '../../types/generalTypes';
import { ColorModeContext } from './colorContext';
import { getDesignTokens, getThemedComponents } from './muiTheme';

export default function CustomThemeProvider(
  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = React.useState<customColorMode>();

  React.useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       {children}       
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}