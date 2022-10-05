// IMPORT CORE PACKAGES
import React from 'react';
// IMPORT MUI COMPONENTS
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const MoreOptionsMenu = (props) => {
  const { options } = props;

  return ( 
  <div sx={{ width: 320, maxWidth: '100%' }}>
    <MenuList>
    {
      options.map((option) => (
        <MenuItem key={option.name} component="a" href={option.link} target="_blank">
          <ListItemIcon>
          <option.icon fontSize="small"/>
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
                variant:"h6",
                color:"textPrimary",
                sx:{
                    fontSize: '1.7vh'
                }
            }}
          >
          {option.name}
          </ListItemText>
        </MenuItem>
      ))
    }
    </MenuList>
  </div>
  );
};

export default MoreOptionsMenu;
