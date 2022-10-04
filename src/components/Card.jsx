// IMPORT CORE PACKAGES
import * as React from 'react';
// IMPORT MUI COMPONENTS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// IMPORT VARIABLES
import { CARDIMGALT } from '../constants/variables';

const MediaCard = (props) => {
  const {
    imageSrc,
    finalResult,
    cardContentHeader,
    cardContentBody1,
    cardContentBody2,
  } = props;
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        image={imageSrc}
        alt={CARDIMGALT}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { finalResult }
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant="body1" color="text.secondary">
          { cardContentHeader }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { cardContentBody1 }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { cardContentBody2 }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
