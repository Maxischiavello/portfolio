import './App.css';
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Footer from './components/Footer';
import AboutContainer from './components/AboutContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth={false} disableGutters >
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<AboutContainer />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
