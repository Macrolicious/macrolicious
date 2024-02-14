import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#32CD32' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome
        </Typography>
        <Typography variant="h6" component="div">
          User
        </Typography>
        <IconButton edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;