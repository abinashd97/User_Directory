import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice.jsx";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme?.current || "light");
  const dispatch = useDispatch();

  return (
    <button 
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
