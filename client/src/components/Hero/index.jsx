import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
const Hero = ({ text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:912px)");
  const isTablet = useMediaQuery("(max-width:1200px)");
  return (
    <Typography
      variant="h1"
      sx={{
        width: "90%",
        margin: "1.5vh 0",
        padding: "1vh 0",
        border: `1px  solid ${theme.palette.primary[100]}`,
        borderRight: "none",
        borderLeft: "none",
        textAlign: "center",
        fontSize: isMobile ? "8vh" : "30vh",
        fontWeight: "500",
      }}
    >
      {text}
    </Typography>
  );
};

export default Hero;