import React from 'react';
import { Grid, Box, Typography, Button, TextField, Container, Link } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const FooterContainer = styled(Box)`
  background-color: #0564a6;
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  min-height: 300px; /* Adjust height as needed */
`;

const FooterGrid = styled(Grid)`
  text-align: left;
  padding: 1rem;
`;

const LogoBox = styled(Box)`
  margin-bottom: 1.5rem;
`;

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 12.9716,
  lng: 77.5946,
};


const CopyrightContainer = styled(Box)`
  background-color: #f3525a;
  color: white;
  padding: 1rem 0;
  margin-top: auto; /* Pushes the copyright to the bottom */
`;

const Footer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB-CHsx0fzZwijlCSYDqZOr3xxb14PDedg',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          <FooterGrid item xs={12} md={4}>
            <LogoBox>
              <img 
                src="Maximus-One-Logo.png" 
                alt="Company Logo" 
                style={{ width: '300px', height: 'auto' }} 
              />
            </LogoBox>
            <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
              About company.
            </Typography>
            <br />

            <Typography variant="h6" color="white" gutterBottom>
              <LocationOnIcon fontSize="small" /> Location
            </Typography>
            <Typography variant="body1" color="white">
              Maximus One, #10, 100 Feet Ring Road,
            </Typography>
            <Typography variant="body1" color="white">
              BTM Layout, Bengaluru, Karnataka, India
            </Typography>
            <br />

            <Typography variant="h6" color="white" gutterBottom>
              <PhoneIcon fontSize="small" /> Call Us
            </Typography>
            <Typography variant="body1" color="white">
              +12292672454
            </Typography>
            <br />
            <Typography variant="h6" color="white" gutterBottom>
              <EmailIcon fontSize="small" /> Email
            </Typography>
            <Typography variant="body1" color="white">
              Accounts@maximus1.com
            </Typography>
          </FooterGrid>

          
          <FooterGrid item xs={12} md={4}>
            <Typography variant="h4" color="white" sx={{ fontWeight: 'bold' }}>
              WORK WITH OUR BEST TEAM
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <TextField
                label="Your Email"
                variant="outlined"
                size="small"
                sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }}
              />
              <Button variant="contained" sx={{ backgroundColor: '#f3525a', color: '#FFFFFF' }}>
                Join Us
              </Button>
            </Box>
            <br />
            <Typography variant="h6" color="white" gutterBottom>
              Useful Links
            </Typography>
            <Box>
              <Link href="#home" color="white" underline="hover" sx={{ '&:hover': { color: 'white' } }} display="block">
                Home
              </Link>
              <Link href="#about-us" color="white" underline="hover" sx={{ '&:hover': { color: 'white' } }} display="block">
                About Us
              </Link>
              <Link href="#our-services" color="white" underline="hover" sx={{ '&:hover': { color: 'white' } }} display="block">
                Our Services
              </Link>
              <Link href="#our-clients" color="white" underline="hover" sx={{ '&:hover': { color: 'white' } }} display="block">
                Our Clients
              </Link>
              <Link href="#credentials" color="white" underline="hover" sx={{ '&:hover': { color: 'white' } }} display="block">
                Credentials
              </Link>
              <Link href="#contact-us" color="white" underline="hover" sx={{ '&:hover': { color: 'white' } }} display="block">
                Contact Us
              </Link>
            </Box>
          </FooterGrid>

          
          <FooterGrid item xs={12} md={4}>
            <Typography variant="h4" color="white" sx={{ fontWeight: 'bold' }}>
              OUR LOCATION
            </Typography>
            <br />
            <Box
              sx={{
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            </Box>
          </FooterGrid>
        </Grid>
      </Container>

    </FooterContainer>
  );
};

export default Footer;
