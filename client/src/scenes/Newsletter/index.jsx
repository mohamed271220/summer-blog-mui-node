import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import Post from "../../components/Post";

const NewsForm = () => {
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
        gap: "4vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4vh",
        }}
      >
        <Typography>Newsletters</Typography>
        <Typography>Stories and interviews</Typography>
        <Typography>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </Typography>
        <Box>
          <Input />
          <Button>Subscribe</Button>
        </Box>
        <Typography>We care about your data in our privacy policy</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "2vh",
        }}
      >
        <Typography>Recent Posts</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "2vh",
          }}
        >
          {!loading && (
            <>
              <Post isMobile data={posts[0]} size={"mobile"} />
              <Post isMobile data={posts[1]} size={"mobile"} />
              <Post isMobile data={posts[2]} size={"mobile"} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsForm;
