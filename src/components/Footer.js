import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from '@mui/material/Link';
import {ScrollTop} from './functional/ScrollTop';
import logo from '../logo.svg';

const bg = '#000000'

const Footer = (props) => {
  return (
    <div className="App-footer">
        <Container maxWidth="md" >
            <Typography variant="h4" color="primary">
                Contact us
            </Typography>
            <img src={logo} className="menu-logo" alt="logo" />
            <Typography variant="body1" color="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed sagittis lacus, vel rhoncus ligula.
                Aliquam at sapien eget justo aliquet sodales sit amet a odio
            </Typography>
        </Container>
        <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: bg }}>
            <Link href="https://info@company.com" underline="hover" target="_blank" rel="noopener" color="secondary" sx={{ margin: '10px 20px'}}>
              <FontAwesome name='envelope' spin={false} className="icon" size="2x" style={{  }} />
            </Link>
            <Link href="https://facebook.com" underline="hover" target="_blank" rel="noopener" color="secondary" sx={{ margin: '10px 20px'}}>
              <FontAwesome name='facebook' spin={false} className="icon" size="2x" style={{  }} />
            </Link>
            <Link href="https://instagram.com" underline="hover" target="_blank" rel="noopener" color="secondary" sx={{ margin: '10px 20px'}}>
              <FontAwesome name='instagram' spin={false} className="icon" size="2x" style={{  }} />
            </Link>
            <Link href="https://twitter.com" underline="hover" target="_blank" rel="noopener" color="secondary" sx={{ margin: '10px 20px'}}>
              <FontAwesome name='twitter' spin={false} className="icon" size="2x" style={{  }} />
            </Link>
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
