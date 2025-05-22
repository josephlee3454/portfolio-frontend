import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    
    },
    background: {
      default: '#f6f8fc',
    },
    secondary: {
        main: '#6b7280 '
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#0e0e0e',
    },
    secondary: {
        main: '#9ca3af'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});