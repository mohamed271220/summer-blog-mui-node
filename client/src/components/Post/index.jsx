import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "./Image.png";
import { ArrowRightAltSharp } from "@mui/icons-material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router-dom";
const Post = ({ data, isMobile, size }) => {
  const theme = useTheme();

  const tagColors = {
    // textColor , backgroundColor
    0: ["#32a852", "#c8e0cd"],
    1: ["#0400d9", "#dec5c7"],
    2: ["#ff0026", "#c5c7de"],
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: size === "small" || size === "large" ? "row" : "column",
        width: isMobile ? "40vh" : "fit-content",

        gap: "2vh",
      }}
    >
      <Link to={`/blog/${data?._id}`}>
        <img
          src={`http://localhost:3001/assets/${data?.image}`}
          alt="logo"
          style={{
            width:
              size === "medium"
                ? "95vh"
                : size === "small"
                ? "30vh"
                : size === "large"
                ? "80vh"
                : size === "large-X"
                ? "156vh"
                : size === "mobile"
                ? "40vh"
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
                ? "30vh"
                : "100px",
          }}
        />
      </Link>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
          width: size === "small" ? "30vh" : "fit-content",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.8vh",
            color: "#6941C6",
          }}
        >
          {data?.createdAt}
        </Typography>
        <Link to={`/blog/${data?._id}`}>
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
                maxWidth: "60ch",
                color: theme.palette.primary[100],
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "wrap",
              }}
            >
              {data?.title}
            </Typography>
            <TrendingUpIcon
              sx={{ fontSize: "2.5vh", color: theme.palette.primary[100] }}
            />
          </Box>
        </Link>

        <Typography
          variant="p"
          sx={{
            fontSize: "2vh",
            color: theme.palette.grey[500],
            maxWidth: "95vh",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace:
              isMobile ||
              size === "large" ||
              size === "large-X" ||
              size === "medium"
                ? "wrap"
                : "nowrap",
          }}
        >
          {data?.description}
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
          {data?.tags.map((tag, index) => (
            <Box
              sx={{
                fontSize: "1.4vh",
                fontWeight: "600",
                color: tagColors[index][0],
                backgroundColor: tagColors[index][1],
                opacity: "0.75",
                padding: "0 1vh",
                borderRadius: "12px",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
