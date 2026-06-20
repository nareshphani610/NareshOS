import { useEffect, useState } from "react";

import {
  getLatestAssets,
} from "../services/assetsService";

import {
  getLatestLiabilities,
} from "../services/liabilitiesService";

function WealthScoreEngine() {

  const [score, setScore] =
    useState({
      total: 0,
      totalAssets: 0,
      totalDebt: 0,
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
        Number(liabilities.homeLoan || 0) +
        Number(liabilities.carLoan || 0) +
        Number(liabilities.personalLoan || 0) +
        Number(liabilities.creditCard || 0);

      const netWorth =
        totalAssets -
        totalDebt;

      let wealthScore = 0;

      // Net Worth Score

      if (netWorth > 2000000)
        wealthScore += 25;
      else if (netWorth > 1000000)
        wealthScore += 15;

      // Debt Score

      if (totalDebt < 3000000)
        wealthScore += 25;
      else if (totalDebt < 6000000)
        wealthScore += 15;
      else
        wealthScore += 5;

      // Emergency Fund

      if (
        Number(assets.fd || 0) >
        150000
      )
        wealthScore += 15;

      // Investments

      if (
        Number(assets.mf || 0) >
        100000
      )
        wealthScore += 15;

      // EPF

      if (
        Number(assets.epf || 0) >
        300000
      )
        wealthScore += 10;

      // Consistency

      wealthScore += 10;

      setScore({
        total: wealthScore,
        totalAssets,
        totalDebt,
        netWorth,
      });

    }

    loadData();

  }, []);

  const grade =
    score.total >= 80
      ? "A"
      : score.total >= 60
      ? "B"
      : "C";

  let recommendation =
    "Continue building wealth";

  if (
    score.totalDebt >
    5000000
  ) {
    recommendation =
      "Focus on reducing debt before increasing investments";
  }

  return (

    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🏆 Wealth Score
      </h2>

      <div className="space-y-3">

        <p>
          📊 Score:
          {score.total}/100
        </p>

        <p>
          🎖 Grade:
          {grade}
        </p>

        <p>
          💰 Assets:
          ₹{score.totalAssets.toLocaleString("en-IN")}
        </p>

        <p>
          📉 Debt:
          ₹{score.totalDebt.toLocaleString("en-IN")}
        </p>

        <p>
          🏦 Net Worth:
          ₹{score.netWorth.toLocaleString("en-IN")}
        </p>

      </div>

      <div className="mt-6 bg-indigo-50 dark:bg-slate-800 p-4 rounded-xl">

        <h3 className="font-bold">
          Recommendation
        </h3>

        <p className="mt-2">
          {recommendation}
        </p>

      </div>

    </div>

  );
}

export default WealthScoreEngine;