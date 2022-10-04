// IMPORT MUI COMPONENTS
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
// IMPORT USER DEFINDED COMPONENTS
import Copyright from "./CopyRight";
// IMPORT VARIABLES
import { COPYRIGHT_FORMALITY } from "../constants/variables";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
                { COPYRIGHT_FORMALITY }
            </Typography>
            <Copyright />
        </footer>
    );
};

export default Footer;
