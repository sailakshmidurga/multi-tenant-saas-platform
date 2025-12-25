const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ✅ ROUTES
const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");
const protectedRoutes = require("./routes/protected.routes");
const projectRoutes = require("./routes/projects.routes");
const taskRoutes = require("./routes/tasks.routes");

// ✅ MOUNT ROUTES
app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// ✅ ROOT CHECK
app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running",
  });
});

module.exports = app;
