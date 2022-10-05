// IMPORT CORE PACKAGES
import * as React from 'react';
// IMPORT MUI COMPONENTS
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MoreOptions from './MoreOptions';
// IMPORT VARIABLES
import { HEADER_TITLE } from '../constants/variables';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" color='primary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CoronavirusIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} fontSize='large' />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            { HEADER_TITLE }
          </Typography>

          <CoronavirusIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
              fontSize: '5.6vmin'
            }}
          >
            { HEADER_TITLE }
          </Typography>

          <MoreOptions />

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
