// models/Post.js  –  Example content model (rename to Product, Article, etc.)

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    image: {
      type: String,
      default: "",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",      // References the User model
      required: true,
    },
    tags: [String],
    isPublished: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for fast text search
PostSchema.index({ title: "text", content: "text" });

module.exports = mongoose.model("Post", PostSchema);
