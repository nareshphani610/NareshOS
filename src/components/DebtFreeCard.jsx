import { useEffect, useState } from "react";

import {
  getLatestLiabilities,
} from "../services/liabilitiesService";

function DebtFreeCard() {

  const [currentDebt, setCurrentDebt] =
    useState(0);

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {

    async function loadDebt() {

      const result =
        await getLatestLiabilities();

      const liabilities =
        result.data?.[0] || {};

      const debt =
        Number(liabilities.homeLoan || 0) +
        Number(liabilities.carLoan || 0) +
        Number(liabilities.personalLoan || 0) +
        Number(liabilities.creditCard || 0);

      setCurrentDebt(debt);

      /*
        First saved debt becomes the baseline.
        You can later move this to Settings.
      */

      const originalDebt =
        5600000;

      const paidOff =
        originalDebt - debt;

      const percentage =
        Math.max(
          0,
          Math.min(
            100,
            (paidOff /
              originalDebt) *
              100
          )
        );

      setProgress(
        percentage
      );
    }

    loadDebt();

  }, []);

  return (

    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        🎯 Debt Free Journey
      </h2>

      <p className="mb-2">
        Current Debt:
        ₹
        {currentDebt.toLocaleString(
          "en-IN"
        )}
      </p>

      <p className="mb-2">
        Progress:
        {progress.toFixed(1)}%
      </p>

      <div className="bg-gray-200 h-4 rounded-full">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="mt-4 text-sm">

        <p>
          Debt Remaining:
          ₹
          {currentDebt.toLocaleString(
            "en-IN"
          )}
        </p>

      </div>

    </div>

  );
}

export default DebtFreeCard;