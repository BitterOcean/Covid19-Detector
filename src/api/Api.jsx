// IMPORT VARIABLES
import { API_IMAGE_UPLOAD } from '../constants/routes';

const ApiUploadImage = (values, setSnackBarInfo, setSuccess, setLoading, setAlertOpen) => {
  fetch(`${API_IMAGE_UPLOAD}`, {
    method: 'post',
    body: values,
  })
    .then(response => response.json())
    .then(responseJson => {
      localStorage.setItem('prediction', responseJson.prediction);
      localStorage.setItem('covid-probability', responseJson.probability[0]*100);
      localStorage.setItem('noncovid-probability', responseJson.probability[1]*100);
      setSuccess(true);
      setLoading(false);
      setAlertOpen(true);
    })
    .catch(error => {
      setLoading(false);
      setSuccess(false);
      setSnackBarInfo({
        open: true,
        message: error.message,
        severity: 'error',
      });
    });
};

export {
  ApiUploadImage,
};
