import React from 'react'
import { Box, Grid } from '@mui/material';
import About from './About';

function AboutContainer() {
  return (
    <Box sx={{
      my: 20,
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