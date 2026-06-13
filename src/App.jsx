import Sidebar from "./components/Sidebar";
import KPICards from "./components/KPICards";
import DurgaPanel from "./components/DurgaPanel";
import FamilyCard from "./components/FamilyCard";
import CelebrationCard from "./components/CelebrationCard";
import DurgaAI from "./components/DurgaAI";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Om Namo Narayanaya 🙏
        </p>

        <KPICards />

        <DurgaPanel />

        <div className="grid grid-cols-3 gap-6 mt-6">
          <FamilyCard />
          <CelebrationCard />
           <DurgaAI />
</div>

      </div>
    </div>
  );
}

export default App;