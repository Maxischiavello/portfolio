import React from 'react'
import { Paper, Typography } from '@mui/material'

function About() {
  return (
    <Paper sx={{
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Typography variant='h4' m={4} px={2} color='primary.main'>
            Sobre mi
        </Typography>
        <Typography mb={4} px={2}>
            Me considero un persona responsable, 
            paciente y con un alto grado de empatía por los demás.
        </Typography>
        <Typography mb={4} px={2}>
            Dinámico, proactivo y versátil para adaptarme a múltiples modelos de trabajo y necesidades.
        </Typography>
        <Typography mb={4} px={2}>
            Apacionado por el desarrollo.
            Busco, de manera constante, aprender nuevas tecnologías.
        </Typography>
    </Paper>
  )
}

export default About