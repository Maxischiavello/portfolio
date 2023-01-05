import './App.css';
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Footer from './components/Footer';
import AboutContainer from './components/AboutContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <Home />
        <AboutContainer />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
