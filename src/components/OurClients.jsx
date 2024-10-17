import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const clientsData = Array.from({ length: 50 }, (_, index) => ({
  name: `Client ${index + 1}`,
  logo: `/src/assets/client/logo-${index + 1}.jpg`,  
}));


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 0.6s ease-in-out;
`;

const OurClients = () => {
  const [showHiddenGrid, setShowHiddenGrid] = useState(false); 
  const boxRef = useRef(null); 
  
  const handleShowMore = () => {
    setShowHiddenGrid(true);  
  };

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setShowHiddenGrid(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); 

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <Box
      id="our-clients" 
      sx={{ py: 5, px: 3, backgroundColor: 'white' }} 
    >
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Our Clients
      </Typography>

      <Box
        ref={boxRef}  
        sx={{
          py: 5,
          width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' }, 
          margin: 'auto',        
          border: '1px solid #ddd',
          borderRadius: '8px',
          position: 'relative',  
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {clientsData.slice(0, 25).map((client, index) => (
            <Grid
              item
              xs={6}          
              sm={4}
              md={2.4}  
              key={index}
              display="flex"
              justifyContent="center"
            >
              <AnimatedBox
                component="img"
                src={client.logo}
                alt={client.name}
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',  
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {!showHiddenGrid && (
          <Box textAlign="center" sx={{ mt: 4 }}>
            <IconButton onClick={handleShowMore} color="primary">
              <ArrowDropDownIcon fontSize="large" />
            </IconButton>
          </Box>
        )}

        {showHiddenGrid && (
          <Box
            sx={{
              mt: 4,
              width: '100%',
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {clientsData.slice(25, 50).map((client, index) => (
                <Grid
                  item
                  xs={6}          
                  sm={4}
                  md={2.4} 
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <AnimatedBox
                    component="img"
                    src={client.logo}
                    alt={client.name}
                    sx={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',  
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OurClients;
