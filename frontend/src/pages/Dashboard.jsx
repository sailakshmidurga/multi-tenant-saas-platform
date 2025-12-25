import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

function Dashboard({ onLogout }) {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    async function loadData() {
      try {
        const projectsData = await apiFetch("/projects");
        const tasksData = await apiFetch("/tasks");
        setProjects(projectsData);
        setTasks(tasksData);
      } catch (err) {
        setError("Failed to load data");
      }
    }
    loadData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>

      {/* ✅ LOGOUT BUTTON */}
      <button
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    onLogout();
  }}
  style={{ marginBottom: "1rem" }}
>
  Logout
</button>


      {/* ✅ ADMIN PANEL */}
      {role === "tenant_admin" && (
        <>
          <h3>Admin Panel</h3>
          <ul>
            <li>Create Project</li>
            <li>Assign Tasks</li>
            <li>View All Users</li>
          </ul>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Projects</h3>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <h3>Tasks</h3>

{tasks.length === 0 ? (
  <p>No tasks assigned to you.</p>
) : (
  <ul>
    {tasks.map((t) => (
      <li key={t.id}>
        {t.title} — <b>{t.status}</b>
      </li>
    ))}
  </ul>
)}

    </div>
  );
}

export default Dashboard;
