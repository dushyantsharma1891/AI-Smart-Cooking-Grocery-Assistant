// routes/admin.js  –  Admin-only routes

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const { protect, adminOnly } = require("../middleware/auth");

// All routes here require login + admin role
router.use(protect, adminOnly);

// GET /api/admin/users  –  List all users
router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, count: users.length, users });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/admin/users/:id  –  Delete a user
router.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    next(err);
  }
});

// PUT /api/admin/users/:id/role  –  Change user role
router.put("/users/:id/role", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    );
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
});

// GET /api/admin/stats  –  Dashboard stats
router.get("/stats", async (req, res, next) => {
  try {
    const [totalUsers, totalPosts, publishedPosts] = await Promise.all([
      User.countDocuments(),
      Post.countDocuments(),
      Post.countDocuments({ isPublished: true }),
    ]);
    res.json({
      success: true,
      stats: { totalUsers, totalPosts, publishedPosts },
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
