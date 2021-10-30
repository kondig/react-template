import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ScrollTop} from './functional/ScrollTop';

const Footer = (props) => {
  return (
    <div className="App-footer">
      <AppBar position="static" color="secondary" sx={{ position: 'relative' }}>
        <Container maxWidth="md" >
            Footer
        </Container>
      </AppBar>
      <Toolbar sx={{ height: '20px', position: 'absolute', bottom: '0px', left: '0px'}}>
        <Typography variant="body1" color="secondary">
         SiteName © 2021
        </Typography>
      </Toolbar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export {Footer}
