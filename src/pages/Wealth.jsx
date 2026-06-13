import AssetsCard from "../components/AssetsCard";
import LiabilitiesCard from "../components/LiabilitiesCard";
import GoalsCard from "../components/GoalsCard";

import NetWorthCard from "../components/NetWorthCard";
import DebtFreeCard from "../components/DebtFreeCard";
import WealthGoalCard from "../components/WealthGoalCard";

import WealthHistory from "../components/WealthHistory";
import WealthTrendCard from "../components/WealthTrendCard";

function Wealth() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        💰 Wealth Center
      </h1>

      <p className="text-gray-500 mt-2">
        Manage Assets, Liabilities and Financial Goals
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <NetWorthCard />

        <DebtFreeCard />

        <WealthGoalCard />

      </div>

      {/* Wealth Management */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <AssetsCard />

        <LiabilitiesCard />

        <GoalsCard />

      </div>

      {/* Wealth History */}
      <div className="mt-6">
        <WealthHistory />
      </div>

      {/* Wealth Trend */}
      <div className="mt-6">
        <WealthTrendCard />
      </div>

    </div>
  );
}

export default Wealth;