### System Architecture

#### Overview

The system follows a standard three-tier architecture designed for a multi-tenant SaaS application. Each tier is responsible for a specific function and is deployed as an independent service.

The architecture consists of:

* A frontend layer built with React and served via Nginx
* A backend layer built with Node.js and Express providing REST APIs
* A PostgreSQL database for persistent storage

Each layer is containerized and managed using Docker Compose.

---

#### Communication Flow

Users interact with the system through a web browser. The frontend sends HTTP requests to backend REST APIs. The backend authenticates incoming requests using JSON Web Tokens and enforces role-based access control.

Once authenticated, the backend performs tenant-scoped queries on the PostgreSQL database to ensure data isolation. The processed response is then sent back to the frontend for rendering.

---

#### Multi-Tenancy Design

The application uses a shared database with logical tenant isolation. Each tenant’s data is distinguished using a tenant identifier. All tenant-specific tables include a tenant identifier column, and backend queries are always filtered using this value extracted from the authentication token.

This design ensures that tenants share infrastructure while maintaining strict data separation.

---

#### Security Architecture

Security is enforced at multiple levels of the system. Authentication is handled using stateless JWT tokens, and passwords are securely hashed before storage. Role-based access control is implemented using backend middleware to restrict access to APIs based on user roles.

Cross-origin requests are restricted to trusted frontend origins, and the database is never accessed directly from the frontend.

---

#### Deployment Architecture

All system components are deployed using Docker containers. Docker Compose orchestrates the frontend, backend, and database services and manages networking between them.

PostgreSQL data is persisted using Docker volumes to prevent data loss. The entire application stack can be started or stopped using a single command, simplifying deployment and evaluation.

---

#### Key Design Decisions

The three-tier architecture was chosen to ensure separation of concerns and scalability. Stateless authentication enables horizontal scaling of the backend. Logical tenant isolation provides security without increasing infrastructure complexity. Docker-based deployment ensures consistency across environments.

---

#### System Architecture Diagram

A visual representation of the system architecture is provided to illustrate the interaction between frontend, backend, and database layers.