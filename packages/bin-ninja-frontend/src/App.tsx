import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import SignUpForm from './components/SignUpForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green color for environmental theme
    },
    secondary: {
      main: '#ffa726', // Orange for contrast
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Hero />
        <PricingSection />
        <SignUpForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;