import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
      dark: purple[900]
    },
    secondary: {
      main: green[500],
      dark: green[900]
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Header />
          <Main />
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
