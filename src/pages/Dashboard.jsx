import DateTimeCard from "../components/DateTimeCard";
import NextFamilyEventCard from "../components/NextFamilyEventCard";

import NetWorthCard from "../components/NetWorthCard";
import DebtFreeCard from "../components/DebtFreeCard";
import WealthGoalCard from "../components/WealthGoalCard";

import KPICards from "../components/KPICards";
import DurgaPanel from "../components/DurgaPanel";

function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500">
        Om Namo Narayanaya 🙏
      </p>

      {/* Top Widgets */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <DateTimeCard />
        <NextFamilyEventCard />

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

      {/* Financial Journey */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Durga Command Center */}
      <DurgaPanel />

    </div>
  );
}

export default Dashboard;