import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState("");
  const [error, setError] = useState("");

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

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Projects</h3>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <h3>Tasks</h3>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title} — <b>{t.status}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
