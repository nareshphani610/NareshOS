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

import ExecutiveCommandCenter from "../components/ExecutiveCommandCenter";
import RealDurgaAI from "../components/RealDurgaAI";

import SmartDurgaAI2 from "../components/SmartDurgaAI2";
import WeeklyMissionPlanner from "../components/WeeklyMissionPlanner";

import WealthForecastCard from "../components/WealthForecastCard";
import DebtFreedomCalculator from "../components/DebtFreedomCalculator";
import GoalCompletionTracker from "../components/GoalCompletionTracker";

import DurgaAI3 from "../components/DurgaAI3";
import DurgaAI4 from "../components/DurgaAI4";

import MemoryCenter from "../components/MemoryCenter";
import AnnualLifePlanner from "../components/AnnualLifePlanner";

import WinsCenter from "../components/WinsCenter";

import DynamicKnowledgeVault from "../components/DynamicKnowledgeVault";
import DurgaMemorySearch from "../components/DurgaMemorySearch";

import CashFlowCommandCenter from "../components/CashFlowCommandCenter";

function Dashboard() {
  return (
    <div>

      {/* Executive Summary */}
      <div className="grid grid-cols-2 gap-6">

        <ExecutiveSummaryCard />

        <LifeScoreCard />

      </div>

      {/* Executive Command Center */}
      <div className="mt-6">

        <ExecutiveCommandCenter />

      </div>

      {/* Real Durga AI */}
      <div className="mt-6">

        <RealDurgaAI />

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

      {/* Durga AI 3.0 */}
      <div className="mt-6">

        <DurgaAI3 />

      </div>

      {/* Durga AI 4.0 */}
      <div className="mt-6">

        <DurgaAI4 />

      </div>

      {/* Weekly Mission Planner */}
      <div className="mt-6">

        <WeeklyMissionPlanner />

      </div>

      {/* Wealth Forecast */}
      <div className="mt-6">

        <WealthForecastCard />

      </div>

      {/* Debt Freedom */}
      <div className="mt-6">

        <DebtFreedomCalculator />

      </div>

      {/* Goal Tracker */}
      <div className="mt-6">

        <GoalCompletionTracker />

      </div>

      {/* Memory Center */}
      <div className="mt-6">

        <MemoryCenter />

      </div>

      {/* Annual Life Planner */}
      <div className="mt-6">

        <AnnualLifePlanner />

      </div>

      {/* Wins Center */}
      <div className="mt-6">

        <WinsCenter />

      </div>

      {/* Knowledge Vault */}
      <div className="mt-6">

        <DynamicKnowledgeVault />

      </div>

      {/* Durga Memory Search */}
      <div className="mt-6">

        <DurgaMemorySearch />

      </div>

      {/* Cash Flow Command Center */}
      <div className="mt-6">

        <CashFlowCommandCenter />

      </div>

    </div>
  );
}

export default Dashboard;