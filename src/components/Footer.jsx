import React from 'react'
import { Box, Typography, Link } from '@mui/material';
import { Container } from '@mui/system';
import URLs from '../utils';

function Copyright() {

    return (
        <Typography variant="body2" color="primary.dark" align="center">
            {'Copyright © '}
            <Link color="inherit" href={URLs.linkedinURL} style={{ textDecoration: 'none'}}>
                Maximiliano Schiavello
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: '#f1f0f2', py: 6 }}>
            <Container>
                <Copyright />
            </Container>
        </Box>
    )
}

export default Footer