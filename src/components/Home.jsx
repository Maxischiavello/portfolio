import React from 'react'
import { Button, Box, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Home() {

    return (
        <Box sx={{
            py: 14,
            bgcolor: 'primary.light'
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

                        <Button sx={{
                            bgcolor: 'primary.dark', 
                            '&:hover': {bgcolor: 'primary.main'}}} 
                            variant="contained" 
                            endIcon={<LinkedInIcon/>}>
                            Conectemos
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home