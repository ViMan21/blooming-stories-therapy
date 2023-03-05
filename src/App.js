import './App.css';
import * as React from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import FaqPage from './pages/faq';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes, Navigate } from "react-router-dom";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    background: {
      default: '#ACBD9D',
      paper: '#ACBD9D',
    },
    primary: {
      light: '#def0ce',
      main: '#acbd9d',
      dark: '#7d8d6f',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffd0c2',
      main: '#fff',
      dark: '#a97064',
      contrastText: '#000',
    },
    neutral: {
      main: '#9D9D86',
      contrastText: '#000',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    h1: {
      fontFamily: 'kurale',
      fontSize: '9vw',
      '@media (min-width:600px)': {
        fontSize: '6rem',
      } 
    }, 
    h2: {
      fontFamily: 'kurale',
      fontSize: '8vw',
      '@media (min-width:600px)': {
        fontSize: '5rem',
      } 
    }, 
    h3: {
      fontFamily: 'tenor',
      fontSize: '6vw',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      } 
    }, 
    h4: {
      fontFamily: 'quicksand',
      fontSize: '5vw',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      } 
    }, 
    h5: {
      fontFamily: 'quicksand',
      fontSize: '4vw',
      // fontWeight: 'bold',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontFamily: 'quicksand',
      fontSize: '2.5vw',
      '@media (min-width:800px)': {
        fontSize: '1.5rem',
      } 
    },
    body2: {
      fontFamily: 'quicksand',
      fontSize: '1.75vw',
      '@media (min-width:800px)': {
        fontSize: '1rem',
      } 
    }, 
    button: {
      fontFamily: 'quicksand',
      fontSize: '2.5vw',
      '@media (min-width:800px)': {
        fontSize: '1.5rem',
      } 
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
