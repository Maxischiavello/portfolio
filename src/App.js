import './App.css';
import Content from './components/Content';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Content/> 
    </ThemeProvider>
  );
}

export default App;
