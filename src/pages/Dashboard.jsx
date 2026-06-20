import DurgaDailyDashboard from "../components/DurgaDailyDashboard";

import ExecutiveSummaryCard from "../components/ExecutiveSummaryCard";
import LifeScoreCard from "../components/LifeScoreCard";

import NetWorthCard from "../components/NetWorthCard";
import DebtFreeCard from "../components/DebtFreeCard";
import WealthGoalCard from "../components/WealthGoalCard";

import KPICards from "../components/KPICards";
import ExecutiveCommandCenter from "../components/ExecutiveCommandCenter";
import RealDurgaAI from "../components/RealDurgaAI";

import DateTimeCard from "../components/DateTimeCard";
import NextFamilyEventCard from "../components/NextFamilyEventCard";
import CelebrationCard from "../components/CelebrationCard";

import DurgaPanel from "../components/DurgaPanel";

import WealthForecastCard from "../components/WealthForecastCard";
import DebtFreedomCalculator from "../components/DebtFreedomCalculator";
import GoalCompletionTracker from "../components/GoalCompletionTracker";

import MemoryCenter from "../components/MemoryCenter";
import AnnualLifePlanner from "../components/AnnualLifePlanner";
import WinsCenter from "../components/WinsCenter";

import DynamicKnowledgeVault from "../components/DynamicKnowledgeVault";
import DurgaMemorySearch from "../components/DurgaMemorySearch";
import CashFlowCommandCenter from "../components/CashFlowCommandCenter";

import InvestmentCommandCenter from "../components/InvestmentCommandCenter";
import NetWorthTrendChart from "../components/NetWorthTrendChart";
import DebtFreeCountdown from "../components/DebtFreeCountdown";

import DurgaFinancialAdvisor from "../components/DurgaFinancialAdvisor";
import AssetAllocationChart from "../components/AssetAllocationChart";

import WealthForecastEngine from "../components/WealthForecastEngine";
import SIPStepUpCalculator from "../components/SIPStepUpCalculator";
import WealthScoreEngine from "../components/WealthScoreEngine";
import DebtOptimizationEngine from "../components/DebtOptimizationEngine";
import CashFlowCard from "../components/CashFlowCard";
function Dashboard() {
  return (
    <div className="p-2 md:p-0">

      <DurgaDailyDashboard />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ExecutiveSummaryCard />
        <LifeScoreCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <NetWorthCard />
        <DebtFreeCard />
        <WealthGoalCard />
      </div>

      <div className="mt-6">
        <KPICards />
      </div>

      <div className="mt-6">
        <ExecutiveCommandCenter />
      </div>

      <div className="mt-6">
        <RealDurgaAI />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <DateTimeCard />
        <NextFamilyEventCard />
        <CelebrationCard />
      </div>

      <div className="mt-6">
        <DurgaPanel />
      </div>

      <div className="mt-6">
        <WealthForecastCard />
      </div>

      <div className="mt-6">
        <DebtFreedomCalculator />
      </div>

      <div className="mt-6">
        <GoalCompletionTracker />
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
        <DynamicKnowledgeVault />
      </div>

      <div className="mt-6">
        <DurgaMemorySearch />
      </div>
<div className="mt-6">
  <CashFlowCard />
</div>
      <div className="mt-6">
        <CashFlowCommandCenter />
      </div>
<div className="mt-6">
  <InvestmentCommandCenter />
</div>
<div className="mt-6">
  <AssetAllocationChart />
</div>
<div className="mt-6">
  <NetWorthTrendChart />
</div>
<div className="mt-6">
  <DebtFreeCountdown />
</div>
<div className="mt-6">
  <DurgaFinancialAdvisor />
</div>
<div className="mt-6">
  <WealthForecastEngine />
</div>
<div className="mt-6">
  <SIPStepUpCalculator />
</div>
<div className="mt-6">
  <WealthScoreEngine />
</div>
<div className="mt-6">
  <DebtOptimizationEngine />
</div>
    </div>
  );
}

export default Dashboard;