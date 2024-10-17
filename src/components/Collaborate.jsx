import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
const Collaborate = () => {
  return (
    <Box sx={{ padding: '50px 20px', backgroundColor: '#ffffff' }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Collaborate with Us
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        We believe that collaboration drives innovation and growth. Our team is always open to exploring new partnerships
        and opportunities. If you are interested in collaborating with us, please reach out!
      </Typography>

      
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          variant="outlined"
          href="#contact-us"
          sx={{
            color: 'black', 
            border: '2px solid black',
            borderRadius: '20px', 
            padding: '12px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Become a Partner
          <ArrowForwardIcon sx={{ marginLeft: '8px' }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Collaborate;
