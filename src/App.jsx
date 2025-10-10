// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ScrollToTop } from "./hooks/useScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CartWithAuth from "./components/CartWithAuth";
import BottomNavigation from "./components/BottomNavigation";
// import DebugAuth from "./components/DebugAuth"; // 🔧 Desactivado temporalmente - Reactivar para debugging

// Pages
import Home from "./pages/home";
import Products from "./pages/products";       
import ProductDetail from "./pages/productDetails"; 
import About from "./pages/about";
import NotFound from "./pages/NotFound";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // ✅ Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // ✅ Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Funciones del carrito
  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Box display="flex" flexDirection="column" minHeight="100vh">
          {/* 🔹 Header fijo en todas las páginas */}
          <Header onCartClick={() => setCartOpen(true)} cartItems={cartItems} />

        {/* 🔹 Contenido dinámico según ruta */}
        <Box component="main" flexGrow={1} p={2}>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onAddToCart={addToCart}
                  cartItems={cartItems}
                />
              } 
            />

            <Route
              path="/productos"
              element={
                <Products
                  cartItems={cartItems}
                  addToCart={addToCart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeItem={removeItem}
                  clearCart={clearCart}
                />
              }
            />

            <Route
              path="/productos/:categoria"
              element={
                <Products
                  cartItems={cartItems}
                  addToCart={addToCart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeItem={removeItem}
                  clearCart={clearCart}
                />
              }
            />

            <Route
              path="/productos/:categoria/:id"
              element={
                <ProductDetail
                  cartItems={cartItems}
                  onAddToCart={addToCart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeItem={removeItem}
                  clearCart={clearCart}
                />
              }
            />

            <Route path="/nosotros" element={<About />} />
            
            {/* 🔹 Ruta catch-all para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        {/* 🔹 Footer - Solo visible en desktop */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Footer />
        </Box>

        {/* 🔹 Bottom Navigation - Solo visible en móvil */}
        <BottomNavigation 
          onCartClick={() => setCartOpen(true)}
          cartItems={cartItems}
        />

        {/* 🔹 Drawer del carrito con autenticación */}
        <CartWithAuth
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
          clearCart={clearCart}
        />

        {/* 🔹 Padding bottom para móvil - evita que el contenido se oculte detrás del BottomNav */}
        <Box sx={{ 
          height: { xs: 70, md: 0 },  // Altura del BottomNavigation
          display: { xs: 'block', md: 'none' }
        }} />

        {/* 🔍 Debug component - Solo en desarrollo */}
        {/* <DebugAuth /> */} {/* 🔧 Desactivado temporalmente - Reactivar para debugging */}
        </Box>
      </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
