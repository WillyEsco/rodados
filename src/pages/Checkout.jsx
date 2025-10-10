// src/pages/Checkout.jsx
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
  Alert,
  useTheme,
  Container,
  Paper,
  Dialog,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Email as EmailIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart, onClose }) => {
  const theme = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [processing, setProcessing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [orderNumber] = useState(() => `ORD-${Date.now()}`);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handlePurchase = async () => {
    setProcessing(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      await sendConfirmationEmail();
      
      setPurchaseComplete(true);
      
      setTimeout(() => {
        clearCart();
      }, 3000);
      
    } catch (error) {
      console.error('Error processing purchase:', error);
    } finally {
      setProcessing(false);
    }
  };

  const sendConfirmationEmail = async () => {
    console.log(`📧 Email enviado a ${user.email}:`);
    console.log(`
    ¡Has comprado en Rodados eShop!
    Muchas gracias por confiar en nosotros.
    
    Detalles de tu compra:
    - Número de orden: ${orderNumber}
    - Total: $${total}
    - Productos: ${totalItems} items
    
    ¡Esperamos verte pronto!
    `);
  };

  const handleClose = () => {
    if (purchaseComplete) {
      clearCart();
      navigate('/');
    }
    onClose();
  };

  if (purchaseComplete) {
    return (
      <Dialog 
        open 
        onClose={handleClose} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(30, 30, 30, 0.98)' 
              : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
          }
        }}
      >
        <DialogContent sx={{ textAlign: 'center', p: 4 }}>
          <CheckCircleIcon 
            sx={{ 
              fontSize: 80, 
              color: '#4CAF50', 
              mb: 2,
              animation: 'bounce 1s ease-in-out'
            }} 
          />
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color: '#4CAF50' }}>
            ¡Compra Exitosa!
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Orden: {orderNumber}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Hemos enviado la confirmación a <strong>{user.email}</strong>
          </Typography>
          <Alert severity="success" sx={{ mb: 3 }}>
            ¡Muchas gracias por confiar en Rodados eShop!
          </Alert>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button 
            fullWidth 
            variant="contained" 
            onClick={handleClose}
            sx={{
              background: 'linear-gradient(135deg, #4CAF50 0%, #2e7d32 100%)',
              py: 1.5,
              borderRadius: 2
            }}
          >
            Continuar Comprando
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        p: 2
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          background: theme.palette.mode === 'dark' 
            ? 'rgba(30, 30, 30, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          border: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.5)'
            : '0 20px 40px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Header */}
          <Typography 
            variant="h4" 
            fontWeight="bold"
            sx={{
              mb: 3,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #4CAF50 0%, #2e7d32 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            🛒 Finalizar Compra
          </Typography>

          <Paper 
            sx={{ 
              p: 3, 
              mb: 3, 
              borderRadius: 2,
              background: theme.palette.mode === 'dark' 
                ? 'rgba(45, 45, 45, 0.8)' 
                : 'rgba(245, 245, 245, 0.8)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PersonIcon sx={{ mr: 2, color: '#4CAF50' }} />
              <Box>
                <Typography variant="h6" fontWeight="600">
                  {user.username}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
            {user.provider !== 'manual' && (
              <Typography variant="caption" color="text.secondary">
                Conectado con {user.provider}
              </Typography>
            )}
          </Paper>

          <Paper 
            sx={{ 
              p: 3, 
              mb: 3, 
              borderRadius: 2,
              background: theme.palette.mode === 'dark' 
                ? 'rgba(45, 45, 45, 0.8)' 
                : 'rgba(245, 245, 245, 0.8)',
            }}
          >
            <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
              📋 Resumen del Pedido
            </Typography>
            
            <List sx={{ py: 0 }}>
              {cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemText
                      primary={item.name}
                      secondary={`$${item.price} × ${item.quantity}`}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 500
                        }
                      }}
                    />
                    <Typography variant="body1" fontWeight="600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </ListItem>
                  {index < cartItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold">
                Total ({totalItems} productos):
              </Typography>
              <Typography 
                variant="h5" 
                fontWeight="bold" 
                sx={{ color: '#4CAF50' }}
              >
                ${total}
              </Typography>
            </Box>
          </Paper>

          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              variant="contained"
              fullWidth
              onClick={handlePurchase}
              disabled={processing}
              sx={{
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #4CAF50 0%, #2e7d32 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #66bb6a 0%, #388e3c 100%)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              {processing ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                  Procesando...
                </>
              ) : (
                '💳 Confirmar Compra'
              )}
            </Button>
            
            <Button
              variant="outlined"
              onClick={onClose}
              disabled={processing}
              sx={{
                py: 2,
                fontSize: '1rem',
                fontWeight: 600,
                borderColor: 'text.secondary',
                color: 'text.secondary',
                minWidth: { xs: 'auto', sm: 120 },
                '&:hover': {
                  borderColor: 'text.primary',
                  color: 'text.primary',
                }
              }}
            >
              Cancelar
            </Button>
          </Box>

          <Alert severity="info" sx={{ mt: 3 }}>
            <Typography variant="body2">
              Al confirmar tu compra, recibirás un email de confirmación en <strong>{user.email}</strong>
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;