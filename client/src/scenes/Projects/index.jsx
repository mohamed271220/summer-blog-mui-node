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
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [headerPosts, setHeaderPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/api/posts");
        const data = await response.json();
        setPosts(data);
        setHeaderPosts(data.slice(0, 4));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
            // alignItems: isTablet && "center",
            // justifyContent: isTablet && "center",
          }}
        >
          <Post isMobile data={posts[0]} size={"mobile"} />
          <Post isMobile data={posts[1]} size={"mobile"} />
          <Post isMobile data={posts[2]} size={"mobile"} />

          <Post
            size={isTablet ? "mobile" : "large-X"}
            isMobile={isTablet}
            data={posts[3]}
    
          />
          <Post isMobile data={posts[4]}  size={"mobile"} />
          <Post isMobile data={posts[5]}  size={"mobile"} />
          <Post isMobile data={posts[6]}  size={"mobile"} />
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
