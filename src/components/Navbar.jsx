import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ setCurrentPage }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about-us' },
    { name: 'Our Services', id: 'our-services' },
    { name: 'Our Clients', id: 'our-clients' },
    { name: 'Credentials', id: 'credentials' },
    { name: 'Contact Us', id: 'contact-us' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handlePageChange = (id) => {
    setCurrentPage(id);
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: 'black', zIndex: 1400 }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="/src/assets/maximus_Logo.png" 
              alt="Logo"
              style={{ width: '150px', cursor: 'pointer' }}
              onClick={() => handlePageChange('home')}
            />
          </Box>

          
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }} 
          >
            <MenuIcon />
          </IconButton>

          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(item.id)}
                sx={{
                  color: 'black',
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#e4eefc' }, 
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={toggleDrawer(false)} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handlePageChange(item.id);
                  toggleDrawer(false)(); 
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
