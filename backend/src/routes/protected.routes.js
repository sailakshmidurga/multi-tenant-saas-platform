const express = require("express");
const router = express.Router();

const { authenticate } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

// Only logged-in users
router.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user,
  });
});

// Only tenant_admin
router.get(
  "/admin-only",
  authenticate,
  authorizeRoles("tenant_admin"),
  (req, res) => {
    res.json({
      message: "Tenant admin access granted",
    });
  }
);

// Only super_admin
router.get(
  "/super-admin-only",
  authenticate,
  authorizeRoles("super_admin"),
  (req, res) => {
    res.json({
      message: "Super admin access granted",
    });
  }
);

module.exports = router;
