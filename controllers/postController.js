// controllers/postController.js  –  Full CRUD for posts/content

const Post = require("../models/Post");

// ─────────────────────────────────────────────────────────────────
// @route   GET /api/posts
// @desc    Get all published posts (with pagination & search)
// @access  Public
// ─────────────────────────────────────────────────────────────────
exports.getAllPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Optional: search by title
    const query = {};
    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }
    if (req.query.tag) {
      query.tags = req.query.tag;
    }

    const [posts, total] = await Promise.all([
      Post.find({ ...query, isPublished: true })
        .populate("author", "name avatar") // Join author info
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Post.countDocuments({ ...query, isPublished: true }),
    ]);

    res.status(200).json({
      success: true,
      count: posts.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      posts,
    });
  } catch (err) {
    next(err);
  }
};

// ─────────────────────────────────────────────────────────────────
// @route   GET /api/posts/:id
// @desc    Get single post by ID
// @access  Public
// ─────────────────────────────────────────────────────────────────
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "name avatar"
    );

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Increment view count
    post.views += 1;
    await post.save();

    res.status(200).json({ success: true, post });
  } catch (err) {
    next(err);
  }
};

// ─────────────────────────────────────────────────────────────────
// @route   POST /api/posts
// @desc    Create a new post
// @access  Private
// ─────────────────────────────────────────────────────────────────
exports.createPost = async (req, res, next) => {
  try {
    // Attach logged-in user as author
    req.body.author = req.user.id;

    const post = await Post.create(req.body);

    res.status(201).json({ success: true, post });
  } catch (err) {
    next(err);
  }
};

// ─────────────────────────────────────────────────────────────────
// @route   PUT /api/posts/:id
// @desc    Update a post (only by its author or admin)
// @access  Private
// ─────────────────────────────────────────────────────────────────
exports.updatePost = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Ownership check
    if (
      post.author.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this post",
      });
    }

    post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, post });
  } catch (err) {
    next(err);
  }
};

// ─────────────────────────────────────────────────────────────────
// @route   DELETE /api/posts/:id
// @desc    Delete a post
// @access  Private
// ─────────────────────────────────────────────────────────────────
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Only author or admin can delete
    if (
      post.author.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this post",
      });
    }

    await post.deleteOne();

    res.status(200).json({ success: true, message: "Post deleted" });
  } catch (err) {
    next(err);
  }
};

// ─────────────────────────────────────────────────────────────────
// @route   GET /api/posts/my-posts
// @desc    Get all posts by logged-in user
// @access  Private
// ─────────────────────────────────────────────────────────────────
exports.getMyPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ author: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, count: posts.length, posts });
  } catch (err) {
    next(err);
  }
};
