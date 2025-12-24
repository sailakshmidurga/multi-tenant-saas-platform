-- Clear existing data (for re-runs)
TRUNCATE TABLE audit_logs CASCADE;
TRUNCATE TABLE tasks CASCADE;
TRUNCATE TABLE projects CASCADE;
TRUNCATE TABLE users CASCADE;
TRUNCATE TABLE tenants CASCADE;

-
-- Insert demo tenant
INSERT INTO tenants (id, name, plan, status)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'Demo Organization',
  'free',
  'active'
);
