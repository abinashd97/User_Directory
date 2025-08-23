// App.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UsersPage from "./routes/UsersPage.jsx";
import UserDetailPage from "./routes/UserDetailPage.jsx";
import ThemeToggle from "./theme/ThemeToggle.jsx";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme?.current || "light");

  useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">👥 User Directory</h1>
            <ThemeToggle />
          </div>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/users" replace />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
