import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.jpg'; 



export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  };
  const handleListItemClick = (text) => {
    if (text === 'Home') {
      navigate('/');
    }
    if (text == 'Atelier') {
      navigate('/Shop')
    }
    if (text == 'Artisans') {
      navigate('/Artisans')
    }
   
    setIsDrawerOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Atelier', 'Artisans', 'About us', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text)}>
              <ListItemText primary={text}
              sx={{
                color: '#134929', 
                fontFamily: "Xanh Mono monospace"
              }}
               />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
  position="fixed"
  sx={{
    backgroundColor: isScrolled ? '#fff' : '#fff',
    boxShadow: isScrolled ? 'none' : 'none',
    color: isScrolled ? '#134929' : '#134929', 
    fontFamily: "Xanh Mono monospace",
    transition: 'all 0.2s ease-in-out', 
    '&:hover': {
      backgroundColor: '#fff', 
      color: '#134929'
    },
  }}
>
  <Toolbar variant="dense">
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
    
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontFamily: "Xanh Mono monospace"}}>
      TOHN
    </Typography>
    <img 
      src={logo} 
      alt="Logo" 
      style={{ height: '30px', marginRight:'1250px', marginTop:'0px' }} 
    />
  </Toolbar>
</AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </Box>
  );
}
