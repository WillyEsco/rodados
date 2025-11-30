import { createTheme } from "@mui/material/styles";
export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
        light: mode === "light" ? "#42a5f5" : "#bbdefb",
        dark: mode === "light" ? "#1565c0" : "#1976d2",
        contrastText: mode === "light" ? "#ffffff" : "#000000",
      },
      secondary: {
        main: mode === "light" ? "#4CAF50" : "#81C784",
        light: mode === "light" ? "#81C784" : "#a5d6a7",
        dark: mode === "light" ? "#388E3C" : "#4CAF50",
      },
      background: {
        default: mode === "light" ? "#f8f9fa" : "#0a0a0a",
        paper: mode === "light" ? "#ffffff" : "#1c1c1c",
      },
      text: {
        primary: mode === "light" ? "#1a1a1a" : "#ffffff",
        secondary: mode === "light" ? "#666666" : "#b0b0b0",
      },
      divider: mode === "light" ? "#e0e0e0" : "#333333",
      action: {
        hover: mode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.08)",
        selected: mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.12)",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: mode === "light" 
              ? "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"
              : "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            minHeight: "100vh",
            transition: "background 0.3s ease",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: mode === "light" 
              ? "0 4px 12px rgba(0, 0, 0, 0.05)"
              : "0 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease, background-color 0.3s ease",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: "8px 16px",
            transition: "all 0.3s ease",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: mode === "light"
              ? "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
              : "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
          },
        },
      },
    },
  });
