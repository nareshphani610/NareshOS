import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Wealth from "./pages/Wealth";
import Family from "./pages/Family";
import Career from "./pages/Career";
import Bhagavatgitha from "./pages/Bhagavatgitha";
import DurgaAIPage from "./pages/DurgaAIPage";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>

      <div className="flex min-h-screen bg-slate-100">

        <Sidebar />

        <div className="flex-1 p-8">

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

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;