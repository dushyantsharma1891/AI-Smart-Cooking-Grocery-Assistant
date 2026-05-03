// controllers/authController.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken(user._id);
  user.password = undefined;
  res.status(statusCode).json({ success: true, token, user });
};

// POST /api/auth/register
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, age, phone, gender, location, diet } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email is already registered" });
    }

    const user = await User.create({
      name, email, password,
      age:      age      || 0,
      phone:    phone    || "",
      gender:   gender   || "",
      location: location || "",
      diet:     diet     || "veg",
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    next(err);
  }
};

// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ success: false, message: "No account found with this email" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// GET /api/auth/me
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

// PUT /api/auth/update-profile
exports.updateProfile = async (req, res, next) => {
  try {
    const { name, email, age, phone, gender, location, diet } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, age, phone, gender, location, diet },
      { new: true, runValidators: true }
    );
    res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

// PUT /api/auth/change-password
exports.changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id).select("+password");
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Current password is incorrect" });
    }
    user.password = newPassword;
    await user.save();
    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};
