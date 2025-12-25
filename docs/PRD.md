# Product Requirements Document (PRD)

## Product Name
Multi-Tenant SaaS Project Management Platform

## Objective
To build a secure SaaS platform where multiple organizations can manage projects and tasks independently.

## User Roles
- Super Admin
- Tenant Admin
- Normal User

## Core Features
### Authentication
- Login using email and password
- JWT-based authentication

### Authorization
- Role-based access (RBAC)
- Tenant-based data access

### Project Management
- Create and view projects
- Projects belong to a tenant

### Task Management
- Assign tasks to users
- Users can view only their assigned tasks

## Non-Functional Requirements
- Secure API access
- Data isolation
- Scalable deployment using Docker
