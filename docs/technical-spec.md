# Technical Specification

## 1. Introduction

This document describes the technical implementation of the **Multi-Tenant SaaS Platform**.  
It covers backend APIs, frontend behavior, authentication and authorization mechanisms, database design approach, and Docker-based deployment.

The system is designed to be:
- Secure
- Scalable
- Tenant-isolated
- Production-ready

---

## 2. Backend Implementation

### Technology Stack
- **Node.js** – JavaScript runtime
- **Express.js** – REST API framework
- **PostgreSQL** – Relational database
- **JWT** – Authentication & authorization
- **bcrypt** – Password hashing
- **pg** – PostgreSQL client

### Backend Architecture
- REST-based API design
- Stateless authentication using JWT
- Middleware-based request validation
- Tenant-aware query execution

### Core Responsibilities
- Authenticate users
- Enforce role-based access control (RBAC)
- Enforce tenant isolation
- Serve project and task data securely

---

## 3. Authentication Mechanism

### Login Flow
1. User submits email and password.
2. Backend validates credentials using bcrypt.
3. On success, a JWT token is generated.
4. Token contains:
   - `user_id`
   - `role`
   - `tenant_id`
5. Token is sent to frontend.

### JWT Payload Structure
```json
{
  "id": "user_uuid",
  "role": "tenant_admin",
  "tenant_id": "tenant_uuid"
}
Token Usage
Token is sent in Authorization header:

makefile
Authorization: Bearer <token>
Middleware validates token on every protected request.

4. Role-Based Access Control (RBAC)
Supported Roles
Role	Description
super_admin	System-wide access
tenant_admin	Manage tenant data
user	Access assigned tasks only

RBAC Enforcement
Middleware checks role from JWT

API access is allowed or denied based on role

Frontend only controls UI visibility

Backend enforces actual security

5. Multi-Tenancy Strategy
Design Approach
Single PostgreSQL database

Shared schema with tenant isolation

All tenant-specific tables include tenant_id

Tenant Isolation
tenant_id extracted from JWT

Queries always scoped by tenant

Example:

sql
SELECT * FROM tasks
WHERE tenant_id = $1;
This guarantees:

No cross-tenant data access

Secure multi-tenant behavior

6. Database Design
Key Tables
tenants

users

projects

tasks

audit_logs

Relationships
One tenant → many users

One tenant → many projects

One project → many tasks

One user → many assigned tasks

Database schema is created using SQL migrations and populated using seed scripts.

7. API Endpoints
Authentication
POST /api/auth/login

Health Check
GET /api/health

Projects
GET /api/projects

POST /api/projects (tenant_admin only)

Tasks
GET /api/tasks

POST /api/tasks (tenant_admin only)

Protected Routes
GET /api/protected/profile

GET /api/protected/super-admin-only

8. Frontend Implementation
Technology Stack
React (Vite)

JavaScript

Fetch API

LocalStorage

Key Responsibilities
Render login and dashboard UI

Store JWT token and role

Call backend APIs with Authorization header

Conditionally render UI based on role

Role-Based UI Rendering
jsx
{role === "tenant_admin" && <AdminPanel />}
9. API Communication Layer
All API requests go through a centralized helper.

js
export async function apiFetch(path) {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://backend:5000/api${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}
10. Docker & Deployment
Dockerized Services
Service	Port
Frontend (Nginx)	3000
Backend (Express)	5000
PostgreSQL	5432

Deployment Method
Docker Compose orchestrates services

Internal Docker networking used

PostgreSQL data persisted using volumes

Startup Command
bash
docker compose up -d
11. Security Considerations
Passwords hashed using bcrypt

JWT tokens are stateless and signed

No sensitive data stored in frontend

CORS restricted to frontend origin

RBAC enforced at API level

12. Scalability Considerations
Stateless backend supports horizontal scaling

JWT-based auth avoids session storage

Docker enables cloud deployment

Tenant-based indexing improves performance

13. Conclusion
This technical specification documents a secure, scalable, and production-ready multi-tenant SaaS platform.
The system follows best practices in authentication, authorization, data isolation, and containerized deployment.

The implementation aligns with modern SaaS architecture used in real-world enterprise applications.

