import React from 'react'
import { Box, Container, Avatar, Paper, Typography } from '@mui/material'
import Contact from '../components/Contact'

function About() {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '90vh',
        }}>
            <Paper sx={{
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 640,
            }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h4' mb={3} mt={3} px={2} color='primary.dark'>
                        SOBRE MI
                    </Typography>
                    <Avatar
                        alt="foto-perfil"
                        src={require('../assets/avatar.jpeg')}
                        sx={{ width: 48, height: 48 }}
                    />
                </Box>
                <Typography mb={2} px={2}>
                    Me considero un persona responsable,
                    paciente y con un alto grado de empatía por los demás.
                </Typography>
                <Typography mb={2} px={2}>
                    Dinámico, proactivo y versátil para adaptarme a múltiples modelos de trabajo y necesidades.
                </Typography>
                <Typography mb={2} px={2}>
                    Apacionado por el desarrollo.
                    Busco, de manera constante, aprender nuevas tecnologías.
                </Typography>
                <Typography mb={2} px={2}>
                    Actualmente estoy por terminar la carrera de analista de sistemas
                    donde he estudiado programacion orientada a objetos,
                    base de datos relacional, desarrollo web y mobile,
                    entre otras cosas.
                </Typography>
                <Contact />
            </Paper>
        </Container>
    )
}

export default About