import { Link } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ 
  image,
  urlToProject,
  projectTitle,
  projectDescription,
  codeSource
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
      {urlToProject !== '' ? 
          <Link color="inherit" href={urlToProject} style={{ textDecoration: 'none' }} >
            <Button size="small">ver proyecto</Button>
          </Link> : ''
      }
      {codeSource !== '' ? 
          <Link color="inherit" href={codeSource} style={{ textDecoration: 'none' }} >
            <Button size="small">repositorio</Button>
          </Link> : ''
      } 
      </CardActions>
    </Card>
  );
}