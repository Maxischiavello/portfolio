import React from 'react'
import { Button, Box, Grid, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import URLs from '../utils';

function Home() {

    return (
        <Box sx={{
            my: 20,
            bgcolor: '#fff'
        }} >
            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <Box spacing={1} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: ' center',
                    }}>
                        <Typography >Hola! Me presento:</Typography>
                        <Typography variant='h2' color='primary.main'>Maximiliano Schiavello</Typography>
                        <Typography mb={4}>Desarrollador web | Programador</Typography>

                        <Link href={URLs.linkedinURL} style={{ textDecoration: 'none'}}>
                            <Button sx={{
                                bgcolor: 'primary.dark',
                                '&:hover': { bgcolor: 'primary.main' }
                            }}
                                variant="contained"
                                endIcon={<LinkedInIcon />}>
                                Conectemos
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home