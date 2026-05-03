// routes/posts.js  –  Post CRUD routes

const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
} = require("../controllers/postController");
const { protect } = require("../middleware/auth");

// Public
router.get("/", getAllPosts);
router.get("/:id", getPost);

// Private (login required)
router.post("/", protect, createPost);
router.get("/user/my-posts", protect, getMyPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
