import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Modal, 
  IconButton,
  Chip,
  Stack,
  useTheme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import mascotaImage from "../assets/images/mascota.png";
import mascota2Image from "../assets/images/mascota2.png";
import logotipoTop from "../assets/logotipo-top.png";
import coniImage from "../assets/images/coni.png";
import teamImage from "../assets/team.jpg";
import officeImage from "../assets/office.jpg";
export default function About() {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAlt, setSelectedAlt] = useState("");
  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage(imageSrc);
    setSelectedAlt(imageAlt);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage("");
    setSelectedAlt("");
  };
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #1a0d2e 0%, #2d1b3e 30%, #3e1a4e 70%, #4a148c 100%)'
        : 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 30%, #ce93d8 70%, #ba68c8 100%)',
      py: { xs: 4, md: 8 }
    }}>
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            left: { xs: '5%', md: '10%' },
            top: '20%',
            animation: 'floatLeft 4s ease-in-out infinite',
            zIndex: 2,
            display: { xs: 'none', md: 'block' }
          }}>
            <img
              src={mascotaImage}
              alt="Mascota 1"
              style={{
                width: 120,
                height: 'auto',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
                transform: 'rotate(-10deg)'
              }}
            />
          </Box>
          <Box sx={{
            position: 'absolute',
            right: { xs: '5%', md: '10%' },
            top: '30%',
            animation: 'floatRight 3.5s ease-in-out infinite',
            zIndex: 2,
            display: { xs: 'none', md: 'block' }
          }}>
            <img
              src={mascota2Image}
              alt="Mascota 2"
              style={{
                width: 100,
                height: 'auto',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
                transform: 'rotate(15deg)'
              }}
            />
          </Box>
          <Box sx={{ mb: 4, position: 'relative', zIndex: 3 }}>
            <img
              src={logotipoTop}
              alt="Rodados eShop"
              style={{
                width: '100%',
                maxWidth: 450,
                height: 'auto',
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
                animation: 'logoGlow 3s ease-in-out infinite'
              }}
            />
          </Box>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Chip 
              icon={<FavoriteIcon sx={{ color: '#ff6b9d' }} />}
              label="Con amor desde 2020"
              sx={{ 
                background: 'linear-gradient(45deg, #ff6b9d, #c44569)',
                color: 'white',
                fontWeight: 'bold',
                px: 2,
                animation: 'pulse 2s infinite'
              }}
            />
            <Chip 
              icon={<StarIcon sx={{ color: '#ffd700' }} />}
              label="5★ en satisfacción"
              sx={{ 
                background: 'linear-gradient(45deg, #ffd700, #f39c12)',
                color: 'white',
                fontWeight: 'bold',
                px: 2
              }}
            />
            <Chip 
              icon={<GroupIcon sx={{ color: '#4CAF50' }} />}
              label="Miles de clientes felices"
              sx={{ 
                background: 'linear-gradient(45deg, #4CAF50, #27ae60)',
                color: 'white',
                fontWeight: 'bold',
                px: 2
              }}
            />
          </Stack>
          <Typography
            variant="h5"
            align="center"
            sx={{ 
              maxWidth: "900px", 
              mx: "auto", 
              color: theme.palette.mode === 'dark' ? '#e1bee7' : '#4a148c',
              fontWeight: 500,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6,
              mb: 2
            }}
          >
            🌟 Tu destino favorito para los mejores rodados y accesorios 🌟
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ 
              maxWidth: "800px", 
              mx: "auto", 
              color: theme.palette.mode === 'dark' ? '#f3e5f5' : '#6a1b9a',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.7,
              textAlign: { xs: 'justify', md: 'center' },
              px: { xs: 2, md: 0 }
            }}
          >
            Somos más que una tienda, somos tu compañero de aventuras sobre ruedas. 
            Con pasión, dedicación y mucho cariño, te ofrecemos productos de calidad 
            excepcional para que cada viaje sea una experiencia inolvidable.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 'bold',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(45deg, #e1bee7, #ce93d8, #ba68c8)'
              : 'linear-gradient(45deg, #4a148c, #7b1fa2, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Conoce Nuestra Historia
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{
              maxWidth: 450,
              width: '100%',
              background: theme.palette.mode === 'dark'
                ? 'rgba(30, 30, 30, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              border: theme.palette.mode === 'dark'
                ? '2px solid rgba(255, 255, 255, 0.1)'
                : '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 15px 35px rgba(255, 255, 255, 0.1)'
                : '0 15px 35px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-10px) scale(1.02)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 25px 50px rgba(225, 190, 231, 0.3)'
                  : '0 25px 50px rgba(138, 43, 226, 0.2)'
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 15,
                left: 15,
                zIndex: 3
              }}>
                <Chip
                  icon={<GroupIcon sx={{ color: 'white' }} />}
                  label="Nuestro Team"
                  sx={{
                    background: 'linear-gradient(45deg, #ff6b9d, #c44569)',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              </Box>
              <CardMedia
                component="img"
                height="300"
                image={teamImage}
                alt="Nuestro equipo"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  filter: 'brightness(1.1) saturate(1.2)',
                  "&:hover": {
                    transform: "scale(1.1)",
                    filter: 'brightness(1.2) saturate(1.3)'
                  }
                }}
                onClick={() => handleImageClick(teamImage, "Nuestro equipo")}
              />
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  fontWeight: 'bold', 
                  color: theme.palette.mode === 'dark' ? '#e1bee7' : '#4a148c',
                  mb: 2
                }}>
                  💫 Nuestro Equipo
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: theme.palette.mode === 'dark' ? '#f3e5f5' : '#6a1b9a',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  textAlign: 'justify'
                }}>
                  Un grupo de profesionales apasionados que vive y respira sobre ruedas. 
                  Cada miembro de nuestro equipo está comprometido con brindarte 
                  la mejor experiencia posible.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{
              maxWidth: 450,
              width: '100%',
              background: theme.palette.mode === 'dark'
                ? 'rgba(30, 30, 30, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '25px',
              border: theme.palette.mode === 'dark'
                ? '2px solid rgba(255, 255, 255, 0.1)'
                : '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 15px 35px rgba(255, 255, 255, 0.1)'
                : '0 15px 35px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-10px) scale(1.02)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 25px 50px rgba(225, 190, 231, 0.3)'
                  : '0 25px 50px rgba(138, 43, 226, 0.2)'
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 15,
                left: 15,
                zIndex: 3
              }}>
                <Chip
                  icon={<StorefrontIcon sx={{ color: 'white' }} />}
                  label="Nuestro Espacio"
                  sx={{
                    background: 'linear-gradient(45deg, #4CAF50, #27ae60)',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              </Box>
              <CardMedia
                component="img"
                height="300"
                image={officeImage}
                alt="Nuestra tienda"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  filter: 'brightness(1.1) saturate(1.2)',
                  "&:hover": {
                    transform: "scale(1.1)",
                    filter: 'brightness(1.2) saturate(1.3)'
                  }
                }}
                onClick={() => handleImageClick(officeImage, "Nuestra tienda")}
              />
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  fontWeight: 'bold', 
                  color: theme.palette.mode === 'dark' ? '#e1bee7' : '#4a148c',
                  mb: 2
                }}>
                  🏪 Nuestro Espacio
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: theme.palette.mode === 'dark' ? '#f3e5f5' : '#6a1b9a',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  textAlign: 'justify'
                }}>
                  Un lugar mágico donde cada detalle está pensado para inspirarte. 
                  Ven a visitarnos y descubre un mundo de posibilidades sobre ruedas 
                  en un ambiente acogedor y lleno de energía.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{
          textAlign: 'center',
          mt: 6,
          display: { xs: 'block', md: 'none' }
        }}>
          <img
            src={coniImage}
            alt="Mascota Coni"
            style={{
              width: 150,
              height: 'auto',
              animation: 'bounce 2s infinite',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
            }}
          />
        </Box>
      </Container>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none"
          }}
          onClick={handleCloseModal} 
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              bgcolor: "#ff1744", 
              color: "white",
              border: "2px solid white", 
              "&:hover": {
                bgcolor: "#d50000", 
                transform: "scale(1.1)" 
              },
              zIndex: 1,
              transition: "all 0.3s ease" 
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt={selectedAlt}
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
            }}
            onClick={(e) => e.stopPropagation()} 
          />
        </Box>
      </Modal>
      <style jsx global>{`
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        @keyframes logoGlow {
          0%, 100% { 
            filter: drop-shadow(0 10px 25px rgba(0,0,0,0.15));
            transform: scale(1);
          }
          50% { 
            filter: drop-shadow(0 15px 35px rgba(138, 43, 226, 0.3));
            transform: scale(1.02);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </Box>
  );
}
