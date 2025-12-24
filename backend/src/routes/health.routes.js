const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/health", async (req, res) => {
  try {
    // Simple DB check
    await pool.query("SELECT 1");

    return res.status(200).json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    console.error("Health check failed:", error.message);

    return res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
});

module.exports = router;
