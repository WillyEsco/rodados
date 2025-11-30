import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material/styles";
import brandImage from "../assets/image-5.png";
import mascotaModal from "../assets/images/mascota-modal.png";

const FooterContainer = styled(Box)(({ theme }) => ({
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #4a148c 0%, #7c4dff 100%)'
        : '#108e1c',
    color: "white",
    textAlign: "center",
    padding: theme.spacing(3, 0),
}));

const FooterContent = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
});

const Logo = styled("img")({
    width: "10%",
    minWidth: 80,
    maxWidth: 120,
});

const SocialIcons = styled(Box)({
    display: "flex",
    gap: 12,
    justifyContent: "center",
});

export default function Footer() {
    return (
        <FooterContainer component="footer">
            <FooterContent sx={{ gap: 1 }}>
                 <img
                src={brandImage}
                alt="Brand"
                style={{
                    height: 80,
                    marginRight: 16,
                    transition: "transform 0.2s",
                    cursor: "pointer"
                }}
                onMouseOver={e => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
            />
                {/* <Box sx={{ my: 0.2 }}>
                    <Logo src={mascotaModal} alt="Logo" style={{ width: "5%" }} />
                </Box> */}
                <SocialIcons sx={{ mb: 0.2 }}>
                    <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                    <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
                        <InstagramIcon fontSize="small" />
                    </IconButton>
                    <IconButton component="a" href="https://wa.me/" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
                        <WhatsAppIcon fontSize="small" />
                    </IconButton>
                    <IconButton component="a" href="https://telegram.org" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
                        <TelegramIcon fontSize="small" />
                    </IconButton>
                    <IconButton component="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" color="inherit" size="small">
                        <TwitterIcon fontSize="small" />
                    </IconButton>
                </SocialIcons>
                <Box sx={{ mt: 0.1 }}>
                    <Typography variant="body2" sx={{ lineHeight: 1 }}>
                        &copy; 2025 Rodados eShop.<br />
                        Todos los derechos reservados.
                    </Typography>
                </Box>
            </FooterContent>
        </FooterContainer>
    );
}
