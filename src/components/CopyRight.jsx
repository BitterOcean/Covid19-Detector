// IMPORT MUI COMPONENTS
import Typography from "@mui/material/Typography";
// IMPORT VARIABLES
import { DEVELOPER_NAME } from '../constants/variables';

const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {' '}
      { DEVELOPER_NAME }
      {'.'}
    </Typography>
  );

export default Copyright;
