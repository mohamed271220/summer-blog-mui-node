import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import Post from "../../components/Post";

const NewsForm = () => {
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
            gap: "2vh",
          }}
        >
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
          <Post isMobile size={"mobile"} />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsForm;
