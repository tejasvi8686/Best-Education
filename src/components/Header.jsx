import React from "react";
import { AppBar, Toolbar, Typography, Box, SvgIcon } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Separator = () => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    width="1"
    height="17"
    viewBox="0 0 1 17"
    fill="none"
  >
    <path d="M0.5 0.375V16.875" stroke="white" />
  </SvgIcon>
);

const Header = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "1",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <Typography variant="p" sx={{ marginRight: 1 }}>
              FAQ
            </Typography>
            <Separator />
            <Typography variant="p" sx={{ marginRight: 1 }}>
              Help Desk
            </Typography>
            <Separator />
            <Typography variant="p" sx={{ marginLeft: 1 }}>
              Login
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginRight: 2 }}>
            <FacebookIcon sx={{ marginRight: 3 }} />
            <YouTubeIcon sx={{ marginRight: 3 }} />
            <InstagramIcon sx={{ marginRight: 3 }} />
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            background: "#FFF",
            height: "80px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box sx={{ color: "black", }}>
            <CallIcon />
            <Typography variant="p">CALL US TODAY </Typography>
            <Typography variant="p">+91 9999888877</Typography>
          </Box>

          <Box sx={{ color: "black" }}>
            <ScheduleIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
