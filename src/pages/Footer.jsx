import React from "react";
import logoImage from "./vendorimage/BiZhar Heritage logo Social Media.png";

import {
  Box,
  Typography,
  IconButton,
  Stack
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X"; // for Twitter (X)

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconStyle = (hoverColor) => ({
  mx: 0.7,
  backgroundColor: "#fff",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  color: "#000",
  "&:hover": {
    backgroundColor: hoverColor,
    color: "#fff",
    transform: "translateY(-3px)",
  },
  transition: "0.3s ease",
});

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
        py: 4,
        px: { xs: 2, md: 6 },
        borderTop: "1px solid #e0e0e0"
      }}
    >
      {/* Row Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3
        }}
      >
        {/* LEFT - Logo */}
        <Box
          component="img"
          src={logoImage}
          alt="logo"
          sx={{
            width: 140,
            objectFit: "contain",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)"
            }
          }}
        />

        {/* RIGHT - Contact + Social */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-end" },
            gap: 1.5
          }}
        >
          {/* Contact */}
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" justifyContent="center">
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CallIcon sx={{ fontSize: 16, color: "#555" }} />
              <Typography sx={{ fontSize: 13 }}>+91 92884 04060</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 16, color: "#555" }} />
              <Typography sx={{ fontSize: 13 }}>
                info@bizharheritage.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LanguageIcon sx={{ fontSize: 16, color: "#555" }} />
              <Typography sx={{ fontSize: 13 }}>
                www.bizharheritage.com
              </Typography>
            </Box>
          </Stack>

          {/* Social Icons */}
          <Box display="flex" justifyContent="center" alignItems="center">
      
      {/* Facebook */}
      <IconButton
        href="https://www.facebook.com/people/Bizhar-Heritag-E/61586597638647/"
        target="_blank"
        sx={iconStyle("#1877F2")}
      >
        <FacebookIcon fontSize="small" />
      </IconButton>

      {/* Instagram */}
      <IconButton
        href="https://www.instagram.com/bizharheritage/"
        target="_blank"
        sx={iconStyle("#E1306C")}
      >
        <InstagramIcon fontSize="small" />
      </IconButton>

      {/* X (Twitter) */}
      <IconButton
        href="https://x.com/BiZharheritage"
        target="_blank"
        sx={iconStyle("#000")}
      >
        <XIcon fontSize="small" />
      </IconButton>

      {/* LinkedIn */}
      <IconButton
        href="https://www.linkedin.com/company/bizhar-heritage/posts/?feedView=all"
        target="_blank"
        sx={iconStyle("#0A66C2")}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>

      {/* YouTube */}
      <IconButton
        href="https://www.youtube.com/@bizharheritage"
        target="_blank"
        sx={iconStyle("#FF0000")}
      >
        <YouTubeIcon fontSize="small" />
      </IconButton>

    </Box>
        </Box>
      </Box>

      {/* Bottom */}
      <Typography
        sx={{
          mt: 3,
          textAlign: "center",
          fontSize: 12,
          color: "#777"
        }}
      >
        © {currentYear} Connecting Handicraft Artists Across India. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;