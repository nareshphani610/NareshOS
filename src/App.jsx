import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Wealth from "./pages/Wealth";
import Family from "./pages/Family";
import Career from "./pages/Career";
import Bhagavatgitha from "./pages/Bhagavatgitha";
import DurgaAIPage from "./pages/DurgaAIPage";
import Analytics from "./pages/Analytics";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Protected Routes */}

        <Route
          path="*"
          element={
            <ProtectedRoute>

              <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">

                <Sidebar />

                <div className="flex-1 p-3 md:p-8">

                  <Routes>

                    <Route
                      path="/"
                      element={<Dashboard />}
                    />

                    <Route
                      path="/wealth"
                      element={<Wealth />}
                    />

                    <Route
                      path="/family"
                      element={<Family />}
                    />

                    <Route
                      path="/career"
                      element={<Career />}
                    />

                    <Route
                      path="/bhagavatgitha"
                      element={<Bhagavatgitha />}
                    />

                    <Route
                      path="/durga"
                      element={<DurgaAIPage />}
                    />

                    <Route
                      path="/analytics"
                      element={<Analytics />}
                    />

                    <Route
                      path="/profile"
                      element={<Profile />}
                    />

                  </Routes>

                </div>

              </div>

            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;