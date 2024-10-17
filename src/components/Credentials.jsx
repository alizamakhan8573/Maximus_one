import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const credentialsData = [
  {
    title: 'Dun & Bradstreet',
    description: 'Our company is certified by Dun & Bradstreet, providing us with a globally recognized DUNS number that validates our business credibility and trustworthiness.',
    imageUrl: "/src/assets/D&B_page.jpg",
    downloadUrl: '/src/assets/D&B.pdf', 
  },
  {
    title: 'ISO/IEC',
    description: 'Our company is ISO/IEC 20000-1:2018 certified, demonstrating our commitment to delivering high-quality IT services in line with global standards.',
    imageUrl: '/src/assets/ISO_page.jpg',
    downloadUrl: '/src/assets/ISO.pdf', 
  },
  {
    title: 'MSME',
    description: 'Our company is proudly certified under the MSME (Micro, Small, and Medium Enterprises) scheme, recognizing us as a qualified small business in India.',
    imageUrl: '/src/assets/MSME_page.jpg',
    downloadUrl: '/src/assets/MSME.pdf', 
  },
];

const Credentials = () => {
  return (
    <Box id="credentials" 
    sx={{ maxWidth: 'xl', margin: '0 auto', padding: '50px 20px', backgroundColor: '#fdf9f3' }}>
      <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: '20px', 
            marginTop: '20px', 
            textAlign: 'center' 
          }}
        >
          Our Credentials
        </Typography>
      <Grid container spacing={4} justifyContent="center">
        {credentialsData.map((credential, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}> {/* Allow content to grow */}
                <img 
                  src={credential.imageUrl} 
                  alt={credential.title} 
                  style={{ 
                    width: '100%',   
                    height: 'auto',  
                    maxWidth: '150px',
                    marginBottom: '15px',
                    objectFit: 'contain', 
                  }} 
                />
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                  {credential.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '10px' }}>
                  {credential.description}
                </Typography>
              </CardContent>
              <Button 
                variant="outlined" 
                href={credential.downloadUrl} 
                target="_blank" 
                sx={{ 
                  margin: '15px auto', 
                  width: '70%', 
                  borderRadius: '20px',
                  color: 'black', 
                  backgroundColor: 'white', 
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white', 
                  },
                }}
              >
                Download Certificate
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Credentials;
