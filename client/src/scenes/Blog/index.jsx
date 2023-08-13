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
const Blog = () => {
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
      <Hero text={"THE BLOG"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isTablet && "center",
          justifyContent: isTablet && "center",
          width: "90%",
          gap: "1rem",
          margin: "1rem 0 ",
        }}
      >
        <Typography
          sx={{
            fontSize: "4vh",
            padding: " 2vh 0",
          }}
        >
          Recent blog posts
        </Typography>
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              gap: "1rem",
            }}
          >
            <Post isMobile size={"mobile"} />
            <Post isMobile size={"mobile"} />
            <Post isMobile size={"mobile"} />
          </Box>
        ) : isTablet ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              gap: "1rem",
            }}
          >
            <Post size={"large"} />
            <Post size={"large"} />
            <Post size={"large"} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              gap: "1rem",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Post
              size={"medium"}
              sx={{
                width: "75vh",
                // flex: 6,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                gap: "1rem",
              }}
            >
              <Post size={"small"} />
              <Post size={"small"} />
            </Box>
            <Post size={"large"} />
          </Box>
        )}
      </Box>
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
            gap: "2.5rem",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            alignItems: isTablet && "center",
            justifyContent: isTablet && "center",
          }}
        >
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
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
        {/* <hr /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              backgroundColor: "transparent",
              fontSize: "2vh",
            }}
            variant="contained"
          >
            {" "}
            previous{" "}
          </Button>

          <Button
            sx={{
              backgroundColor: "transparent",
              fontSize: "2vh",
            }}
            variant="contained"
          >
            {" "}
            next{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
