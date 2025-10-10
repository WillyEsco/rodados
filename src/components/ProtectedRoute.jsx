import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';

const ProtectedRoute = ({ children, fallback }) => {
  const { isAuthenticated, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (loading) {
    return fallback || null;
  }
  if (isAuthenticated()) {
    return children;
  }

  if (showLogin) {
    return (
      <>
        {children}
        <Login 
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => setShowLogin(false)}
        />
      </>
    );
  }

  const requireAuth = () => {
    setShowLogin(true);
  };

  return React.cloneElement(children, { requireAuth });
};

export default ProtectedRoute;