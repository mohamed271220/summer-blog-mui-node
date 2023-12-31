import express from "express";
import Post from "../models/post.js";
import Project from "../models/project.js";
import NewsLetter from "../models/newsLetter.js";

const router = express.Router();

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/posts/:id", async (req, res) => {
  // ...
});

router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.post("/projects", async (req, res) => {
  // ...
  const { title, description, image, tags } = req.body;

  try {
    const project = new Project({
      title,
      description,
      image,
      tags,
    });
    await project.save();
    res.status(201).json({ project });
  } catch (err) {
    res.status(401).json({ message: err });
  }
});

router.post("/newsLetter", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  try {
    const val = email;
    const newEmail = new NewsLetter({
      email: val,
    });
    await newEmail.save();
    res.status(201).json({ newEmail });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: err });
  }
});

export default router;
