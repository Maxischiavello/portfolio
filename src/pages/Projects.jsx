import ProjectCard from '../components/ProjectCard'
import { Container, Box, Button, Typography, Link, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import projects from './projectsData'
import links from '../utils'

function Projects() {
    return (
        <Container sx={{
            minHeight: '90vh',
            display: 'flex',
            justifyContent: 'center',
            mt: 4
        }}>
            <Box>
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Grid item xs={8} sm={5} md={4} lg={3}>
                        <ProjectCard
                            image={require('../assets/projectsImgages/dag.png')}
                            urlToProject={projects.dag.url}
                            projectTitle={projects.dag.title}
                            projectDescription={projects.dag.description}
                            codeSource={projects.dag.githubRepository}
                        />
                    </Grid>
                    <Grid item xs={8} sm={5} md={4} lg={3}>
                        <ProjectCard
                            image={require('../assets/projectsImgages/marketplace.png')}
                            urlToProject={projects.rickMarketplace.url}
                            projectTitle={projects.rickMarketplace.title}
                            projectDescription={projects.rickMarketplace.description}
                            codeSource={projects.rickMarketplace.githubRepository}
                        />
                    </Grid>
                    <Grid item xs={8} sm={5} md={4} lg={3}>
                        <ProjectCard
                            image={require('../assets/projectsImgages/ventas-api.jpeg')}
                            urlToProject={projects.ventasAPI.url}
                            projectTitle={projects.ventasAPI.title}
                            projectDescription={projects.ventasAPI.description}
                            codeSource={projects.ventasAPI.githubRepository}
                        />
                    </Grid>
                </Grid>

                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Grid item xs={8} sm={5} md={4} lg={3} mt={5}>
                        <Typography mb={1}>
                            Para ver mas proyectos puedes visitar mis repositorios.
                        </Typography>
                        <Link 
                            color="inherit" 
                            href={links.github} 
                            sx={{ my: 1 }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                fullWidth
                                sx={{
                                    backgroundColor: 'primary.dark'
                                }}
                                variant="contained" endIcon={<GitHubIcon />}>
                                Github
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Projects