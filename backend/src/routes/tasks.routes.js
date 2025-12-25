const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const { authenticate } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

// Get all tasks for tenant
router.get(
  "/",
  authenticate,
  authorizeRoles("tenant_admin", "user", "super_admin"),
  async (req, res) => {
    try {
      const { tenantId, role, userId } = req.user;

      let query, values;

      if (role === "super_admin") {
        query = "SELECT * FROM tasks";
        values = [];
      } else if (role === "tenant_admin") {
        query = "SELECT * FROM tasks WHERE tenant_id = $1";
        values = [tenantId];
      } else {
        query =
          "SELECT * FROM tasks WHERE tenant_id = $1 AND assigned_to = $2";
        values = [tenantId, userId];
      }

      const result = await pool.query(query, values);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch tasks" });
    }
  }
);

module.exports = router;
