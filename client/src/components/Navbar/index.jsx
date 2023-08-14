import React, { useContext, useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";
import FlexBetween from "../FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../../state";
import { useTheme } from "@emotion/react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import NavLinks from "../Nav-Links";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: isNonMobile ? "space-between" : "",
        }}
      >
        {/* left-side */}
        {isNonMobile && <FlexBetween>Mohamed Magdy</FlexBetween>}
        {/* right-side */}
        <FlexBetween>
          {!isNonMobile && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
          )}

          {isNonMobile && (
            <NavLinks nav setActive={setActive} active={active} />
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
