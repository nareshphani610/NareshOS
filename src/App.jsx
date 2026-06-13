import Sidebar from "./components/Sidebar";
import DateTimeCard from "./components/DateTimeCard";
import KPICards from "./components/KPICards";
import DurgaPanel from "./components/DurgaPanel";

import AssetsCard from "./components/AssetsCard";
import LiabilitiesCard from "./components/LiabilitiesCard";
import GoalsCard from "./components/GoalsCard";

import FamilyCard from "./components/FamilyCard";
import CelebrationCard from "./components/CelebrationCard";
import DurgaAI from "./components/DurgaAI";

import NetWorthCard from "./components/NetWorthCard";
import DebtFreeCard from "./components/DebtFreeCard";
import WealthGoalCard from "./components/WealthGoalCard";

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

        {/* Top Widgets */}
        <div className="grid grid-cols-3 gap-6 mt-6">

          <DateTimeCard />

          <div className="bg-white rounded-3xl p-5 shadow-lg">
            <h2 className="font-bold text-lg">
              🎂 Next Family Event
            </h2>

            <p className="mt-2">
              Wife Birthday - 03 Jul
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-lg">
            <h2 className="font-bold text-lg">
              🎉 Celebration Fund
            </h2>

            <p className="mt-2">
              ₹35,000 / ₹1,00,000
            </p>

            <div className="bg-gray-200 h-3 rounded-full mt-3">
              <div className="bg-green-500 h-3 rounded-full w-1/3"></div>
            </div>
          </div>

        </div>

        {/* Financial Goals */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <NetWorthCard />
          <DebtFreeCard />
          <WealthGoalCard />
        </div>

        <KPICards />

        <DurgaPanel />

        {/* Assets / Liabilities / Goals */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <AssetsCard />
          <LiabilitiesCard />
          <GoalsCard />
        </div>

        {/* Family / Celebration / Durga AI */}
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