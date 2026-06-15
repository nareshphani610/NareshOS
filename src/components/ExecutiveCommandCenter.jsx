import { useEffect, useState } from "react";

function ExecutiveCommandCenter() {

  const [data, setData] =
    useState(null);

  useEffect(() => {

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const debt =
      1900000 +
      Number(localStorage.getItem("homeLoan") || 0) +
      Number(localStorage.getItem("carLoan") || 0) +
      Number(localStorage.getItem("personalLoan") || 0) +
      Number(localStorage.getItem("creditCard") || 0);

    const netWorth =
      assets - debt;

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    const wealthGoal =
      Math.min(
        100,
        (assets / 10000000) * 100
      );

    const durgaPriority =
      Number(localStorage.getItem("creditCard") || 0) > 0
        ? "Close Credit Card"
        : "Continue Wealth Building";

    setData({
      assets,
      debt,
      netWorth,
      az104,
      wealthGoal,
      durgaPriority,
    });

  }, []);

  if (!data) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📊 Executive Command Center
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-green-50 p-4 rounded-xl">
          <p>💰 Assets</p>
          <p className="text-xl font-bold">
            ₹{data.assets.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          <p>📉 Debt</p>
          <p className="text-xl font-bold">
            ₹{data.debt.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <p>💎 Net Worth</p>
          <p className="text-xl font-bold">
            ₹{data.netWorth.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl">
          <p>🎯 ₹1 Crore Goal</p>
          <p className="text-xl font-bold">
            {data.wealthGoal.toFixed(1)}%
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl">
          <p>📘 AZ-104</p>
          <p className="text-xl font-bold">
            {data.az104}%
          </p>
        </div>

        <div className="bg-indigo-50 p-4 rounded-xl">
          <p>🤖 Durga Priority</p>
          <p className="text-sm font-bold">
            {data.durgaPriority}
          </p>
        </div>

      </div>

      <div className="mt-6 bg-slate-100 p-4 rounded-xl">

        <h3 className="font-bold mb-2">
          🚀 Executive Summary
        </h3>

        <p>
          Focus on closing high-interest debt,
          continue SIP investments, complete AZ-104,
          and advance the Bhagavatgitha project.
        </p>

      </div>

    </div>
  );
}

export default ExecutiveCommandCenter;