const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const requireRole = require("../middleware/role.middleware");

// Any logged-in user
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user,
  });
});

// Super admin only
router.get(
  "/super-admin-only",
  authMiddleware,
  requireRole("super_admin"),
  (req, res) => {
    res.json({
      message: "Super admin access granted",
    });
  }
);

module.exports = router;
