import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";

const PostPage = () => {
  const postId = useParams().id;
  const [data, setData] = useState([]);

  const tagColors = {
    // textColor , backgroundColor
    0: ["#32a852", "#c8e0cd"],
    1: ["#0400d9", "#dec5c7"],
    2: ["#ff0026", "#c5c7de"],
  };

  const [post, setPost] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/posts/${postId}`
        );
        const data = await response.json();
        setPost(data);

        const response2 = await fetch(`http://localhost:3001/api/posts`);
        const data2 = await response2.json();
        setData(data2.slice(0, 6));
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchPageData();
  }, [postId]);

  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        // width: "90%",
        padding: "0vh 6vh",
        gap: "1.5vh",
        margin: "5vh 0 ",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "2vh",
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
          Recent Posts
        </Typography>

        {!loading &&
          data.map((postData) => (
            <Post data={postData} isMobile size={"mobile"} />
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "2vh",
        }}
      >
        {loading && <p>Loading...</p>}
        {!loading && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gap: "2vh",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.8vh",
                color: "#6941C6",
              }}
            >
              {post?.createdAt}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: "3.5vh",
                maxWidth: "60ch",
                color: theme.palette.primary[100],
              }}
            >
              {post?.title}
            </Typography>

            <img
              src={`http://localhost:3001/assets/${post?.image}`}
              alt="logo"
              style={{
                width: "95vh",
                height: "50vh",
              }}
            />

            <Typography
              variant="p"
              sx={{
                fontSize: "2vh",
                color: theme.palette.grey[500],
                // maxWidth: "95vh",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
              }}
            >
              {post?.description}
            </Typography>

            {post?.sections.map((section) => (
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    fontSize: "2.5vh",
                    maxWidth: "60ch",
                    color: theme.palette.primary[100],
                  }}
                >
                  {section?.secTitle}
                </Typography>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "2vh",
                    color: theme.palette.grey[700],
                    // maxWidth: "95vh",
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                  }}
                >
                  {section?.paragraph}
                </Typography>
              </Box>
            ))}

            {post?.tags.map((tag, index) => (
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
        )}
      </Box>
    </Box>
  );
};

export default PostPage;
