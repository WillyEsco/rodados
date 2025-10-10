// src/components/DebugAuth.jsx - Componente temporal para debug
import React from 'react';
import { Box, Typography, Button, Card, Chip } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const DebugAuth = () => {
  const { user, isAuthenticated, logout } = useAuth();

  // Solo mostrar en desarrollo
  if (import.meta.env.MODE !== 'development') return null;

  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleClearProviderUsers = () => {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('auth_') && key.includes('_user')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
    alert(`Eliminados ${keysToRemove.length} usuarios de providers`);
  };

  return (
    <Card 
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        p: 2,
        minWidth: 250,
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: 'white',
        zIndex: 10000,
        fontSize: '0.8rem'
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem' }}>
        🔍 Debug Auth
      </Typography>
      
      <Box sx={{ mb: 1 }}>
        <Chip 
          label={isAuthenticated() ? "Autenticado" : "No autenticado"} 
          color={isAuthenticated() ? "success" : "error"}
          size="small"
          sx={{ mb: 1 }}
        />
      </Box>

      {user && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">👤 Usuario: {user.username}</Typography>
          <Typography variant="body2">📧 Email: {user.email}</Typography>
          <Typography variant="body2">🔗 Provider: {user.provider}</Typography>
          <Typography variant="body2">🕐 Login: {new Date(user.loginTime).toLocaleTimeString()}</Typography>
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
        {isAuthenticated() && (
          <Button 
            size="small" 
            variant="outlined" 
            color="error"
            onClick={logout}
          >
            Logout
          </Button>
        )}
        <Button 
          size="small" 
          variant="outlined" 
          onClick={handleClearProviderUsers}
          color="warning"
        >
          Reset Providers
        </Button>
        <Button 
          size="small" 
          variant="outlined" 
          onClick={handleClearLocalStorage}
        >
          Clear All Storage
        </Button>
      </Box>

      <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
        LocalStorage: {localStorage.getItem('authUser') ? '✅' : '❌'}
      </Typography>
    </Card>
  );
};

export default DebugAuth;