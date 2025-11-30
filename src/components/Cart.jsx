import React from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Paper,
  Button,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import comprasImage from "../assets/compras.png";
import carritoImage from "../assets/carrito.png";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
export default function Cart({
  open,
  onClose,
  items,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
}) {
  const theme = useTheme();
  const total = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100vw", sm: 380 },
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: theme.palette.mode === 'dark'
            ? "-8px 0 32px rgba(255,255,255,0.1)"
            : "-8px 0 32px rgba(0,0,0,0.15)"
        }
      }}
    >
      <Box 
        sx={{
          height: "100%",
          display: "flex", 
          flexDirection: "column",
          position: "relative"
        }}
      >
        <Box 
          sx={{
            background: theme.palette.mode === 'dark'
              ? 'rgba(30, 30, 30, 0.95)'
              : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            backdropFilter: 'blur(10px)',
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : 'none',
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: theme.palette.mode === 'dark'
              ? '0 4px 16px rgba(255, 255, 255, 0.1)'
              : '0 4px 16px rgba(25, 118, 210, 0.3)'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? '#bb86fc' : '#ffffff',
              fontWeight: "bold",
              fontSize: "1.3rem",
              textShadow: theme.palette.mode === 'dark'
                ? '0px 2px 4px rgba(0,0,0,0.5)'
                : '0px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            🛒 Mi Carrito
          </Typography>
          <IconButton 
            onClick={onClose}
            sx={{
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
              bgcolor: theme.palette.mode === 'dark'
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0.2)",
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255,255,255,0.2)'
                : '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(10px)',
              "&:hover": {
                bgcolor: theme.palette.mode === 'dark'
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.3)",
                transform: "scale(1.1)",
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 4px 12px rgba(255,255,255,0.15)'
                  : '0 4px 12px rgba(255,255,255,0.2)'
              },
              transition: "all 0.3s ease"
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Paper
          elevation={0}
          sx={{
            m: 2,
            p: 3,
            background: theme.palette.mode === 'dark'
              ? 'rgba(30, 30, 30, 0.95)'
              : 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
            backdropFilter: 'blur(10px)',
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(187, 134, 252, 0.3)'
              : 'none',
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 24px rgba(187, 134, 252, 0.2)'
              : '0 8px 24px rgba(76, 175, 80, 0.3)'
          }}
        >
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#ffffff',
                mb: 0.5,
                opacity: theme.palette.mode === 'dark' ? 1 : 0.9
              }}
            >
              💰 Total del carrito
            </Typography>
            <Typography 
              variant="h4" 
              fontWeight="bold"
              sx={{
                color: theme.palette.mode === 'dark' ? '#4CAF50' : '#ffffff',
                textShadow: theme.palette.mode === 'dark'
                  ? '0px 2px 8px rgba(0,0,0,0.5)'
                  : '0px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              ${total}
            </Typography>
          </Box>
          <Box
            component="img"
            src={comprasImage}
            alt="Mascota"
            sx={{ 
              width: 80, 
              height: 80,
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
            }}
          />
        </Paper>
        <Box 
          sx={{ 
            flexGrow: 1, 
            overflow: "auto",
            px: 2,
            pb: 2
          }}
        >
          {items.length === 0 ? (
            <Box 
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                py: 4,
                mt: 4
              }}
            >
              <Box
                component="img"
                src={carritoImage}
                alt="Carrito vacío"
                sx={{
                  width: 120,
                  mb: 3,
                  filter: "brightness(1.2) saturate(0.8)",
                  animation: "gentlePulse 3s infinite",
                  "@keyframes gentlePulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" }
                  }
                }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
                  mb: 1,
                  fontWeight: 600,
                  textShadow: theme.palette.mode === 'dark'
                    ? '0px 2px 4px rgba(0,0,0,0.5)'
                    : 'none'
                }}
              >
                Tu carrito está vacío
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#666666'
                }}
              >
                ¡Agrega productos para empezar!
              </Typography>
            </Box>
          ) : (
            <List sx={{ py: 0 }}>
              {items.map((item) => (
                <Paper
                  key={item.id}
                  elevation={0}
                  sx={{
                    mb: 2,
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(30, 30, 30, 0.95)'
                      : 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 16px rgba(255, 255, 255, 0.08)'
                      : '0 4px 16px rgba(0, 0, 0, 0.08)',
                    "&:hover": {
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 24px rgba(255, 255, 255, 0.12)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)',
                      transform: 'translateY(-2px)'
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  <ListItem
                    sx={{
                      p: 2,
                      flexDirection: "column",
                      alignItems: "stretch"
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.mode === 'dark' ? '#ffffff' : '#333333',
                            mb: 0.5,
                            textShadow: theme.palette.mode === 'dark'
                              ? '0px 1px 3px rgba(0,0,0,0.5)'
                              : 'none'
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
                            fontWeight: 500
                          }}
                        >
                          ${item.price} x {item.quantity} = 
                          <Box component="span" sx={{ color: '#4CAF50', fontWeight: 'bold', ml: 0.5 }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </Box>
                        </Typography>
                      </Box>
                      <IconButton
                        size="small"
                        onClick={() => removeItem(item.id)}
                        sx={{
                          color: "#ff4757",
                          "&:hover": {
                            bgcolor: "#ff4757",
                            color: "white",
                            transform: 'scale(1.1)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <DeleteIcon fontSize="medium" />
                      </IconButton>
                    </Box>
                    <Box 
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        mt: 2,
                        p: 1.5,
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(45, 45, 45, 0.8)'
                          : 'rgba(245, 245, 245, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: "12px",
                        border: theme.palette.mode === 'dark'
                          ? '1px solid rgba(255, 255, 255, 0.05)'
                          : '1px solid rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <IconButton 
                        size="small" 
                        onClick={() => decreaseQty(item.id)}
                        sx={{
                          bgcolor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          border: theme.palette.mode === 'dark'
                            ? '1px solid rgba(255, 255, 255, 0.2)'
                            : '1px solid rgba(0, 0, 0, 0.1)',
                          color: theme.palette.mode === 'dark' ? '#ffffff' : '#666666',
                          "&:hover": {
                            bgcolor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(240, 240, 240, 0.9)',
                            transform: 'scale(1.1)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 4px 12px rgba(255, 255, 255, 0.1)'
                              : '0 4px 12px rgba(0, 0, 0, 0.1)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography
                        sx={{
                          minWidth: "50px",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
                          fontSize: "1.2rem",
                          py: 1,
                          px: 2,
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(187, 134, 252, 0.1)'
                            : 'rgba(25, 118, 210, 0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: "8px",
                          border: "2px solid",
                          borderColor: theme.palette.mode === 'dark' ? '#bb86fc' : '#1976d2',
                          textShadow: theme.palette.mode === 'dark'
                            ? '0px 1px 3px rgba(0,0,0,0.5)'
                            : 'none'
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <IconButton 
                        size="small" 
                        onClick={() => increaseQty(item.id)}
                        sx={{
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(45deg, #bb86fc, #7c4dff)'
                            : 'linear-gradient(45deg, #1976d2, #42a5f5)',
                          color: "white",
                          border: 'none',
                          "&:hover": {
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(45deg, #a575fc, #6a3dff)'
                              : 'linear-gradient(45deg, #1565c0, #1976d2)',
                            transform: 'scale(1.1)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 4px 12px rgba(187, 134, 252, 0.4)'
                              : '0 4px 12px rgba(25, 118, 210, 0.4)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </ListItem>
                </Paper>
              ))}
            </List>
          )}
        </Box>
        {cartItems.length > 0 && (
          <Box 
            sx={{
              p: 3,
              borderTop: theme.palette.mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.2)'
                : '1px solid rgba(0, 0, 0, 0.15)',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 30, 30, 0.98) 0%, rgba(20, 20, 20, 0.98) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 240, 240, 0.98) 100%)',
              backdropFilter: "blur(15px)",
              boxShadow: theme.palette.mode === 'dark'
                ? '0 -4px 16px rgba(0, 0, 0, 0.3)'
                : '0 -4px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                if (window.handlePurchase) {
                  window.handlePurchase();
                }
              }}
              sx={{
                borderRadius: "20px",
                py: 2.5,
                fontSize: "1.3rem",
                fontWeight: "bold",
                mb: 2,
                background: "linear-gradient(135deg, #4CAF50 0%, #45a049 50%, #2e7d32 100%)",
                color: 'white',
                boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                "&:hover": {
                  background: "linear-gradient(135deg, #66bb6a 0%, #4caf50 50%, #388e3c 100%)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 25px rgba(76, 175, 80, 0.5)",
                  '&::before': {
                    transform: 'translateX(100%)'
                  }
                },
                "&:active": {
                  transform: "translateY(-1px)"
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'transform 0.6s ease'
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              🛒 COMPRAR AHORA - ${total}
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={clearCart}
              sx={{
                borderRadius: "16px",
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: "600",
                borderColor: "#ff4757",
                color: "#ff4757",
                "&:hover": {
                  borderColor: "#ff4757",
                  backgroundColor: "rgba(255, 71, 87, 0.1)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  transform: "translateY(0px)"
                },
                transition: "all 0.3s ease"
              }}
            >
              🗑️ Vaciar Carrito
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
