import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Post from "../../components/Post/index";
import Hero from "../../components/Hero";
const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Hero text={"PROJECTS"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isTablet && "center",
          justifyContent: isTablet && "center",
          
          width: "90%",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "4vh",
            padding: " 2vh 0",
          }}
        >
          All posts.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            gap: "3vh",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            alignItems: isTablet && "center",
            justifyContent: isTablet && "center",
          }}
        >
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />

          <Post
            size={isTablet ? "mobile" : "large-X"}
            isMobile={isTablet}
            sx={{
              width: "100%",
            }}
          />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: "100%",
            width: "1px",
            backgroundColor: "white",
          }}
        />
       
      </Box>
    </Box>
  );
};

export default Projects;
