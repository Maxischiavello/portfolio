import React from 'react'
import { Button, Box, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Home() {

    return (
        <Box sx={{
            py: 20
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
                        <Typography variant='h6' >Hola! Me presento:</Typography>
                        <Typography variant='h2' color='primary.main'>Maximiliano Schiavello</Typography>
                        <Typography variant='h6' mb={4}>Desarrollador web | Programador</Typography>

                        <Button color='primary' variant="contained" endIcon={<LinkedInIcon/>}>
                            Conectemos
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home