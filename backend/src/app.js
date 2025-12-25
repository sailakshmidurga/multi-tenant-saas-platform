const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());



const healthRoutes = require("./routes/health.routes");
app.use("/api", healthRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const protectedRoutes = require("./routes/protected.routes");
app.use("/api/protected", protectedRoutes);

const projectRoutes = require("./routes/projects.routes");
const taskRoutes = require("./routes/tasks.routes");

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);




app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is running",
  });
});

module.exports = app;
