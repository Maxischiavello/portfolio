import React from 'react'
import { Paper, Typography } from '@mui/material'
import Skills from './Skills'
import Contact from './Contact'

function About() {
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography variant='h4' mb={1} mt={3} px={2} color='primary.dark'>
                Sobre mi
            </Typography>
            <Typography mb={1} px={2}>
                Me considero un persona responsable,
                paciente y con un alto grado de empatía por los demás.
            </Typography>
            <Typography mb={1} px={2}>
                Dinámico, proactivo y versátil para adaptarme a múltiples modelos de trabajo y necesidades.
            </Typography>
            <Typography mb={1} px={2}>
                Apacionado por el desarrollo.
                Busco, de manera constante, aprender nuevas tecnologías.
            </Typography>
            <Contact />
            <Skills />
        </Paper>
    )
}

export default About