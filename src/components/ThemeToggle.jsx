import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      w-full
      bg-indigo-600
      hover:bg-indigo-700
      text-white
      p-3
      rounded-xl
      "
    >
      {darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;