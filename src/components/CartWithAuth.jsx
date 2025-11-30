import React, { useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Cart from './Cart';
import Login from './Login';
import Checkout from '../pages/Checkout';
import { useCarrito } from "../contexts/CarritoContext";
const CartWithAuth = ({ 
  open, 
  onClose 
}) => {
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const { cartItems, increaseQty, decreaseQty, removeItem, clearCart } = useCarrito();
  const handlePurchaseClick = useCallback(() => {
    if (isAuthenticated()) {
      setShowCheckout(true);
    } else {
      setShowLogin(true);
    }
  }, [isAuthenticated]);
  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowCheckout(true);
  };
  const handleCheckoutClose = () => {
    setShowCheckout(false);
  };
  React.useEffect(() => {
    window.handlePurchase = handlePurchaseClick;
    return () => {
      delete window.handlePurchase;
    };
  }, [handlePurchaseClick]);
  return (
    <>
      <Cart
        open={open}
        onClose={onClose}
        items={cartItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
        clearCart={clearCart}
      />
      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showCheckout && (
        <Checkout 
          cartItems={cartItems}
          clearCart={clearCart}
          onClose={handleCheckoutClose}
        />
      )}
    </>
  );
};
export default CartWithAuth;