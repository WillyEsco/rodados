import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{ 
      minHeight: '80vh',
      background: theme.palette.mode === 'dark' 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="sm">
        <Box 
          textAlign="center"
          sx={{
            background: theme.palette.mode === 'dark' 
              ? 'rgba(30, 30, 30, 0.95)' 
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            p: 4,
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(255, 255, 255, 0.1)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              fontSize: { xs: '4rem', sm: '6rem' },
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
              mb: 2
            }}
          >
            404
          </Typography>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#333333',
              mb: 2,
              fontWeight: 500
            }}
          >
            ¡Oops! Página no encontrada
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#666666',
              mb: 4,
              lineHeight: 1.6
            }}
          >
            La página que buscas no existe o ha sido movida. 
            Te invitamos a explorar nuestros productos.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              sx={{
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 50%, #2e7d32 100%)',
                color: 'white',
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #66bb6a 0%, #4caf50 50%, #388e3c 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.5)',
                }
              }}
            >
              Ir al Inicio
            </Button>
            <Button
              component={Link}
              to="/productos"
              variant="outlined"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{
                borderColor: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
                color: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                borderWidth: 2,
                '&:hover': {
                  borderColor: theme.palette.mode === 'dark' ? '#d1c4e9' : '#1565c0',
                  color: theme.palette.mode === 'dark' ? '#d1c4e9' : '#1565c0',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 4px 16px rgba(187, 134, 252, 0.3)'
                    : '0 4px 16px rgba(25, 118, 210, 0.3)',
                }
              }}
            >
              Ver Productos
            </Button>
          </Box>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              mt: 2,
              color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#666666',
              textDecoration: 'underline',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }
            }}
          >
            ← Volver atrás
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default NotFound;