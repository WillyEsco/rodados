import React from "react";
import { Container, Typography, useTheme, Box, Button, ButtonGroup } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function Products({ addToCart, cartItems }) {
  const theme = useTheme();
  const { categoria } = useParams();
  const navigate = useNavigate();
  
  const currentCategory = categoria || 'todo';
  
  const handleCategoryChange = (newCategory) => {
    if (newCategory === 'todo') {
      navigate('/productos');
    } else {
      navigate(`/productos/${newCategory}`);
    }
  };

  const getCategoryTitle = () => {
    switch (currentCategory) {
      case 'kids': return 'Productos para Niños';
      case 'adultos': return 'Productos para Adultos';
      default: return 'Todos los Productos';
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: theme.palette.mode === 'dark' 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)'
    }}>
      <Container sx={{ pt: 4, px: { xs: 1, sm: 2 }, pb: { xs: 4, sm: 6 } }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: { xs: '1.4rem', sm: '2rem' },
            textAlign: { xs: 'center', sm: 'left' },
            pb: { xs: 2, sm: 1 },
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#333333',
          }}
        >
          {getCategoryTitle()}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <ButtonGroup 
            variant="contained" 
            sx={{ 
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '& .MuiButton-root': {
                px: { xs: 2, sm: 3 },
                py: 1,
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                fontWeight: 600,
                textTransform: 'none',
              }
            }}
          >
            <Button 
              onClick={() => handleCategoryChange('todo')}
              sx={{
                backgroundColor: currentCategory === 'todo' 
                  ? theme.palette.primary.main 
                  : theme.palette.mode === 'dark' ? '#424242' : '#e0e0e0',
                color: currentCategory === 'todo' 
                  ? '#fff' 
                  : theme.palette.mode === 'dark' ? '#fff' : '#666',
                '&:hover': {
                  backgroundColor: currentCategory === 'todo' 
                    ? theme.palette.primary.dark 
                    : theme.palette.mode === 'dark' ? '#616161' : '#d0d0d0',
                }
              }}
            >
              Todo
            </Button>
            <Button 
              onClick={() => handleCategoryChange('kids')}
              sx={{
                backgroundColor: currentCategory === 'kids' 
                  ? theme.palette.primary.main 
                  : theme.palette.mode === 'dark' ? '#424242' : '#e0e0e0',
                color: currentCategory === 'kids' 
                  ? '#fff' 
                  : theme.palette.mode === 'dark' ? '#fff' : '#666',
                '&:hover': {
                  backgroundColor: currentCategory === 'kids' 
                    ? theme.palette.primary.dark 
                    : theme.palette.mode === 'dark' ? '#616161' : '#d0d0d0',
                }
              }}
            >
              Kids
            </Button>
            <Button 
              onClick={() => handleCategoryChange('adultos')}
              sx={{
                backgroundColor: currentCategory === 'adultos' 
                  ? theme.palette.primary.main 
                  : theme.palette.mode === 'dark' ? '#424242' : '#e0e0e0',
                color: currentCategory === 'adultos' 
                  ? '#fff' 
                  : theme.palette.mode === 'dark' ? '#fff' : '#666',
                '&:hover': {
                  backgroundColor: currentCategory === 'adultos' 
                    ? theme.palette.primary.dark 
                    : theme.palette.mode === 'dark' ? '#616161' : '#d0d0d0',
                }
              }}
            >
              Adultos
            </Button>
          </ButtonGroup>
        </Box>

        {/* Lista de productos con filtro */}
        <ProductList 
          onAddToCart={addToCart} 
          cartItems={cartItems} 
          categoryFilter={currentCategory}
        />
      </Container>
    </Box>
  );
}
