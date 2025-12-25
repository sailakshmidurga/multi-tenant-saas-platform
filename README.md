# 🧩 Multi-Tenant SaaS Platform

A full-stack **Multi-Tenant SaaS Platform** built with **React, Node.js, Express, PostgreSQL**, and **Docker**, supporting **JWT authentication**, **role-based access control (RBAC)**, and **tenant isolation**.

---

## 🚀 Features

* 🔐 JWT-based Authentication
* 👥 Role-Based Access Control (Super Admin, Tenant Admin, User)
* 🏢 Multi-Tenant Data Isolation
* 📊 Projects & Tasks Management
* 🧑‍💼 Admin vs User UI
* 🚪 Secure Logout
* 🐳 Fully Dockerized (Frontend + Backend + Database)

---

## 🏗 System Architecture

```
Browser
  ↓
Frontend (React + Nginx) — Port 3000
  ↓
Backend (Node.js + Express) — Port 5000
  ↓
PostgreSQL Database — Port 5432
```

### Architecture Flow

* Users interact with the React frontend
* Frontend communicates with backend APIs using JWT tokens
* Backend enforces RBAC and tenant-level isolation
* PostgreSQL stores tenants, users, projects, tasks, and audit logs

---

## 🧰 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* Fetch API
* Nginx (Docker)

### Backend

* Node.js
* Express.js
* PostgreSQL
* JWT
* bcrypt

### DevOps

* Docker
* Docker Compose

---

## 📂 Project Structure

```
multi-tenant-saas-platform/
├── backend/
│   ├── src/
│   ├── migrations/
│   ├── seeds/
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── README.md
└── submission.json
```

---

## ⚙️ How to Run the Project (Docker)

### 1️⃣ Prerequisites

* Docker
* Docker Compose

### 2️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd multi-tenant-saas-platform
```

### 3️⃣ Start Application

```bash
docker compose up -d
```

---

## 🌐 Access the Application

| Service        | URL                                                                  |
| -------------- | -------------------------------------------------------------------- |
| Frontend       | [http://localhost:3000](http://localhost:3000)                       |
| Backend Health | [http://localhost:5000/api/health](http://localhost:5000/api/health) |
| PostgreSQL     | localhost:5432                                                       |

---

## 🔐 Demo Login Credentials

### Super Admin

```
Email: superadmin@system.com
Password: User@123
```

### Tenant Admin

```
Email: admin@demo.com
Password: User@123
```

### Normal User

```
Email: user1@demo.com
Password: User@123
```

---

## 👮 Role-Based Behavior

| Role         | Capabilities             |
| ------------ | ------------------------ |
| Super Admin  | System-level access      |
| Tenant Admin | Manage projects & tasks  |
| User         | View assigned tasks only |

---

## 🧪 Tested Scenarios

* ✅ Login & Logout
* ✅ Role-based UI rendering
* ✅ Tenant-scoped projects & tasks
* ✅ JWT validation
* ✅ Docker container networking

---

## 🏁 Submission Status

✔ Backend completed
✔ Frontend completed
✔ Dockerized
✔ README updated
✔ Ready for evaluation

---

## 📌 Notes

* `node_modules` is ignored using `.gitignore`
* Environment variables handled via Docker Compose
* Clean commit history with incremental development

---

## 👨‍💻 Author

**Sai Lakshmi Durga Koneti**