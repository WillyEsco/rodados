import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
export default function SidebarCart({ open, toggleCart, cart, removeFromCart, clearCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <Drawer anchor="right" open={open} onClose={toggleCart}>
      <Box sx={{ width: 320, p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">Carrito</Typography>
          <IconButton onClick={toggleCart}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {cart.length === 0 ? (
            <Typography variant="body2">El carrito está vacío</Typography>
          ) : (
            <List>
              {cart.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" color="error" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${item.name} x${item.quantity}`}
                    secondary={`$${item.price * item.quantity}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Total: ${total}</Typography>
        <Button
          variant="outlined"
          color="error"
          fullWidth
          sx={{ mt: 2 }}
          onClick={clearCart}
        >
          Vaciar carrito
        </Button>
      </Box>
    </Drawer>
  );
}
