// src/components/BottomNavigation.jsx
import React from "react";
import { 
  Box, 
  IconButton,
  Typography,
  Paper,
  Fab,
  Badge,
  useTheme
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function BottomNavigation({ onCartClick, cartItems = [] }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  // Determinar el valor activo basado en la ruta actual
  const getCurrentValue = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/productos" || path.startsWith("/productos/")) return "productos";
    if (path === "/nosotros") return "nosotros";
    return "";
  };



  // Calcular total de items en el carrito (igual que en Header)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Paper
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000,
        display: { xs: 'block', md: 'none' },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(30, 30, 30, 0.98) 0%, rgba(20, 20, 20, 0.98) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderTop: theme.palette.mode === 'dark'
          ? '2px solid #bb86fc'
          : '2px solid #4CAF50',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 -8px 32px rgba(187, 134, 252, 0.15), inset 0 1px 0 rgba(187, 134, 252, 0.3)'
          : '0 -8px 32px rgba(76, 175, 80, 0.15), inset 0 1px 0 rgba(76, 175, 80, 0.3)'
      }}
      elevation={0}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        px: 1,
        py: 0.5,
        minHeight: 70,
        position: 'relative',
        width: '100%'
      }}>
        {/* Inicio - Extremo izquierdo */}
        <Box sx={{ 
          position: 'absolute',
          left: '0%',
          transform: 'translateX(0%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 70
        }}>
          <IconButton
            onClick={() => navigate('/')}
            sx={{
              padding: '6px',
              transition: 'all 0.3s ease',
              borderRadius: '8px',
              '&:hover': {
                background: 'rgba(25, 118, 210, 0.04)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            <HomeIcon sx={{ 
              fontSize: 24,
              color: getCurrentValue() === 'home' 
                ? (theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2')
                : (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.54)' : 'rgba(0, 0, 0, 0.54)'),
              transition: 'color 0.3s ease'
            }} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.65rem',
              fontWeight: getCurrentValue() === 'home' ? 600 : 400,
              color: getCurrentValue() === 'home' 
                ? (theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2')
                : (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'),
              transition: 'all 0.3s ease',
              mt: 0.25
            }}
          >
            Inicio
          </Typography>
        </Box>

        {/* Productos - Equidistante entre Inicio y Carrito */}
        <Box sx={{ 
          position: 'absolute',
          left: '25%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <IconButton
            onClick={() => navigate('/productos')}
            sx={{
              padding: '6px',
              transition: 'all 0.3s ease',
              borderRadius: '8px',
              '&:hover': {
                background: 'rgba(25, 118, 210, 0.04)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            <InventoryIcon sx={{ 
              fontSize: 24,
              color: getCurrentValue() === 'productos' 
                ? (theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2')
                : (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.54)' : 'rgba(0, 0, 0, 0.54)'),
              transition: 'color 0.3s ease'
            }} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.65rem',
              fontWeight: getCurrentValue() === 'productos' ? 600 : 400,
              color: getCurrentValue() === 'productos' 
                ? (theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2')
                : (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'),
              transition: 'all 0.3s ease',
              mt: 0.25,
              whiteSpace: 'nowrap'
            }}
          >
            Productos
          </Typography>
        </Box>

        {/* Carrito Central - Exactamente en el centro */}
        <Box sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}>
          <Fab
            onClick={onCartClick}
            sx={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
              color: 'white',
              position: 'relative',
              boxShadow: '0 6px 16px rgba(76, 175, 80, 0.4)',
              border: '3px solid white',
              '&:hover': {
                background: 'linear-gradient(135deg, #388E3C 0%, #4CAF50 100%)',
                transform: 'translateX(-50%) scale(1.1)',
                boxShadow: '0 8px 20px rgba(76, 175, 80, 0.5)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 24 }} />
            {cartItemCount > 0 && (
              <Box sx={{
                position: 'absolute',
                top: -8,
                right: -8,
                background: 'linear-gradient(45deg, #ff1744, #f50057)',
                color: 'white',
                borderRadius: '50%',
                minWidth: 22,
                height: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                border: '2px solid white',
                boxShadow: '0 2px 8px rgba(255, 23, 68, 0.4)',
                animation: cartItemCount > 0 ? 'pulse 2s infinite' : 'none'
              }}>
                {cartItemCount}
              </Box>
            )}
          </Fab>
        </Box>

        {/* Nosotros - Equidistante entre Carrito y Atrás */}
        <Box sx={{ 
          position: 'absolute',
          left: '75%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <IconButton
            onClick={() => navigate('/nosotros')}
            sx={{
              padding: '6px',
              transition: 'all 0.3s ease',
              borderRadius: '8px',
              '&:hover': {
                background: 'rgba(25, 118, 210, 0.04)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            <InfoIcon sx={{ 
              fontSize: 24,
              color: getCurrentValue() === 'nosotros' 
                ? (theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2')
                : (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.54)' : 'rgba(0, 0, 0, 0.54)'),
              transition: 'color 0.3s ease'
            }} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.65rem',
              fontWeight: getCurrentValue() === 'nosotros' ? 600 : 400,
              color: getCurrentValue() === 'nosotros' 
                ? (theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2')
                : (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'),
              transition: 'all 0.3s ease',
              mt: 0.25,
              whiteSpace: 'nowrap'
            }}
          >
            Nosotros
          </Typography>
        </Box>
          
        {/* Atrás - Extremo derecho */}
        <Box sx={{ 
          position: 'absolute',
          right: '0%',
          transform: 'translateX(0%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 70
        }}>
          <IconButton
            onClick={() => window.history.back()}
            sx={{
              padding: '6px',
              transition: 'all 0.3s ease',
              borderRadius: '8px',
              '&:hover': {
                background: 'rgba(25, 118, 210, 0.04)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            <ArrowBackIcon sx={{ 
              fontSize: 24,
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.54)' 
                : 'rgba(0, 0, 0, 0.54)',
              transition: 'color 0.3s ease'
            }} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.65rem',
              fontWeight: 400,
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.6)' 
                : 'rgba(0, 0, 0, 0.6)',
              transition: 'all 0.3s ease',
              mt: 0.25
            }}
          >
            Atrás
          </Typography>
        </Box>
      </Box>

      {/* Animaciones CSS */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </Paper>
  );
}