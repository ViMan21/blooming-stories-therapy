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
      paper: '#9D9D86',
    },
    primary: {
      light: '#def0ce',
      main: '#acbd9d',
      dark: '#7d8d6f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd0c2',
      main: '#dc9f92',
      dark: '#a97064',
      contrastText: '#fff',
    },
    neutral: {
      main: '#9D9D86',
      contrastText: '#fff',
    },
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
