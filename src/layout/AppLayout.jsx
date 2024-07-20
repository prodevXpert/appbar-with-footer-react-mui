import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Logo } from "../images";

export default function AppLayout() {
  const navigate = useNavigate();

  const menuItems = [
    "Window",
    "Entrance door",
    "Partitions",
    "Renovation",
    "New Project",
    "Contact Us"
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: "#FFFFFF",
          boxShadow: "none",
          color: "black",
          borderRadius: "15px",
          border: "1px solid #00000040",
          height: "80px",
          margin: "20px",
          maxWidth: "calc(100% - 40px)", // Ensure the AppBar stays within the viewport
        }}
      >
        <Toolbar>
          <img src={Logo} alt="Dritare.ch" style={{ width: "200px" }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: 2,
              flexWrap: "wrap", // Ensure menu items wrap within the viewport
            }}
          >
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="h5"
                component="div"
                fontWeight="bold"
                sx={{
                  cursor: "pointer",
                  fontFamily: "revert",
                  color: "#7D7973",
                  padding: "10px 20px",
                  "&:hover": {
                    color: "#0050B7",
                    borderBottom: "2px solid #0050B7",
                    borderRadius: "5px",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            sx={{
              background: "#0050B7",
              color: "#FFFFFF",
              borderRadius: "5px",
              textTransform: "none",
            }}
            size="large"
            onClick={() => navigate("/request-quote")}
          >
            Request Quote
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Fill remaining vertical space
          overflowY: "auto", // Allow scrolling within main content
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Box>
      <footer
        style={{
          backgroundColor: "#252422",
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Footer />
      </footer>
    </Box>
  );
}
