import './App.css';
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Navbar />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
