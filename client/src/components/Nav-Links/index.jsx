import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  CategoryOutlined,
} from "@mui/icons-material";
import { setMode } from "../../state";
import { useDispatch } from "react-redux";
import DarkMode from "./DarkMode/DarkMode";
const navItems = [
  {
    text: "Blog",
  },
  {
    text: "Projects",
  },
  {
    text: "About",
  },
  {
    text: "Newsletter",
  },
];

const NavLinks = ({ active, setActive, nav }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <List
      sx={{
        display: nav ? "flex" : "flex",
        flexDirection: !nav && "column",
      }}
    >
      {navItems.map(({ text }) => {
        const lcText = text.toLowerCase();
        return (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(`/${lcText}`);
                setActive(lcText);
              }}
              sx={{
                fontWeight: "bold",
                backgroundColor:
                  active === lcText
                    ? theme.palette.secondary[100]
                    : "transparent",
                color:
                  active === lcText
                    ? theme.palette.primary[900]
                    : theme.palette.secondary[100],
              }}
            >
              <ListItemText primary={text} />
            
            </ListItemButton>
          </ListItem>
        );
      })}
      <ListItem>
        <>
          <DarkMode
            onClick={() =>
              dispatch(
                setMode(theme.palette.mode === "light" ? "dark" : "light")
              )
            }
            
          />
        </>
      </ListItem>
    </List>
  );
};

export default NavLinks;
