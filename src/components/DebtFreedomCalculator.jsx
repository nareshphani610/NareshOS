import { useEffect, useState } from "react";

function DebtFreedomCalculator() {

  const [debtData, setDebtData] =
    useState(null);

  useEffect(() => {

    const motherHomeLoan = 1900000;

    const homeLoan =
      Number(
        localStorage.getItem("homeLoan") ||
        4720000
      );

    const carLoan =
      Number(
        localStorage.getItem("carLoan") ||
        654000
      );

    const personalLoan =
      Number(
        localStorage.getItem("personalLoan") ||
        95125
      );

    const creditCard =
      Number(
        localStorage.getItem("creditCard") ||
        89000
      );

    const totalDebt =
      motherHomeLoan +
      homeLoan +
      carLoan +
      personalLoan +
      creditCard;

    const releasedEMI =
      34172 +
      9132;

    setDebtData({

      totalDebt,

      nextLoan:
        creditCard > 0
          ? "💳 Credit Card"
          : personalLoan > 0
          ? "💼 Personal Loan"
          : carLoan > 0
          ? "🚗 Car Loan"
          : "🏠 Home Loan",

      releasedEMI,

      roadmap: [

        "2026 → Close Credit Card",

        "2026 → Close Personal Loan",

        "2027 → Close Car Loan",

        "2028-2029 → Close Mother Home Loan",

        "2032+ → Aggressively Reduce Home Loan",

      ],

    });

  }, []);

  if (!debtData) {

    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        📉 Debt Freedom Calculator
      </h2>

      <div className="space-y-4">

        <div className="bg-red-50 p-4 rounded-xl">

          <p className="text-gray-600">
            Total Debt
          </p>

          <p className="text-2xl font-bold text-red-600">
            ₹
            {debtData.totalDebt.toLocaleString(
              "en-IN"
            )}
          </p>

        </div>

        <div className="bg-yellow-50 p-4 rounded-xl">

          <p className="text-gray-600">
            Next Loan To Close
          </p>

          <p className="text-xl font-bold">
            {debtData.nextLoan}
          </p>

        </div>

        <div className="bg-green-50 p-4 rounded-xl">

          <p className="text-gray-600">
            EMI Released After
            Personal + Car Loan Closure
          </p>

          <p className="text-xl font-bold text-green-600">
            ₹
            {debtData.releasedEMI.toLocaleString(
              "en-IN"
            )}
            /month
          </p>

        </div>

        <div className="bg-blue-50 p-4 rounded-xl">

          <p className="font-bold mb-3">
            🎯 Debt Freedom Roadmap
          </p>

          <ul className="space-y-2">

            {debtData.roadmap.map(
              (item, index) => (

                <li key={index}>
                  ✅ {item}
                </li>

              )
            )}

          </ul>

        </div>

        <div className="bg-purple-50 p-4 rounded-xl">

          <p className="font-bold mb-2">
            🤖 Durga Recommendation
          </p>

          <p>
            Close Credit Card →
            Personal Loan →
            Car Loan →
            Mother Home Loan →
            Your Home Loan
          </p>

        </div>

      </div>

    </div>
  );
}

export default DebtFreedomCalculator;