// IMPORT CORE PACKAGES
import React, { useState } from 'react';
// iMPORT MUI COMPONENTS
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import CssBaseLine from '@mui/material/CssBaseline';
import { DropzoneArea } from "mui-file-dropzone";
import { green } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// IMPORT USER DEFINED COMPONENTS
import AlertDialogSlide from '../components/Dialog';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/AppBar';
import { ApiUploadImage } from '../api/Api';
import '../assets/css/dropzoneStyle.css';
// IMPORT VARIABLES
import {
  BUTTON_TITLE,
  CARDCONTENTHEATHER,
  DROPZONETEXT,
  LANDING_CONTENT_TITLE,
  LANDING_CONTENT_DESCRIBTION,
} from '../constants/variables';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    alignItems: 'center',
    margin: theme.spacing(3),
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7, 0, 2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(1, 3, 1),
  },
}));

const Landing = (props) => {
  const { setSnackBarInfo } = props;

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  
  const classes = useStyles();
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const handleChange = (e) => {
    setLoading(false);
    setSuccess(false);
    setImage(e[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image !== null && image !== undefined) {
      setSuccess(false);
      setLoading(true);
      let form_data = new FormData();
      form_data.append('image', image, image.name);
      ApiUploadImage(form_data, setSnackBarInfo, setSuccess, setLoading, setAlertOpen);
    }
    else {
      setSnackBarInfo({
        open: true,
        message: 'Uploading a CT-Scan image is required',
        severity: 'error',
      });
    }
  };

  return (
    <React.Fragment>
      <CssBaseLine />
      <ResponsiveAppBar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Grid item component={Paper} elevation={7}>
              <div className={classes.paper}>
                <Container maxWidth="md">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    sx={{
                      fontSize: '3.7vmax'
                    }}
                    gutterBottom
                  >
                    { LANDING_CONTENT_TITLE }
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    sx={{
                      fontSize: '1.83vmax',
                    }}
                    paragraph
                  >
                    { LANDING_CONTENT_DESCRIBTION }
                  </Typography>
                </Container>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid item xs={12}>
                    <DropzoneArea
                      clearOnUnmount
                      filesLimit={1}
                      acceptedFiles={["image/*"]}
                      dropzoneText={DROPZONETEXT}
                      dropzoneParagraphClass="dropzone-text"
                      onChange={(f) => handleChange(f)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center' }}>
                      <Box sx={{ position: 'relative' }}>
                        <Button
                          type="submit"
                          fullWidth
                          sx={buttonSx}
                          disabled={loading}
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          { BUTTON_TITLE }
                        </Button>
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: green[500],
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-12px',
                              marginLeft: '-12px',
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Container>
        </div>
      </main>
      <AlertDialogSlide
        open={alertOpen}
        setOpen={setAlertOpen}
        onClose={() => setAlertOpen(false)}
        imageSrc={alertOpen ? document.getElementsByClassName('MuiBox-root css-1jiaacd')[0].childNodes[0].src : null}
        finalResult={localStorage.getItem('prediction')}
        cardContentHeader={CARDCONTENTHEATHER}
        cardContentBody1={`- COVID     : ${alertOpen ? localStorage.getItem('covid-probability').slice(0, 10) : ''}%`}
        cardContentBody2={`- Non-COVID : ${alertOpen ? localStorage.getItem('noncovid-probability').slice(0, 10) : ''}%`}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
