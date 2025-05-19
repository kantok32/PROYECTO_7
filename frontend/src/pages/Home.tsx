import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Bienvenido a nuestra Tienda
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Descubre nuestra amplia selección de productos de alta calidad
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/products')}
            sx={{ mt: 4 }}
          >
            Ver Productos
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home; 