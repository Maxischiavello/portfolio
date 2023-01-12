import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProjectCard from '../components/ProjectCard'
import { Box } from '@mui/material'
import URLs from './projectsURLs'

function Projects() {
    return (
        <Container sx={{
            minHeight: '100vh',
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
                            urlToProject={URLs.dag.url}
                            projectTitle={URLs.dag.title}
                            projectDescription={URLs.dag.description}
                        />
                    </Grid>
                    <Grid item xs={8} sm={5} md={4} lg={3}>
                        <ProjectCard
                            image={require('../assets/projectsImgages/soon.jpg')} urlToProject={URLs.dag.url}
                            projectTitle={'proximamente'}
                            projectDescription={'proximamente subiré proyectos en los que estoy trabajando'}
                        />
                    </Grid>
                    <Grid item xs={8} sm={5} md={4} lg={3}>
                        <ProjectCard
                            image={require('../assets/projectsImgages/soon.jpg')} urlToProject={URLs.dag.url}
                            projectTitle={'proximamente'}
                            projectDescription={'proximamente subiré proyectos en los que estoy trabajando'}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Projects