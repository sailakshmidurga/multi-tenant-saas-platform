import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

export default App;
