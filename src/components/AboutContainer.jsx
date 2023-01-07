import React from 'react'
import { Box, Grid } from '@mui/material';
import About from './About';

function AboutContainer() {
  return (
    <Box sx={{
      my: { xs: 12 ,sm: 16, md: 20, lg: 24, xl: 28 },
      bgcolor: '#fff'
    }}>
        <Grid container spacing={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>
            <Grid item xs={10} sm={10} md={8} lg={8}>
                <About/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AboutContainer