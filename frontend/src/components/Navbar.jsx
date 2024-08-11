//Write your missing code here
// import { MenuIcon} from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 15 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee App
          </Typography>
          <Link to={'/add'}>
          <Button  variant='contained' color="secondary">ADD</Button>&nbsp;&nbsp;</Link>
          <Link to={'/view'}>
          <Button variant='contained' color="secondary">HOME</Button>&nbsp;</Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default Navbar


