import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ContactBar = ({ onClose }) => {
  return (
    <AppBar
      position="fixed" 
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        zIndex: 1500, 
        top: 0,
        minHeight: '30px',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '30px',
          padding: { xs: '2px 8px', sm: '2px 16px' },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            color: 'white',
            padding: '0',
            position: 'absolute',
            right: { xs: '5px', sm: '10px' },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            paddingRight: { xs: '25px', sm: '0' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '0.65rem', sm: '0.85rem', md: '1rem' },
            }}
          >
            Phone: +12292672454 &nbsp; | &nbsp; Email: Accounts@maximus1.com
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ContactBar;
