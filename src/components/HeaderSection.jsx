import React from 'react';
import { Box, Typography, useMediaQuery, Grid, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 

 
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 0.5 },
    },
  };

  return (
    <Container
      id="home" 
      maxWidth="xl"
      sx={{
        padding: '20px',
        marginTop: '64px', 
        minHeight: '100vh',
      }}
    >
      <Box sx={{ overflow: 'hidden', marginTop: '80px' }}>
        <Grid container spacing={2} alignItems="center">
          
          <Grid item xs={12} md={6} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                NAVIGATING YOUR PATH TO SUCCESS
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontSize: isSmallScreen ? '1.8rem' : '3rem',
                  maxWidth: '90%',
                  margin: isSmallScreen ? '0 auto' : '0',
                  marginBottom: '20px',
                }}
              >
                Solutions that <br /> Inspire Progress
              </Typography>
            </motion.div>

            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: isSmallScreen ? 'center' : 'flex-start',
                  marginTop: '20px' 
                }}
              >
                <Button
                  variant="outlined"
                  href="#about-us" 
                  sx={{
                    color: 'black',
                    border: '2px solid black',
                    borderRadius: '20px',
                    padding: isSmallScreen ? '10px 16px' : '12px 24px',
                    fontSize: isSmallScreen ? '0.9rem' : '1rem',
                    width: 'auto',
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  KNOW MORE
                  <ArrowForwardIcon sx={{ marginLeft: '8px' }} />
                </Button>
              </Box>
            </motion.div>
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: isSmallScreen ? 'center' : 'right' }}>
              <img
                src="/src/assets/header_img.jpg"
                alt="Inspirational"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  maxHeight: '500px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeaderSection;
