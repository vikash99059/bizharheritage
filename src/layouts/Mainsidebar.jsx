import React, { useState } from "react";
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import {
    Home as HomeIcon,
    ReceiptLong as ReceiptIcon,
} from "@mui/icons-material";

// 🔹 Menu Items Array
const menuItems = [
    { text: "Home", icon: <HomeIcon />, route: "/" },
    { text: "Pooja Telecast", icon: <HomeIcon />, route: "/telecast" },
    { text: "Donations Module", icon: <HomeIcon />, route: "/donations" },
    { text: "News & Announcements", icon: <HomeIcon />, route: "/news" },
    { text: "Events & Push Notifications", icon: <HomeIcon />, route: "/events" },
    { text: "Booking Services", icon: <HomeIcon />, route: "/bookings" },
    { text: "User Management", icon: <HomeIcon />, route: "/" },
    { text: "Settings", icon: <HomeIcon />, route: "/" },
];

const Mainsidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {/* 🟢 Toggle Menu Button - FIXED POSITION */}
            <Box
                sx={{
                    position: "fixed",
                    top: isMobile ? 16 : 88,
                    left: isMobile ? 16 : 70,
                    zIndex: 1500,
                }}
                className="side-data-bar"
            >
                <IconButton onClick={() => setOpen(!open)} sx={{ color: "#5d9cc6ff" }}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* 🟣 Sidebar Drawer */}
            <Drawer
                anchor="left"
                variant="temporary"
                open={open}
                onClose={() => setOpen(false)}
                ModalProps={{
                    BackdropProps: { invisible: true }, // ✅ NO OVERLAY
                }}
                PaperProps={{
                    sx: {
                        marginTop: isMobile ? "56px" : "80px",
                        height: isMobile ? "calc(100vh - 56px)" : "calc(100vh - 80px)",
                        width: 200,
                        backgroundColor: "transparent",
                        boxShadow: "none",
                    },
                }}
            >
                <List sx={{
                    marginTop: isMobile ? "16px" : "52px",
                    padding: "0 5px",
                    background: "transparent",
                }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{
                                    background: location.pathname === item.route ? "#5d9cc6ff" : "#5d9cc6ff",
                                    borderRadius: "20px",
                                    marginBottom: "10px",
                                    color: "#fff",
                                    "&:hover": { background: "#389ae4ff" },
                                }}
                                onClick={() => {
                                    navigate(item.route);
                                    setOpen(false);
                                }}
                            >
                                <ListItemIcon sx={{ color: "#fff", minWidth: "27px" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        style: { fontSize: "12px", fontWeight: "bold" },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Mainsidebar;