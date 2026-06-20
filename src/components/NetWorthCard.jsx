import { useEffect, useState } from "react";

import {
  getLatestAssets,
} from "../services/assetsService";

import {
  getLatestLiabilities,
} from "../services/liabilitiesService";

function NetWorthCard() {

  const [data, setData] =
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
        Number(liabilities.homeLoan || 0) +
        Number(liabilities.carLoan || 0) +
        Number(liabilities.personalLoan || 0) +
        Number(liabilities.creditCard || 0);

      setData({
        assets: totalAssets,
        debt: totalDebt,
        netWorth:
          totalAssets -
          totalDebt,
      });

    }

    loadData();

  }, []);

  return (

    <div className="bg-blue-500 text-white p-5 rounded-3xl shadow-lg">

      <h3 className="text-lg font-semibold">
        💰 Net Worth
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        ₹
        {data.netWorth.toLocaleString(
          "en-IN"
        )}
      </h2>

      <div className="mt-4 text-sm space-y-1">

        <p>
          Assets:
          ₹
          {data.assets.toLocaleString(
            "en-IN"
          )}
        </p>

        <p>
          Debt:
          ₹
          {data.debt.toLocaleString(
            "en-IN"
          )}
        </p>

      </div>

    </div>

  );
}

export default NetWorthCard;