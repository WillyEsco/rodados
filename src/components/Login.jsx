import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Divider,
  IconButton,
  CircularProgress,
  Alert,
  useTheme,
  Container
} from '@mui/material';
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Login = ({ onClose, onLoginSuccess }) => {
  const theme = useTheme();
  const { login, loginWithProvider } = useAuth();
  
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Limpiar error al escribir
  };

  const handleManualLogin = async (e) => {
    e.preventDefault();
    
    if (!formData.username.trim() || !formData.email.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        username: formData.username,
        email: formData.email,
        provider: 'manual',
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.username)}&background=4CAF50&color=fff`
      };

      login(userData);
      onLoginSuccess && onLoginSuccess();
    } catch {
      setError('Error al iniciar sesión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setSocialLoading(provider);
    setError('');

    try {
      await loginWithProvider(provider);
      onLoginSuccess && onLoginSuccess();
    } catch {
      setError(`Error al conectar con ${provider}. Inténtalo de nuevo.`);
    } finally {
      setSocialLoading(null);
    }
  };

  const socialProviders = [
    { name: 'Google', icon: GoogleIcon, color: '#DB4437' },
    { name: 'Facebook', icon: FacebookIcon, color: '#4267B2' },
    { name: 'Instagram', icon: InstagramIcon, color: '#E4405F' },
    { name: 'Twitter', icon: TwitterIcon, color: '#1DA1F2' }
  ];

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
          maxWidth: { xs: '95vw', sm: 450 },
          width: '100%',
          maxHeight: { xs: '90vh', sm: 'auto' },
          overflowY: { xs: 'auto', sm: 'visible' },
          background: theme.palette.mode === 'dark' 
            ? 'rgba(30, 30, 30, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: { xs: 2, sm: 3 },
          border: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0, 0, 0, 0.5)'
            : '0 20px 40px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography 
              variant="h4" 
              fontWeight="bold"
              sx={{
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#333333',
                background: 'linear-gradient(135deg, #4CAF50 0%, #2e7d32 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Iniciar Sesión
            </Typography>
            
            <IconButton 
              onClick={onClose}
              sx={{
                bgcolor: theme.palette.mode === 'dark' 
                  ? "rgba(255,255,255,0.1)" 
                  : "rgba(0,0,0,0.05)",
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' 
                    ? "rgba(255,255,255,0.2)" 
                    : "rgba(0,0,0,0.1)",
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleManualLogin} sx={{ mb: 3 }}>
            <TextField
              fullWidth
              name="username"
              label="Nombre de Usuario"
              value={formData.username}
              onChange={handleInputChange}
              disabled={loading}
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
              InputProps={{
                startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />
              }}
            />
            
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 50%, #2e7d32 100%)',
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #66bb6a 0%, #4caf50 50%, #388e3c 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.5)',
                },
                '&:disabled': {
                  background: 'rgba(76, 175, 80, 0.5)',
                }
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: 'white' }} />
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', px: 2 }}>
              O continuar con
            </Typography>
          </Divider>

          {/* Social Login Buttons */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {socialProviders.map((provider) => {
              const Icon = provider.icon;
              const isLoading = socialLoading === provider.name;
              
              return (
                <Button
                  key={provider.name}
                  variant="outlined"
                  onClick={() => handleSocialLogin(provider.name)}
                  disabled={!!socialLoading}
                  sx={{
                    py: 1.2,
                    borderRadius: 2,
                    borderColor: provider.color,
                    color: provider.color,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': {
                      borderColor: provider.color,
                      backgroundColor: `${provider.color}15`,
                      transform: 'translateY(-1px)',
                    },
                    '&:disabled': {
                      opacity: 0.5,
                    }
                  }}
                >
                  {isLoading ? (
                    <CircularProgress size={20} sx={{ color: provider.color }} />
                  ) : (
                    <Icon sx={{ fontSize: 20 }} />
                  )}
                  <Typography variant="body2" fontWeight={500}>
                    {isLoading ? 'Conectando...' : provider.name}
                  </Typography>
                </Button>
              );
            })}
          </Box>

          {/* Footer */}
          <Typography 
            variant="body2" 
            sx={{ 
              mt: 3, 
              textAlign: 'center', 
              color: 'text.secondary',
              lineHeight: 1.5 
            }}
          >
            Al iniciar sesión, aceptas nuestros términos de servicio y política de privacidad.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;