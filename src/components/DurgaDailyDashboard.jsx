import { useEffect, useState } from "react";

function DurgaDailyDashboard() {

  const [summary, setSummary] =
    useState({});

  useEffect(() => {

    const assets =
      Number(localStorage.getItem("house") || 6500000) +
      Number(localStorage.getItem("epf") || 329978) +
      Number(localStorage.getItem("fd") || 155000) +
      Number(localStorage.getItem("mf") || 145000);

    const debt =
      Number(localStorage.getItem("homeLoan") || 4765000) +
      Number(localStorage.getItem("carLoan") || 654000) +
      Number(localStorage.getItem("personalLoan") || 95125) +
      Number(localStorage.getItem("creditCard") || 89000) +
      1900000;

    const netWorth =
      assets - debt;

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    setSummary({
      assets,
      debt,
      netWorth,
      az104,
    });

  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl">

      <h1 className="text-4xl font-bold mb-2">
        🌅 Good Morning Naresh
      </h1>

      <p className="opacity-90 mb-6">
        Welcome back to NareshOS
      </p>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/20 rounded-xl p-4">
          <p>💰 Net Worth</p>
          <h2 className="text-2xl font-bold">
            ₹{summary.netWorth?.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="bg-white/20 rounded-xl p-4">
          <p>📉 Total Debt</p>
          <h2 className="text-2xl font-bold">
            ₹{summary.debt?.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="bg-white/20 rounded-xl p-4">
          <p>📘 AZ-104 Progress</p>
          <h2 className="text-2xl font-bold">
            {summary.az104}%
          </h2>
        </div>

        <div className="bg-white/20 rounded-xl p-4">
          <p>🎯 Top Priority</p>
          <h2 className="text-xl font-bold">
            Close Credit Card
          </h2>
        </div>

      </div>

      <div className="mt-6 bg-white/20 rounded-xl p-4">

        <h3 className="font-bold mb-2">
          🤖 Durga Recommendation
        </h3>

        <ul className="space-y-2">

          <li>
            ✅ Pay off Credit Card first
          </li>

          <li>
            ✅ Study AZ-104 for 1 hour
          </li>

          <li>
            ✅ Continue SIP investments
          </li>

          <li>
            ✅ Review monthly cash flow
          </li>

        </ul>

      </div>

    </div>
  );
}

export default DurgaDailyDashboard;