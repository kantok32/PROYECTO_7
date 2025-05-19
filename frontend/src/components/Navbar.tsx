import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          E-Commerce
        </Typography>
        <Button color="inherit" component={RouterLink} to="/products">
          Productos
        </Button>
        <Button color="inherit" component={RouterLink} to="/login">
          Iniciar Sesión
        </Button>
        <Button color="inherit" component={RouterLink} to="/register">
          Registrarse
        </Button>
        <IconButton color="inherit" component={RouterLink} to="/checkout">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 