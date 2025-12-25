const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const  requireRole = require("../middleware/role.middleware");
const pool = require("../config/db");

// GET projects (tenant scoped)
router.get("/", authMiddleware, async (req, res) => {
  const { tenantId } = req.user;

  const result = await pool.query(
    "SELECT * FROM projects WHERE tenant_id = $1",
    [tenantId]
  );

  res.json(result.rows);
});

// CREATE project (tenant_admin only)
router.post(
  "/",
  authMiddleware,
  requireRole("tenant_admin"),
  async (req, res) => {
    const { name, description } = req.body;
    const { tenantId, userId } = req.user;

    const result = await pool.query(
      `INSERT INTO projects (id, tenant_id, name, description, created_by, status)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, 'active')
       RETURNING *`,
      [tenantId, name, description, userId]
    );

    res.status(201).json(result.rows[0]);
  }
);

module.exports = router;
