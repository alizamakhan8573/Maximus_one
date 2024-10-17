import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CopyrightContainer = styled(Box)`
  background-color: #f3525a;
  color: white;
  padding: 1rem 0;
`;

const CopyRight = () => {
  return (
    <CopyrightContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Copyright © Maximus One | All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </CopyrightContainer>
  );
};

export default CopyRight;
