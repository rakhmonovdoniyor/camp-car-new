import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link  to= "/motor" style={{textDecoration: "none" , color: "black"}}>
          <ListItem >
            <ListItemButton>
              Motor
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link to="/caravan" style={{textDecoration: "none" , color: "black"}}>
          <ListItem >
            <ListItemButton>
              Caravan         
           </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link to="/tuning" style={{textDecoration: "none" , color: "black"}}>
          <ListItem >
            <ListItemButton>
              Tuning
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link to="/used-car" style={{textDecoration: "none" , color: "black"}}>
          <ListItem >
            <ListItemButton>
              Used Car
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link to="/camping-place" style={{textDecoration: "none" , color: "black"}}>
          <ListItem >
            <ListItemButton>
              Camping Place
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><ListIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
