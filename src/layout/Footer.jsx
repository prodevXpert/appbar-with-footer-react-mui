import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import {
  EmailOutlined,
  FacebookRounded,
  Google,
  Instagram,
  LocationOn,
  PhoneAndroidOutlined,
  X,
} from "@mui/icons-material";

function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={23} md={2} lg={2}>
        <Box
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ gap: 2 }} // added gap for spacing
        >
          <div
            style={{
              marginLeft: "40%",
            }}
          >
            <Typography variant="h6" sx={{ color: "#7EC8E3", marginBottom: 2 }}>
              Contact Us
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <LocationOn
                sx={{ marginRight: 1 }}
                color="primary"
                fontSize="medium"
              />
              <a
                href="https://goo.gl/maps/7F3e1Y1qY6m"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                Address
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <PhoneAndroidOutlined
                sx={{ marginRight: 1 }}
                color="primary"
                fontSize="medium"
              />
              <a
                href="tel:+1234567890"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                +1234567890
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <EmailOutlined
                sx={{ marginRight: 1 }}
                color="primary"
                fontSize="medium"
              />
              <a
                href="mailto:dritare.ch@driatrech.com"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                dritare.ch@driatrech.com
              </a>
            </Typography>
            <br />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={23} md={2} lg={2}>
        {/* Add Quick links of the app bar, Home, Windows, Entrance Door, FAQs, Contact Us, Get Started */}
        <Box
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ gap: 2 }} // added gap for spacing
        >
          <Typography variant="h6" sx={{ color: "#7EC8E3", marginBottom: 2 }}>
            Quick Links
          </Typography>
          <div
            style={{
              marginLeft: "40%",
            }}
          >
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Home
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Windows
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Entrance Door
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                FAQs
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Contact Us
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Get Started
              </a>
            </Typography>
            <br />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={23} md={2} lg={2}>
        {/* show Customer Service like Installtion Services, Warranty Information, Return Policy, Privacy Policy, Terms & conditions*/}
        <Box
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ gap: 2 }} // added gap for spacing
        >
          <Typography variant="h6" sx={{ color: "#7EC8E3", marginBottom: 2 }}>
            Customer Service
          </Typography>
          <div
            style={{
              marginLeft: "30%",
            }}
          >
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Installation Services
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Warranty Information
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Return Policy
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Privacy Policy
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Terms & conditions
              </a>
            </Typography>
            <br />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={23} md={2} lg={2}>
        {/* Our Social Media */}
        <Box
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ gap: 2 }} // added gap for spacing
        >
          <Typography variant="h6" sx={{ color: "#7EC8E3", marginBottom: 2 }}>
            Our Social Media
          </Typography>
          <div
            style={{
              marginLeft: "30%",
            }}
          >
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <FacebookRounded
                sx={{ marginRight: 1 }}
                color="primary"
                fontSize="medium"
              />
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Facebook
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <Google
                sx={{ marginRight: 1 }}
                color="primary"
                fontSize="medium"
              />
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Google
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <X sx={{ marginRight: 1 }} color="primary" fontSize="medium" />
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Twitter
              </a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "#FFFFFF" }}
            >
              <Instagram
                sx={{ marginRight: 1 }}
                color="primary"
                fontSize="medium"
              />
              <a href="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Instagram
              </a>
            </Typography>
            <br />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={23} md={2} lg={2}>
        {/* Join a Newsletter sections Textfield to get email input and a button to send Newletter*/}
        <Box
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ gap: 2 }} // added gap for spacing
        >
          <Typography variant="h6" sx={{ color: "#7EC8E3", marginBottom: 2 }}>
            Join a Newsletter
          </Typography>
          <div
            style={{
              marginLeft: "20%",
            }}
          >
            <br />
            <TextField
              type="email"
              label="Email"
              InputProps={{ disableUnderline: true, spellCheck: false }}
              InputLabelProps={{ shrink: false }}
              placeholder="Enter your email"
              style={{
                background: "#FFFFFF",
                marginTop: "20%",
                borderRadius: "5px",
              }}
              fullWidth
            />
            <br />

            <Button
              style={{
                borderRadius: "5px",
                border: "none",
                background: "#7EC8E3",
                color: "#FFFFFF",
                marginTop: "10%",
              }}
              size="large"
              fullWidth
            >
              Send
            </Button>
            <br />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
