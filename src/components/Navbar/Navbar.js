import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    let userId = 5;
    return(
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 9 }}>
          <Link style={{boxShadow:"none", textDecoration:"none"}} to="/" >Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{boxShadow:"none", textDecoration:"none"}} to={{pathname : '/users/' + userId}} >Users</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
           
        </div>
    )
}


export default Navbar;