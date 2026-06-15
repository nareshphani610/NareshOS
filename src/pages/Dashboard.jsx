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

import SmartDurgaAI2 from "../components/SmartDurgaAI2";
import WeeklyMissionPlanner from "../components/WeeklyMissionPlanner";

import WealthForecastCard from "../components/WealthForecastCard";
import DebtFreedomCalculator from "../components/DebtFreedomCalculator";
import GoalCompletionTracker from "../components/GoalCompletionTracker";

import DurgaAI3 from "../components/DurgaAI3";
import MemoryCenter from "../components/MemoryCenter";
import AnnualLifePlanner from "../components/AnnualLifePlanner";
import WinsCenter from "../components/WinsCenter";

import KnowledgeVault from "../components/KnowledgeVault";
import CashFlowCommandCenter from "../components/CashFlowCommandCenter";
import ExecutiveCommandCenter from "../components/ExecutiveCommandCenter";

function Dashboard() {
  return (
    <div>

      {/* Executive Summary + Life Score */}
      <div className="grid grid-cols-2 gap-6">
        <ExecutiveSummaryCard />
        <LifeScoreCard />
      </div>
      <div className="mt-6">
  <ExecutiveCommandCenter />
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

      {/* Durga AI 2.0 */}
      <div className="mt-6">
        <SmartDurgaAI2 />
      </div>

      {/* Weekly Mission Planner */}
      <div className="mt-6">
        <WeeklyMissionPlanner />
      </div>

      {/* Wealth Forecast Engine */}
      <div className="mt-6">
        <WealthForecastCard />
      </div>

      {/* Debt Freedom Calculator */}
      <div className="mt-6">
        <DebtFreedomCalculator />
      </div>

      {/* Goal Completion Tracker */}
      <div className="mt-6">
        <GoalCompletionTracker />
      </div>

      {/* Durga AI 3.0 */}
      <div className="mt-6">
        <DurgaAI3 />
      </div>
<div className="mt-6">
  <MemoryCenter />
</div>
<div className="mt-6">
  <AnnualLifePlanner />
</div>
   <div className="mt-6">
  <WinsCenter />
</div>
<div className="mt-6">
  <KnowledgeVault />
</div>
<div className="mt-6">
  <CashFlowCommandCenter />
</div>
 </div>
  );
}

export default Dashboard;