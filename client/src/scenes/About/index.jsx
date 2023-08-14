import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import Hero from "../../components/Hero";
import Image from "./Image.png";
const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Hero text={"John Doe"} />
      <Box>
        <img src={Image} alt="Joe" />
      </Box>
      <Box>
        <Box>
          <Typography>About me</Typography>
          <Typography>
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </Typography>
        </Box>
        <Box>
          <Typography>Skills:</Typography>
          <ul>
            <li>
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </li>
            <li>
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </li>
          </ul>
        </Box>
        <Box>
          <Typography>Experience:</Typography>
          <ul>
            <li>
              5 years of experience as a UI designer, working on a variety of
              projects for clients in the tech and retail industries
            </li>
            <li>
              Led the design of a successful e-commerce website, resulting in a
              25% increase in online sales
            </li>
            <li>
              Created wireframes and prototypes for a mobile banking app,
              leading to a 20% increase in app usage
            </li>
          </ul>
        </Box>
        <Box>
          <Typography>Education</Typography>
          <ul>
            <li>Bachelor's degree in Graphic Design</li>
            <li>Certified User Experience Designer (CUED)</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
