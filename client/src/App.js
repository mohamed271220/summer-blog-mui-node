import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { Suspense, useMemo } from "react";
import Blog from "./scenes/Blog";
import Layout from "./scenes/Layout";
import Projects from "./scenes/Projects";
import About from "./scenes/About";
import NewsForm from "./scenes/Newsletter";
import Add from "./scenes/Add/Add";
import Post from "./scenes/Post";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/blog" />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Post />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/newsletter" element={<NewsForm />} />
                <Route path="/addPost" element={<Add />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
