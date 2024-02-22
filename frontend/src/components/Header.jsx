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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const toggleCartDrawer = (open) => () => {
    setIsCartOpen(open);
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
    // Correctly call toggleDrawer to close the drawer without passing an event
    setIsDrawerOpen(false);
  };
  


  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Atelier', 'Artisans', 'About us', 'Contact', 'Cart'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const cartList = (
    <Box
      sx={{ width: '50vw' }} // Adjust the width as needed
      role="presentation"
      onClick={toggleCartDrawer(false)}
      onKeyDown={toggleCartDrawer(false)}
    >
      <List>
        {/* Map through your cart items here */}
        <ListItem>
          <ListItemText primary="Cart Item Name" secondary="Quantity: 1" />
          {/* Add more details like price, remove button, etc. */}
        </ListItem>
        {/* Repeat for other items */}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: '#134929' }}>
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
          <Typography variant="h6" color="#134929" component="div">
            TOHN
          </Typography>

          <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
            <ShoppingCartIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCartDrawer(false)}>
        {cartList}
      </Drawer>
    </Box>
  );
}
