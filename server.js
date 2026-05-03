// server.js  –  Express app entry point

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const path = require("path");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
connectDB();

const app = express();

// Helmet — disable CSP so inline scripts in HTML files work
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));

// Rate limiting
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100, message: { success: false, message: "Too many requests" } });
app.use("/api/", limiter);
const authLimiter = rateLimit({ windowMs: 15*60*1000, max: 10, message: { success: false, message: "Too many login attempts" } });
app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);

// CORS — allows localhost + any *.onrender.com automatically
const allowedOrigins = ["http://localhost:3000","http://localhost:5000","http://127.0.0.1:5000"];
if (process.env.CLIENT_URL) allowedOrigins.push(process.env.CLIENT_URL);
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (origin.endsWith(".onrender.com")) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// Static files
app.use(express.static(path.join(__dirname)));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// HTML page routes
app.get("/",           (req, res) => res.sendFile(path.join(__dirname, "sign.html")));
app.get("/sign.html",  (req, res) => res.sendFile(path.join(__dirname, "sign.html")));
app.get("/login",      (req, res) => res.sendFile(path.join(__dirname, "sign.html")));
app.get("/Login.html", (req, res) => res.sendFile(path.join(__dirname, "Login.html")));
app.get("/signup",     (req, res) => res.sendFile(path.join(__dirname, "Login.html")));
app.get("/register",   (req, res) => res.sendFile(path.join(__dirname, "Login.html")));
app.get("/Dash.html",  (req, res) => res.sendFile(path.join(__dirname, "Dash.html")));
app.get("/dashboard",  (req, res) => res.sendFile(path.join(__dirname, "Dash.html")));

// API routes
app.use("/api/auth",  require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/admin", require("./routes/admin"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Server is running", environment: process.env.NODE_ENV, timestamp: new Date().toISOString() });
});

// 404 — JSON for API, redirect for pages
app.use((req, res) => {
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({ success: false, message: `API route ${req.originalUrl} not found` });
  }
  res.redirect("/");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🌐 Open: http://localhost:${PORT}`);
});
