import React from 'react'
import Img from '../assets/foto.jpeg'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
    return (
        <MainContainer>
            <div>
                <p><span>Hola!</span> Me presento:</p>
                <h1>Maximiliano Schiavello</h1>
                <p>Desarrollador web | Programador</p>
                <Button variant="contained" endIcon={<LinkedInIcon />}>
                    Conectemos
                </Button>
            </div>

            <div className="image-container">
                <img src={Img} alt="foto" width={300} />
            </div>
        </MainContainer>

    )
}

export default Home

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 50px;
`