import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";

import path from "path";
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const multer = require("multer");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const path = require("path");
// const fileURLToPath = require("url").fileURLToPath;
import mainRoute from "./routes/main.js";
import { fileURLToPath } from "url";

/* CONFIG */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "assets")));

/* File storage */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use("/api", mainRoute);

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || "something went wrong";
  const data = error.data;
  console.log(error);
  res.status(status).json({ message: message, data: data });
});

//Mongoose
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
