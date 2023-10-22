import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Router } from './Router';
import { Provider } from 'react-redux';
import { store } from './store';
import { purple } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: purple,
          secondary: green
        },
        spacing: 2
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}