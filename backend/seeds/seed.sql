-- Clear existing data (for re-runs)
TRUNCATE TABLE audit_logs CASCADE;
TRUNCATE TABLE tasks CASCADE;
TRUNCATE TABLE projects CASCADE;
TRUNCATE TABLE users CASCADE;
TRUNCATE TABLE tenants CASCADE;

-- Insert demo tenant
INSERT INTO tenants (id, name, plan, status)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'Demo Organization',
  'free',
  'active'
);

-- Insert super admin user
INSERT INTO users (id, tenant_id, name, email, password, role, status)
VALUES (
  '22222222-2222-2222-2222-222222222222',
  NULL,
  'Super Admin',
  'superadmin@system.com',
  '$2b$10$qttjd3p30ogKWg9vJijdV.VCn7qWqeIZpB.mt9xHmdH9.ngpGi9nC',
  'super_admin',
  'active'
);

-- Insert tenant admin
INSERT INTO users (id, tenant_id, name, email, password, role, status)
VALUES (
  '33333333-3333-3333-3333-333333333333',
  '11111111-1111-1111-1111-111111111111',
  'Demo Admin',
  'admin@demo.com',
  '$2b$10$qttjd3p30ogKWg9vJijdV.VCn7qWqeIZpB.mt9xHmdH9.ngpGi9nC',
  'tenant_admin',
  'active'
);

-- Insert normal user 1
INSERT INTO users (id, tenant_id, name, email, password, role, status)
VALUES (
  '44444444-4444-4444-4444-444444444444',
  '11111111-1111-1111-1111-111111111111',
  'Demo User One',
  'user1@demo.com',
  '$2b$10$qttjd3p30ogKWg9vJijdV.VCn7qWqeIZpB.mt9xHmdH9.ngpGi9nC',
  'user',
  'active'
);

-- Insert normal user 2
INSERT INTO users (id, tenant_id, name, email, password, role, status)
VALUES (
  '55555555-5555-5555-5555-555555555555',
  '11111111-1111-1111-1111-111111111111',
  'Demo User Two',
  'user2@demo.com',
  '$2b$10$qttjd3p30ogKWg9vJijdV.VCn7qWqeIZpB.mt9xHmdH9.ngpGi9nC',
  'user',
  'active'
);

-- Insert projects
INSERT INTO projects (id, tenant_id, name, description, created_by, status)
VALUES
(
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  '11111111-1111-1111-1111-111111111111',
  'Project Alpha',
  'First demo project',
  '33333333-3333-3333-3333-333333333333',
  'active'
),
(
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  '11111111-1111-1111-1111-111111111111',
  'Project Beta',
  'Second demo project',
  '33333333-3333-3333-3333-333333333333',
  'active'
);

-- Insert tasks
INSERT INTO tasks (id, tenant_id, project_id, title, description, assigned_to, status)
VALUES
(
  'cccccccc-cccc-cccc-cccc-cccccccccccc',
  '11111111-1111-1111-1111-111111111111',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'Design database schema',
  'Create initial DB schema',
  '33333333-3333-3333-3333-333333333333',
  'completed'
),
(
  'dddddddd-dddd-dddd-dddd-dddddddddddd',
  '11111111-1111-1111-1111-111111111111',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'Implement authentication',
  'Add login and JWT auth',
  '33333333-3333-3333-3333-333333333333',
  'in_progress'
),
(
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
  '11111111-1111-1111-1111-111111111111',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'Create frontend layout',
  'Build basic UI screens',
  '33333333-3333-3333-3333-333333333333',
  'pending'
),
(
  'ffffffff-ffff-ffff-ffff-ffffffffffff',
  '11111111-1111-1111-1111-111111111111',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'Dockerize application',
  'Add docker-compose setup',
  '33333333-3333-3333-3333-333333333333',
  'pending'
);
