import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Collapse } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const aboutRef = useRef(null);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClickOutside = (event) => {
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    visionHidden: { opacity: 0, x: 50 },
    visionVisible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div id="about-us">
      <Box sx={{ padding: '50px 20px', backgroundColor: '#fdf9f3' }} ref={aboutRef}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Maximus One is an Information Technology contract and permanent recruiting company specializing in both applications development and infrastructure support. We pride ourselves on our deep understanding of the evolving tech landscape, enabling us to connect organizations with the right talent to meet their unique needs.
              <br />
              At Maximus One, we believe in fostering innovation and excellence. Our dedicated team works tirelessly to identify and attract skilled professionals who are not only technically proficient but also align with our clients’ values and culture.
            </Typography>

            {!expanded && (
              <Button
                onClick={handleToggleExpand}
                variant="text"
                sx={{
                  color: 'black',
                  textDecoration: 'underline',
                  '&:hover': { textDecoration: 'none' },
                }}
              >
                Read More
              </Button>
            )}

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography variant="body2" sx={{ marginTop: '20px' }}>
                We have the “Get Things Done” culture at our workplace. There are no excuses, no if’s or but’s in our
                dictionary. Committed to navigating the ship of creativity to create solutions, we solve the real-life
                problems of our clients and their customers. Our passion for work has won us many awards, year after year.
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                With development centers in India, Singapore, and the United States, we take pride in building long-term
                relationships with our clients and working to help them attain their business goals.
              </Typography>
            </Collapse>

            <Grid container spacing={4} sx={{ marginTop: '20px' }}>
              <Grid item xs={12} sm={6}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={boxVariants}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        Our Mission
                      </Typography>
                      <Typography variant="body2">
                        Our mission is to provide top-quality IT talent that matches the unique needs of each client and to help professionals find rewarding careers.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <motion.div
                  initial="visionHidden"
                  whileInView="visionVisible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={boxVariants}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        Our Vision
                      </Typography>
                      <Typography variant="body2">
                        Our vision is to be the leading IT staffing and recruiting firm that empowers businesses with the best talent and drives growth and innovation.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src="\src\assets\AboutUs.png" 
                alt="Maximus"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
