import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Link } from '@mui/material'
import URLs from '../utils'

function Contact() {

    return (
        <Box px={2} >
            <Link color="primary.main" href={URLs.linkedinURL}>
                <LinkedInIcon />
            </Link>
            <Link color="primary.main" href={URLs.githubURL} pl={2}>
                <GitHubIcon />
            </Link>
        </Box>
    )
}

export default Contact