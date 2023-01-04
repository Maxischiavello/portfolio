import React from 'react'
import Img from '../assets/foto.jpeg'
import { Button, Box, Grid, Typography, } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {

    return (
        <Box mt={12}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box spacing={1} sx={{ alignSelf: 'center'}}>
                        <Typography variant='h6'><span>Hola!</span> Me presento:</Typography>
                        <Typography variant='h2'>Maximiliano Schiavello</Typography>
                        <Typography variant='h6' mb={4}>Desarrollador web | Programador</Typography>

                        <Button color='primary' variant="contained" endIcon={<LinkedInIcon/>}>
                            Conectemos
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <Box spacing={1} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        <img src={Img} alt="foto" height={320} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home