import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Link, Button } from '@mui/material'
import URLs from '../utils'

function Contact() {

    return (
        <Box px={2} mb={3} sx={{
            display: 'flex',
            gap: 2
        }}>
            <Link color="inherit" href={URLs.linkedin} sx={{my: 1}}>
                    <Button
                    sx={{
                        backgroundColor: 'primary.dark'
                    }} 
                    variant="contained" endIcon={<LinkedInIcon />}>
                        Linkedin
                    </Button>
            </Link>

            <Link color="inherit" href={URLs.github} sx={{my: 1}}>
                    <Button
                    sx={{
                        backgroundColor: 'primary.dark'
                    }} 
                    variant="contained" endIcon={<GitHubIcon />}>
                        Github
                    </Button>
            </Link>
        </Box>
    )
}

export default Contact