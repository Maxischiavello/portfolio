import React from 'react'
import { Box, Typography, Link } from '@mui/material';
import { Container } from '@mui/system';

function Copyright() {

    const linkedin = 'https://www.linkedin.com/in/maximiliano-schiavello/';

    return (
        <Typography variant="body2" color="primary.light" align="center">
            {'Copyright © '}
            <Link color="inherit" href={linkedin}>
                Maximiliano Schiavello
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.dark', py: 4 }}>
            <Container>
                <Copyright />
            </Container>
        </Box>
    )
}

export default Footer