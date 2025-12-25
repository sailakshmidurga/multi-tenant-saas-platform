# System Architecture

## Overview
The system follows a standard **three-tier architecture** designed for a multi-tenant SaaS application.

- **Frontend**: React application served via Nginx
- **Backend**: Node.js with Express REST API
- **Database**: PostgreSQL relational database

Each layer is containerized and runs as an independent service using Docker Compose.

---

## Communication Flow
1. Users interact with the system via a web browser.
2. The frontend sends HTTP requests to the backend REST APIs.
3. The backend authenticates requests using JWT tokens.
4. Role-based access control (RBAC) is enforced at the API level.
5. The backend performs tenant-scoped queries on PostgreSQL.
6. Responses are returned to the frontend for rendering.

---

## Multi-Tenancy Design
- The application uses a **shared database, tenant-isolated schema**.
- All tenant-specific tables include a `tenant_id` column.
- Backend queries are always scoped by `tenant_id` extracted from JWT.
- This ensures **complete data isolation between tenants**.

---

## Security Architecture
- JWT-based stateless authentication
- Passwords hashed using bcrypt
- Role-based access enforced using Express middleware
- CORS restricted to frontend origin
- No direct database access from frontend

---

## Deployment Architecture
- Docker Compose orchestrates all services
- Services communicate via an internal Docker network
- PostgreSQL data persists using Docker volumes
- Application can be started with a single command:
  ```bash
  docker compose up -d
