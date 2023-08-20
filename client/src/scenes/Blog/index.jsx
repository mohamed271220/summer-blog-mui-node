import React from "react";
import {
  Box,
  Button,
  Divider,
  Pagination,
  PaginationItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Post from "../../components/Post/index";
import Hero from "../../components/Hero";
const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:912px)");
  const isTablet = useMediaQuery("(max-width:1000px)");
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [headerPosts, setHeaderPosts] = React.useState([]);

  // pagination control
  const [page, setPage] = React.useState(1);
  const postsPerPage = 6;
  const lastIndex = page * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  let paginatedPosts = 0;
  let npage = 0;
  let numbers = 0;

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

  if (posts.length !== 0) {
    paginatedPosts = posts.slice(firstIndex, lastIndex);
    npage = Math.ceil(posts.length / postsPerPage);
    numbers = [...Array(npage + 1).keys()].slice(1);
  }

  // pagination functions
  const nextPage = () => {
    if (page !== lastIndex) {
      setPage((prev) => prev + 1);
    }
  };
  const previousPage = () => {
    if (page !== firstIndex) {
      setPage((prev) => prev - 1);
    }
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     "& .Mui-selected": {
  //       width: "5vh",
  //       height: "5h",
  //     },
  //   },
  // }));
  // const classes = useStyles();

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
          gap: "1.5vh",
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
              gap: "3vh",
            }}
          >
            <Post data={headerPosts[0]} isMobile size={"mobile"} />
            <Post data={headerPosts[1]} isMobile size={"mobile"} />
            <Post data={headerPosts[2]} isMobile size={"mobile"} />
          </Box>
        ) : isTablet ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              gap: "1.5vh",
            }}
          >
            <Post data={headerPosts[0]} size={"large"} />
            <Post data={headerPosts[1]} size={"large"} />
            <Post data={headerPosts[2]} size={"large"} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              gap: "1.5vh",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Post size={"medium"} data={headerPosts[1]} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // flex: 3,
                gap: "3vh",
              }}
            >
              <Post data={headerPosts[0]} size={"small"} />
              <Post data={headerPosts[3]} size={"small"} />
            </Box>
            <Post data={headerPosts[2]} size={"large"} />
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
          gap: "1.5vh",
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
            justifyContent: isTablet && "center",
          }}
        >
          {!loading &&
            paginatedPosts?.map((post) => (
              <Post data={post} isMobile size={"mobile"} />
            ))}
        </Box>
        <Divider
          orientation="horizontal"
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
            onClick={previousPage}
          >
            {" "}
            previous{" "}
          </Button>
          <Box>
            {numbers && (
              <Pagination
                hideNextButton
                hidePrevButton
                variant="outlined"
                color="primary"
                shape="rounded"
                count={npage}
                page={page}
                onChange={handleChange}
                
                
              />
            )}
          </Box>

          <Button
            sx={{
              backgroundColor: "transparent",
              fontSize: "2vh",
            }}
            variant="contained"
            onClick={nextPage}
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
