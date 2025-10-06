// src/pages/Products.jsx
import React from "react";
import { Container, Typography, useTheme, Box } from "@mui/material";
import ProductList from "../components/ProductList";

export default function Products({ addToCart, cartItems }) {
  const theme = useTheme();
  
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
          pb: { xs: 2, sm: 0 },
          color: theme.palette.mode === 'dark' ? '#ffffff' : '#333333',
        }}
      >
        Nuestros Productos
      </Typography>
      <ProductList onAddToCart={addToCart} cartItems={cartItems} />
      </Container>
    </Box>
  );
}
