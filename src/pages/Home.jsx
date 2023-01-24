import { Container, Link } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import URLs from '../utils';

function Home() {

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh',
        }}>
            <Box sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography sx={{ typography: { xs: 'body2', sm: 'body1', md: 'h6' } }}>Hola! Me presento:</Typography>
                <Typography sx={{ typography: { xs: 'h2', sm: 'h2', md: 'h1' } }} color={'primary.dark'}>
                    Maximiliano Schiavello
                </Typography>
                <Typography sx={{ typography: { xs: 'h6', sm: 'h6', md: 'h4' } }}>Desarrollador | Programador</Typography>
                <Link color="inherit" href={URLs.linkedin} sx={{my: 6}}>
                    <Button
                    sx={{
                        backgroundColor: 'primary.dark'
                    }} 
                    variant="contained" endIcon={<LinkedInIcon />}>
                        CONECTEMOS
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Home