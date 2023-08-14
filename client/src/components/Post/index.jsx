import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "./Image.png";
import { ArrowRightAltSharp } from "@mui/icons-material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const Post = ({ isMobile, size }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: size === "small" || size === "large" ? "row" : "column",
        width: isMobile ? "50vh" : "fit-content",
        gap: "2vh",
      }}
    >
      <img
        src={Image}
        alt="logo"
        style={{
          width:
            size === "medium"
              ? "95vh"
              : size === "small"
              ? "40vh"
              : size === "large"
              ? "80vh"
              : size === "large-X"
              ? "156vh"
              : size === "mobile"
              ? "50vh"
              : "100px",
          height:
            size === "medium"
              ? "30vh"
              : size === "small"
              ? "26vh"
              : size === "large"
              ? "30vh"
              : size === "large-X"
              ? "50vh"
              : size === "mobile"
              ? "40vh"
              : "100px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.8vh",
            color: "#6941C6",
          }}
        >
          {" "}
          Sunday , 1 Jan 2023
        </Typography>
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: "2.5vh",
            }}
          >
            UX review presentations
          </Typography>
          <TrendingUpIcon sx={{ fontSize: "2.5vh" }} />
        </Box>
        <Typography
          variant="p"
          sx={{
            fontSize: "2vh",
            color: theme.palette.grey[500],
          }}
        >
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.7vh",
            flexWrap: "wrap",
          }}
        >
          {/* some random color picker or backend color asigning */}
          <Box
            sx={{
              fontSize: "1.4vh",
              fontWeight:"600",
              color: "green",
              backgroundColor: "white",
              opacity: "0.75",
              padding: "0 1vh",
              borderRadius: "12px",
            }}
          >
            programming
          </Box>
          <Box
            sx={{
              fontSize: "1.4vh",
              fontWeight:"600",
              color: "green",
              backgroundColor: "white",
              opacity: "0.75",
              padding: "0 1vh",
              borderRadius: "12px",
            }}
          >
            programming
          </Box>
          <Box
            sx={{
              fontSize: "1.4vh",
              fontWeight:"600",
              color: "green",
              backgroundColor: "white",
              opacity: "0.75",
              padding: "0 1vh",
              borderRadius: "12px",
            }}
          >
            programming
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
