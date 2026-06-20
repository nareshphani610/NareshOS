import { useEffect, useState } from "react";

import {
  getLatestAssets,
} from "../services/assetsService";

import {
  getLatestLiabilities,
} from "../services/liabilitiesService";

function ExecutiveSummaryCard() {

  const [summary, setSummary] =
    useState({
      assets: 0,
      debt: 0,
      netWorth: 0,
    });

  useEffect(() => {

    async function loadData() {

      const assetResult =
        await getLatestAssets();

      const liabilityResult =
        await getLatestLiabilities();

      const assets =
        assetResult.data?.[0] || {};

      const liabilities =
        liabilityResult.data?.[0] || {};

      const totalAssets =
        Number(assets.house || 0) +
        Number(assets.epf || 0) +
        Number(assets.fd || 0) +
        Number(assets.mf || 0);

      const totalDebt =
        Number(
          liabilities.homeLoan || 0
        ) +
        Number(
          liabilities.carLoan || 0
        ) +
        Number(
          liabilities.personalLoan || 0
        ) +
        Number(
          liabilities.creditCard || 0
        );

      setSummary({
        assets: totalAssets,
        debt: totalDebt,
        netWorth:
          totalAssets -
          totalDebt,
      });
    }

    loadData();

  }, []);

  const hour =
    new Date().getHours();

  let greeting =
    "Good Evening";

  if (hour < 12)
    greeting =
      "Good Morning";

  else if (
    hour < 18
  )
    greeting =
      "Good Afternoon";

  return (

    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-3xl font-bold">
        🪷 {greeting} Naresh
      </h2>

      <p className="mt-2">
        {new Date().toLocaleDateString(
          "en-IN"
        )}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">

        <div>

          <p className="text-sm">
            Assets
          </p>

          <p className="font-bold">
            ₹
            {summary.assets.toLocaleString()}
          </p>

        </div>

        <div>

          <p className="text-sm">
            Debt
          </p>

          <p className="font-bold">
            ₹
            {summary.debt.toLocaleString()}
          </p>

        </div>

        <div>

          <p className="text-sm">
            Net Worth
          </p>

          <p className="font-bold">
            ₹
            {summary.netWorth.toLocaleString()}
          </p>

        </div>

      </div>

      <div className="mt-4">

        <p>
          🎯 Focus:
          Increase Net Worth &
          Reduce Debt
        </p>

      </div>

    </div>

  );
}

export default ExecutiveSummaryCard;