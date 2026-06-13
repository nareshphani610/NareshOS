import { useEffect, useState } from "react";
import GoalEngine from "../components/GoalEngine";

function Analytics() {
  const [assets, setAssets] = useState(0);
  const [debt, setDebt] = useState(0);
  const [netWorth, setNetWorth] = useState(0);

  useEffect(() => {

    const totalAssets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const totalDebt =
      Number(localStorage.getItem("homeLoan") || 0) +
      Number(localStorage.getItem("carLoan") || 0) +
      Number(localStorage.getItem("personalLoan") || 0) +
      Number(localStorage.getItem("creditCard") || 0);

    setAssets(totalAssets);
    setDebt(totalDebt);
    setNetWorth(totalAssets - totalDebt);

  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold">
        📊 Analytics Center
      </h1>

      <p className="text-gray-500 mt-2">
        Wealth, Goals and Life Progress Analytics
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💰 Total Assets
          </h2>

          <p className="text-3xl font-bold">
            ₹{assets.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            📉 Total Debt
          </h2>

          <p className="text-3xl font-bold">
            ₹{debt.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💎 Net Worth
          </h2>

          <p className="text-3xl font-bold">
            ₹{netWorth.toLocaleString("en-IN")}
          </p>
        </div>
<div className="mt-6">
  <GoalEngine />
</div>
      </div>

    </div>
  );
}

export default Analytics;