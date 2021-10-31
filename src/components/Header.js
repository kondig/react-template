import * as React from 'react';
import logo from '../logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Drawer from './structure/Drawer';

function MenuAppBar() {
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleChange = (event) => { setAuth(event.target.checked); };
  // const handleMenu = (event) => { setAnchorEl(event.currentTarget); };
  // const handleClose = () => { setAnchorEl(null); };
  return (
    <Box sx={{ flexGrow: 1, width:'100%' }} >
      <AppBar position="static" sx= {{ backgroundColor: '#000000' }} >
        <Toolbar>
          <img src={logo} className="logo-sm" alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">
            Site Name
          </Typography>
          <Drawer />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" sx={{ minHeight: '2px !important', backgroundColor: 'transparent' }} />
    </Box>
  );
}

const Header = () => {
  return (
    <div className="App-header">
      <MenuAppBar />
    </div>
  )
}

export {Header}
