import {
  Box,
  Button,
  Input,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Post from "../../components/Post";

const NewsForm = () => {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [headerPosts, setHeaderPosts] = React.useState([]);
  const [email, setEmail] = React.useState();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:912px)");
  const isTablet = useMediaQuery("(max-width:1000px)");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/newsLetter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response) {
        // set email empty
      }
    } catch (e) {
      console.log(e);
    }
  };

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
          gap: "3vh",
          padding: "1vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.8vh",
            color: "#6941C6",
          }}
        >
          Newsletters
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "3.5vh",
            maxWidth: "60ch",
            color: theme.palette.primary[100],
          }}
        >
          Stories and interviews
        </Typography>
        <Typography
          sx={{
            fontSize: "2vh",
            color: theme.palette.grey[500],
          }}
        >
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2vh",
            }}
          >
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "1.5vh",
                borderRadius: "6px",
                width: isTablet ? "30vh" : "40vh",
              }}
            />
            <Button
              type="submit"
              sx={{
                background: "#7F56D9",
                color: theme.palette.grey[100],
                "&:hover": {
                  background: theme.palette.grey[300],
                  color: theme.palette.grey[900],
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </form>
        <Typography
          sx={{
            fontSize: "2vh",
            color: theme.palette.grey[500],
          }}
        >
          We care about your data in our <span>privacy policy</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2vh",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "3.5vh",
            maxWidth: "60ch",
            color: theme.palette.primary[100],
          }}
        >
          Recent Posts
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
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
