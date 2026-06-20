import { useState } from "react";

function DebtOptimizationEngine() {

  const [amount, setAmount] =
    useState(100000);

  const debts = [

    {
      name: "Credit Card",
      balance: 89000,
      rate: 36,
      emi: 0,
    },

    {
      name: "Personal Loan",
      balance: 95125,
      rate: 12.5,
      emi: 9132,
    },

    {
      name: "Car Loan",
      balance: 654000,
      rate: 9,
      emi: 18850,
    },

    {
      name: "Mother Home Loan",
      balance: 1900000,
      rate: 10,
      emi: 34275,
    },

    {
      name: "Home Loan",
      balance: 4720000,
      rate: 7.4,
      emi: 34075,
    },

  ];

  const sorted =
    [...debts].sort(
      (a, b) =>
        b.rate - a.rate
    );

  const recommendation =
    sorted.find(
      (d) =>
        d.balance > 0
    );

  const estimatedSaving =
    (
      amount *
      recommendation.rate /
      100
    ).toFixed(0);

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🎯 Debt Optimization Engine
      </h2>

      <div className="space-y-4">

        <div>

          <label>
            Available Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full border p-2 rounded-lg"
          />

        </div>

        <div className="bg-green-100 dark:bg-slate-800 p-4 rounded-xl">

          <h3 className="font-bold">
            Best Use Of Money
          </h3>

          <p className="mt-2">
            🔥 Pay Off:
            {recommendation.name}
          </p>

          <p>
            Interest Rate:
            {recommendation.rate}%
          </p>

          <p>
            Outstanding:
            ₹{recommendation.balance.toLocaleString()}
          </p>

          <p>
            Estimated Annual
            Interest Saved:
            ₹{Number(
              estimatedSaving
            ).toLocaleString()}
          </p>

        </div>

      </div>

    </div>
  );
}

export default DebtOptimizationEngine;