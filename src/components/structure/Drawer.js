import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import Link from '@mui/material/Link';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessIcon from '@mui/icons-material/Business';
import RoofingIcon from '@mui/icons-material/Roofing';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

// const bg = '#000000';
const primary = '#673ab7';
const secondary = '#4caf50';

export default function Drawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={'Section 1'} sx={{ margin: '20px 0px',":hover": { backgroundColor: secondary }}} >
            <ListItemIcon><HomeWorkIcon /></ListItemIcon>
            <Link href="#NMH" underline="none" color="primary"
                  sx={{ fontSize: '1.4rem',":hover": { color: primary } }}>
                  Section 1
            </Link>
          </ListItem>
          <ListItem button key={'Section 2'} sx={{ margin: '20px 0px',":hover": { backgroundColor: secondary }}} >
            <ListItemIcon><BusinessIcon /></ListItemIcon>
            <Link href="#" underline="none" color="primary"
                  sx={{ fontSize: '1.4rem',":hover": { color: primary } }}>
                  Section 2
            </Link>
          </ListItem>
          <ListItem button key={'Section 3'} sx={{ margin: '20px 0px',":hover": { backgroundColor: secondary }}} >
            <ListItemIcon><RoofingIcon /></ListItemIcon>
            <Link href="#" underline="none" color="primary"
                  sx={{ fontSize: '1.4rem',":hover": { color: primary } }}>
                  Section 3
            </Link>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button key={'About us'} sx={{ margin: '20px 0px',":hover": { backgroundColor: secondary }}}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <Link href="#" underline="none" color="primary"
                  sx={{ fontSize: '1.4rem',":hover": { color: primary } }}>
                  About us
            </Link>
          </ListItem>
          <ListItem button key={'Contact us'} sx={{ margin: '20px 0px',":hover": { backgroundColor: secondary }}}>
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <Link href="#Contact" underline="none" color="primary"
                  sx={{ fontSize: '1.4rem',":hover": { color: primary } }}>
                  Contact us
            </Link>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/}
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
