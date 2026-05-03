// middleware/errorHandler.js  –  Central error handler

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose: bad ObjectId (e.g. /api/posts/not-valid-id)
  if (err.name === "CastError") {
    statusCode = 404;
    message = `Resource not found`;
  }

  // Mongoose: duplicate key (e.g. same email registered twice)
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `${field} already exists`;
  }

  // Mongoose: validation error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join(", ");
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired, please log in again";
  }

  res.status(statusCode).json({
    success: false,
    message,
    // Only show stack trace in development
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
