import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './styles/index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c3ce0',
      light: '#8b5cf6',
      dark: '#4c1d95',
    },
    secondary: {
      main: '#f97316',
      light: '#fb923c',
      dark: '#ea580c',
    },
    background: {
      default: '#faf8ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: { fontFamily: '"Montserrat", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 14,
          padding: '10px 28px',
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
