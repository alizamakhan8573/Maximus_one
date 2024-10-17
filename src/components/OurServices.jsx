import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const servicesData = [
  {
    title: 'Security-as-a-Service',
    description: 'Comprehensive security solutions for your applications and infrastructure.',
    image: '/src/assets/SAAS.jpg',
  },
  {
    title: 'Semiconductor Engineering Services',
    description: 'Expert semiconductor design and engineering services.',
    image: '/src/assets/SCE.jpg',
  },
  {
    title: 'Cloud Services',
    description: 'Cloud solutions on AWS, Microsoft Azure, and Google Cloud.',
    image: '/src/assets/SCE.jpg',
  },
  {
    title: 'Analytics-as-a-Service',
    description: 'Data analytics and business intelligence services.',
    image: '/src/assets/AAAS.jpg',
  },
  {
    title: 'Product Engineering as a Service',
    description: 'End-to-end product engineering solutions.',
    image: '/src/assets/PAAS.jpg',
  },
];

const OurServices = () => {
  return (
    <Box
      id="our-services"
      sx={{ py: 5, px: 3, backgroundColor: '#fdf9f3' }} 
    >
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              opacity: 0,
              animation: `${fadeIn} 1s ease-in-out forwards`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Card
              sx={{
                height: '100%',
                padding: 2,
                margin: '10px 0',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
