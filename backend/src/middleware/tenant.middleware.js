exports.enforceTenant = (req, res, next) => {
  const tenantIdFromToken = req.user.tenantId;
  const tenantIdFromRequest =
    req.params.tenantId || req.body.tenant_id;

  // Super admin can access all tenants
  if (req.user.role === "super_admin") {
    return next();
  }

  if (!tenantIdFromRequest) {
    return res.status(400).json({
      message: "Tenant ID is required",
    });
  }

  if (tenantIdFromToken !== tenantIdFromRequest) {
    return res.status(403).json({
      message: "Cross-tenant access forbidden",
    });
  }

  next();
};
