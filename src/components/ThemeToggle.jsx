import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "../hooks/useThemeMode";

export default function ThemeToggle({ size = "medium", color = "inherit" }) {
  const { mode, toggleMode } = useThemeMode();
  
  return (
    <Tooltip title={mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
      <IconButton 
        color={color}
        onClick={toggleMode}
        size={size}
        sx={{
          transition: "all 0.3s ease",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: color === "inherit" 
              ? "rgba(255, 255, 255, 0.15)" 
              : mode === "light" 
                ? "rgba(0, 0, 0, 0.04)" 
                : "rgba(255, 255, 255, 0.08)",
            transform: "rotate(180deg) scale(1.1)",
          },
        }}
      >
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          transition: "transform 0.3s ease" 
        }}>
          {mode === "dark" ? (
            <Brightness7Icon sx={{ 
              fontSize: size === "small" ? 20 : 24,
              color: "#ffd700"
            }} />
          ) : (
            <Brightness4Icon sx={{ 
              fontSize: size === "small" ? 20 : 24,
              color: color === "inherit" && size !== "small" ? "#ffffff" : "#1976d2"
            }} />
          )}
        </Box>
      </IconButton>
    </Tooltip>
  );
}
