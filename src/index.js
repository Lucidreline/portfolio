import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// material ui config
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#1de9b6',
    },
  },
  typography: {
    fontSize: 20,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
