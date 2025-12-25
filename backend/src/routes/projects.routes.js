const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const { authenticate } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

// Get all projects for tenant
router.get(
  "/",
  authenticate,
  authorizeRoles("tenant_admin", "user", "super_admin"),
  async (req, res) => {
    try {
      const { tenantId, role } = req.user;

      const query =
        role === "super_admin"
          ? "SELECT * FROM projects"
          : "SELECT * FROM projects WHERE tenant_id = $1";

      const values = role === "super_admin" ? [] : [tenantId];

      const result = await pool.query(query, values);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  }
);

module.exports = router;
