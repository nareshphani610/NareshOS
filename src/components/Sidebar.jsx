import { NavLink } from "react-router-dom";
import { signOut } from "../services/authService";
import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  return (
    <div className="hidden md:block w-64 bg-gradient-to-b from-slate-900 to-indigo-900 text-white p-6">

      <h1 className="text-3xl font-bold">
        🪷 NareshOS
      </h1>

      <p className="text-sm text-slate-300 mt-2">
        Live Your Dharma
      </p>

      <div className="mt-4">
        <ThemeToggle />
      </div>
<NavLink
  to="/copilot"
  className="block p-3 rounded-xl hover:bg-indigo-600"
>
  🖥️ Endpoint Copilot
</NavLink>
      <div className="mt-10 space-y-3">

        <NavLink
          to="/"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          🏠 Dashboard
        </NavLink>
<NavLink
  to="/settings"
  className="block p-3 rounded-xl hover:bg-indigo-600"
>
  ⚙️ Settings
</NavLink>
        <NavLink
          to="/wealth"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          💰 Wealth
        </NavLink>

        <NavLink
          to="/family"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          ❤️ Family
        </NavLink>

        <NavLink
          to="/career"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          💼 Career
        </NavLink>

        <NavLink
          to="/durga"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          🤖 Durga AI
        </NavLink>

        <NavLink
          to="/analytics"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          📊 Analytics
        </NavLink>

        <NavLink
          to="/profile"
          className="block p-3 rounded-xl hover:bg-indigo-600"
        >
          👤 Profile
        </NavLink>

        <button
          onClick={async () => {
            await signOut();
            window.location.href = "/login";
          }}
          className="mt-10 bg-red-600 px-4 py-2 rounded-xl w-full"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;