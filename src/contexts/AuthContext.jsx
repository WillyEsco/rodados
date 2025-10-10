// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('authUser');
      }
    }
    setLoading(false);
  }, []);

  // Guardar usuario en localStorage cuando cambie
  useEffect(() => {
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('authUser');
    }
  }, [user]);

  const login = (userData) => {
    const userWithId = {
      ...userData,
      id: Date.now().toString(), // ID único basado en timestamp
      loginTime: new Date().toISOString(),
      provider: userData.provider || 'manual'
    };
    console.log('🔑 [AuthContext] User logged in:', userWithId.username, 'Provider:', userWithId.provider);
    setUser(userWithId);
    return userWithId;
  };

  const logout = () => {
    console.log('🚪 [AuthContext] Logging out user:', user?.username);
    setUser(null);
    localStorage.removeItem('authUser');
    console.log('✅ [AuthContext] User logged out successfully');
  };

  const isAuthenticated = () => {
    return !!user;
  };

  // Simulación de login con providers sociales
  const loginWithProvider = async (provider) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generar usuarios realistas según el provider
        const getProviderData = (providerName) => {
          // 🔑 Verificar si ya existe un usuario para este provider en localStorage
          const savedProviderKey = `auth_${providerName.toLowerCase()}_user`;
          const savedProviderUser = localStorage.getItem(savedProviderKey);
          
          if (savedProviderUser) {
            try {
              const userData = JSON.parse(savedProviderUser);
              console.log(`🔄 [AuthContext] Usuario existente para ${providerName}:`, userData.username);
              return userData;
            } catch {
              console.warn(`⚠️ [AuthContext] Error parsing saved user for ${providerName}, generating new one`);
              localStorage.removeItem(savedProviderKey);
            }
          }
          
          console.log(`🆕 [AuthContext] Creando nuevo usuario para ${providerName}`);
          const timestamp = Date.now().toString().slice(-4);
          
          // Arrays de nombres realistas
          const usuarios = {
            google: [
              { nombre: 'Juan', apellido: 'Pérez', email: 'gmail.com' },
              { nombre: 'Laura', apellido: 'Martínez', email: 'gmail.com' },
              { nombre: 'Diego', apellido: 'Silva', email: 'gmail.com' },
              { nombre: 'Camila', apellido: 'Torres', email: 'gmail.com' },
              { nombre: 'Sebastián', apellido: 'Ruiz', email: 'gmail.com' }
            ],
            facebook: [
              { nombre: 'María', apellido: 'González', email: 'outlook.com' },
              { nombre: 'Alejandro', apellido: 'Fernández', email: 'hotmail.com' },
              { nombre: 'Valentina', apellido: 'López', email: 'outlook.com' },
              { nombre: 'Mateo', apellido: 'Ramírez', email: 'hotmail.com' },
              { nombre: 'Sofia', apellido: 'Castro', email: 'outlook.com' }
            ],
            instagram: [
              { nombre: 'Carlos', apellido: 'Rodríguez', email: 'hotmail.com' },
              { nombre: 'Isabella', apellido: 'Morales', email: 'gmail.com' },
              { nombre: 'Nicolás', apellido: 'Herrera', email: 'yahoo.com' },
              { nombre: 'Antonella', apellido: 'Vargas', email: 'hotmail.com' },
              { nombre: 'Emilio', apellido: 'Mendoza', email: 'gmail.com' }
            ],
            twitter: [
              { nombre: 'Ana', apellido: 'Martínez', email: 'yahoo.com' },
              { nombre: 'Rodrigo', apellido: 'Jiménez', email: 'gmail.com' },
              { nombre: 'Luciana', apellido: 'Ortega', email: 'yahoo.com' },
              { nombre: 'Gabriel', apellido: 'Delgado', email: 'outlook.com' },
              { nombre: 'Renata', apellido: 'Vega', email: 'yahoo.com' }
            ]
          };

          // Seleccionar usuario random del provider (solo primera vez)
          const usuariosProvider = usuarios[providerName.toLowerCase()] || [
            { nombre: 'Usuario', apellido: providerName, email: `${providerName}.com` }
          ];
          
          const usuarioRandom = usuariosProvider[Math.floor(Math.random() * usuariosProvider.length)];
          const nombreCompleto = `${usuarioRandom.nombre} ${usuarioRandom.apellido}`;
          const emailUsuario = `${usuarioRandom.nombre.toLowerCase()}.${usuarioRandom.apellido.toLowerCase()}${timestamp}@${usuarioRandom.email}`;

          const newUserData = {
            username: nombreCompleto,
            email: emailUsuario,
            domain: usuarioRandom.email
          };
          
          // 💾 Guardar el usuario para próximas veces
          localStorage.setItem(savedProviderKey, JSON.stringify(newUserData));
          console.log(`💾 [AuthContext] Usuario guardado para ${providerName}:`, newUserData.username);
          
          return newUserData;
        };

        const providerData = getProviderData(provider);
        const mockUser = {
          username: providerData.username,
          email: providerData.email,
          provider: provider,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(providerData.username)}&background=4CAF50&color=fff`
        };
        const loggedUser = login(mockUser);
        resolve(loggedUser);
      }, 1500); // Simular delay de autenticación
    });
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    loginWithProvider
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};