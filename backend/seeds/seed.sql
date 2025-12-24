-- Clear existing data (for re-runs)
TRUNCATE TABLE audit_logs CASCADE;
TRUNCATE TABLE tasks CASCADE;
TRUNCATE TABLE projects CASCADE;
TRUNCATE TABLE users CASCADE;
TRUNCATE TABLE tenants CASCADE;

-- Seed data will be added step by step
