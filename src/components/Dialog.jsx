// IMPORT CORE PACKAGES
import React from 'react';
// IMPORT MUI COMPONENTS
import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
// IMPORT USER DEFINED COMPONENTS
import Card from './Card';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {
  const {
    open,
    setOpen,
    onClose,
    imageSrc,
    finalResult,
    cardContentHeader,
    cardContentBody1,
    cardContentBody2,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ m: 0, p: 0 }}>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[1000],
            }}
          >
            <CloseIcon />
          </IconButton>
          ) : null}
      </DialogTitle>
        <Card 
          imageSrc={imageSrc}
          finalResult={finalResult}
          cardContentHeader={cardContentHeader}
          cardContentBody1={cardContentBody1}
          cardContentBody2={cardContentBody2}
        />
    </Dialog>
  );
};

export default AlertDialogSlide;
