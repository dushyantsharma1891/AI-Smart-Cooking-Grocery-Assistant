// middleware/auth.js  –  JWT authentication middleware

const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ── Protect routes: user must be logged in ────────────────────────
exports.protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header: "Bearer <token>"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Also check cookies (if you use cookie-based auth)
  // else if (req.cookies.token) { token = req.cookies.token; }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized – no token provided",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request object
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Token is invalid or expired",
    });
  }
};

// ── Admin only routes ─────────────────────────────────────────────
exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied – Admins only",
    });
  }
  next();
};
