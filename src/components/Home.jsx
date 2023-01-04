import React from 'react'
import Img from '../assets/foto.jpeg'
import { Button, Box, Grid, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <Box spacing={1}>
                    <Typography><span>Hola!</span> Me presento:</Typography>
                    <Typography variant='h3'>Maximiliano Schiavello</Typography>
                    <Typography>Desarrollador web | Programador</Typography>
                    <Button variant="outlined" endIcon={<LinkedInIcon />}>
                        Conectemos
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box spacing={1}>
                    <img src={Img} alt="foto" width={300} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home