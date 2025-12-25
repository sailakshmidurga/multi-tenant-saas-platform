const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

const healthRoutes = require("./routes/health.routes");
app.use("/api", healthRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const protectedRoutes = require("./routes/protected.routes");
app.use("/api/protected", protectedRoutes);



app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is running",
  });
});

module.exports = app;
