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
  '$2b$10$zC1k33j.qp915o9T0sYuC.IFcKScMpDx5sSPhkd5TMEKGi4w8T0ky',
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
  '$2b$10$zC1k33j.qp915o9T0sYuC.IFcKScMpDx5sSPhkd5TMEKGi4w8T0ky',
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
  '$2b$10$zC1k33j.qp915o9T0sYuC.IFcKScMpDx5sSPhkd5TMEKGi4w8T0ky',
  'user',
  'active'
);
