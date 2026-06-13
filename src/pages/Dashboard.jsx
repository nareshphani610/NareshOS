import DateTimeCard from "../components/DateTimeCard";
import NextFamilyEventCard from "../components/NextFamilyEventCard";
import CelebrationCard from "../components/CelebrationCard";

import ExecutiveSummaryCard from "../components/ExecutiveSummaryCard";
import LifeScoreCard from "../components/LifeScoreCard";

import NetWorthCard from "../components/NetWorthCard";
import DebtFreeCard from "../components/DebtFreeCard";
import WealthGoalCard from "../components/WealthGoalCard";

import KPICards from "../components/KPICards";
import DurgaPanel from "../components/DurgaPanel";

import SmartDurgaAI from "../components/SmartDurgaAI";

function Dashboard() {
  return (
    <div>

      {/* Executive Summary + Life Score */}
      <div className="grid grid-cols-2 gap-6">

        <ExecutiveSummaryCard />

        <LifeScoreCard />

      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <DateTimeCard />

        <NextFamilyEventCard />

        <CelebrationCard />

      </div>

      {/* Wealth Snapshot */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <NetWorthCard />

        <DebtFreeCard />

        <WealthGoalCard />

      </div>

      {/* KPI Cards */}
      <div className="mt-6">

        <KPICards />

      </div>

      {/* Durga Command Center */}
      <div className="mt-6">

        <DurgaPanel />

      </div>

      {/* Smart Durga AI */}
      <div className="mt-6">

        <SmartDurgaAI />

      </div>

    </div>
  );
}

export default Dashboard;