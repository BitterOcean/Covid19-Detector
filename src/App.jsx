// IMPORT CORE PACKAGES
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// IMPORT MUI COMPONENTS
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
// IMPORT USER DEFINED VIEWS
import Landing from './views/Landing';
import SnackbarAlert from './components/SnackBar';
// import Prediction from './views/Prediction';


const theme = createTheme({
  typography: {
  fontSize: 15,
  },
});

const App = () => {
  const [snackBarInfo, setSnackBarInfo] = useState({
    open: false,
    message: '',
    severity: 'error',
  });

  return (
    <ThemeProvider theme={theme}>  
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path="/" element={<Landing setSnackBarInfo={setSnackBarInfo} />} />
        </Routes>
      </BrowserRouter>
      <SnackbarAlert
        open={snackBarInfo.open}
        setOpen={o => setSnackBarInfo({open: o, message: '', severity: 'error'})}
        message={snackBarInfo.message}
        severity={snackBarInfo.severity}
      />
    </ThemeProvider>
  );
};

export default App;
