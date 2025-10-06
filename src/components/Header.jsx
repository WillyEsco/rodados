import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logoPpal from "../assets/logo-ppal.png";
import logoBackup from "../assets/logo-backup.png";
import textoMarca from "../assets/texto-marca.png";

export default function Header({ onCartClick, cartItems = [] }) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // 👈 detecta ruta activa

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Inicio", path: "/" },
    { text: "Productos", path: "/productos" },
    { text: "Nosotros", path: "/nosotros" },
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 280,
        height: "100%",
        background: theme.palette.mode === 'dark'
          ? "linear-gradient(180deg, #1a237e 0%, #0d47a1 100%)"
          : "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Header del drawer */}
      <Box 
        sx={{ 
          background: theme.palette.mode === 'dark'
            ? "linear-gradient(135deg, #7c4dff 0%, #4a148c 100%)"
            : "linear-gradient(135deg, #59f720 0%, #108e1c 100%)",
          p: 3,
          position: "relative",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        }}
      >
        {/* Botón cerrar X igual que el carrito */}
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.3)",
            width: 36,
            height: 36,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease"
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Box
          component="img"
          src={logoPpal}
          alt="MiTienda Logo"
          onError={(e) => {e.target.src = logoBackup}}
          sx={{ 
            height: 65,
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
          }}
        />
      </Box>

      {/* Lista de navegación */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              mx: 2,
              mb: 1,
              borderRadius: "12px",
              background: location.pathname === item.path 
                ? theme.palette.mode === 'dark'
                  ? "linear-gradient(90deg, #7c4dff, #4a148c)"
                  : "linear-gradient(90deg, #59f720, #108e1c)" 
                : "transparent",
              color: location.pathname === item.path 
                ? "white" 
                : theme.palette.mode === 'dark' ? "#ffffff" : "#333333",
              transition: "all 0.3s ease",
              "&:hover": {
                background: location.pathname === item.path 
                  ? theme.palette.mode === 'dark'
                    ? "linear-gradient(90deg, #7c4dff, #4a148c)"
                    : "linear-gradient(90deg, #59f720, #108e1c)"
                  : theme.palette.mode === 'dark'
                    ? "rgba(124, 77, 255, 0.1)"
                    : "rgba(89, 247, 32, 0.1)",
                transform: "translateX(8px)",
                boxShadow: theme.palette.mode === 'dark'
                  ? "0 4px 12px rgba(124, 77, 255, 0.2)"
                  : "0 4px 12px rgba(89, 247, 32, 0.2)"
              },
              "& .MuiListItemIcon-root": {
                color: location.pathname === item.path 
                  ? "white" 
                  : theme.palette.mode === 'dark' ? "#7c4dff" : "#59f720"
              }
            }}
          >
            {item.text === "Inicio" && (
              <ListItemIcon
                sx={{
                  minWidth: "40px",
                  transition: "transform 0.3s ease",
                }}
              >
                <HomeIcon sx={{ fontSize: 24 }} />
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? "bold" : "500",
                fontSize: "1.1rem",
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Footer del drawer */}
      <Box 
        sx={{ 
          p: 2,
          textAlign: "center",
          borderTop: theme.palette.mode === 'dark'
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid #dee2e6",
          background: theme.palette.mode === 'dark'
            ? "rgba(26, 35, 126, 0.9)"
            : "rgba(255,255,255,0.7)",
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        {/* Theme Toggle en drawer móvil */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
            Tema:
          </Typography>
          <ThemeToggle size="small" />
        </Box>
        
        <Typography 
          variant="caption" 
          sx={{ 
            color: "text.secondary",
            fontWeight: 500 
          }}
        >
          Rodados eShop © 2025
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: theme.palette.mode === 'dark'
            ? "linear-gradient(135deg, #7c4dff 0%, #4a148c 100%)"
            : "linear-gradient(135deg, #59f720 0%, #108e1c 100%)",
          boxShadow: theme.palette.mode === 'dark'
            ? "0 4px 20px rgba(124, 77, 255, 0.3)"
            : "0 4px 20px rgba(0, 102, 255, 0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo izquierda */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              transition: "transform 0.4s",
              "&:hover img": {
                animation: "swing 0.7s",
              },
              "@keyframes swing": {
                "20%": { transform: "rotate(15deg)" },
                "40%": { transform: "rotate(-10deg)" },
                "60%": { transform: "rotate(5deg)" },
                "80%": { transform: "rotate(-5deg)" },
                "100%": { transform: "rotate(0deg)" },
              },
            }}
          >
            <Box
              component="img"
              src={logoPpal}
              alt="MiTienda Logo"
              sx={{ height: { xs: 50, sm: 80 } }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" },
              justifyContent: "left",
              px: { xs: 1, sm: 2 },
              py: 1,
              transition: "filter 0.2s",
              "&:hover": { filter: "brightness(1.3)" },
            }}
          >
            <Box
              component="img"
              src={textoMarca}
              alt="Marca"
              sx={{ height: { xs: 30, sm: 50 } }}
            />
          </Box>

          {/* Menú escritorio derecha */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: location.pathname === item.path ? "3px solid #ff9800" : "none", // 👈 barrita naranja
                  borderRadius: 0,
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.text === "Inicio" ? <HomeIcon sx={{ fontSize: 25 }} /> : item.text}
              </Button>
            ))}

            {/* Theme Toggle - Desktop */}
            <ThemeToggle color="inherit" />

            {/* Carrito (icono siempre visible en desktop) */}
            <Badge
              badgeContent={cartItems.length}
              sx={{
                "& .MuiBadge-badge": {
                  background: "linear-gradient(45deg, #ff1744, #d50000)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  minWidth: "20px",
                  height: "20px",
                  borderRadius: "10px",
                  border: "2px solid white",
                  boxShadow: "0 2px 6px rgba(255, 23, 68, 0.4)",
                  animation: cartItems.length > 0 ? "cartPulse 2s infinite" : "none",
                  "@keyframes cartPulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.15)" },
                    "100%": { transform: "scale(1)" }
                  }
                }
              }}
            >
              <IconButton color="inherit" onClick={onCartClick}>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
          </Box>

          {/* Menú móvil */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
            {/* Carrito móvil - siempre visible */}
            <Badge
              badgeContent={cartItems.length}
              sx={{
                "& .MuiBadge-badge": {
                  background: "linear-gradient(45deg, #ff1744, #d50000)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.7rem",
                  minWidth: "18px",
                  height: "18px",
                  borderRadius: "9px",
                  border: "2px solid white",
                  boxShadow: "0 2px 6px rgba(255, 23, 68, 0.4)",
                  animation: cartItems.length > 0 ? "cartPulseMobile 2s infinite" : "none",
                  "@keyframes cartPulseMobile": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.2)" },
                    "100%": { transform: "scale(1)" }
                  }
                }
              }}
            >
              <IconButton color="inherit" onClick={onCartClick}>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
            
            {/* Menú hamburguesa */}
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            boxShadow: "-8px 0 24px rgba(0,0,0,0.15)",
            border: "none"
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
