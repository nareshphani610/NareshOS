import { useEffect, useState } from "react";

function SmartDurgaAI2() {

  const [insights, setInsights] = useState([]);

  useEffect(() => {

    const results = [];

    const creditCard =
      Number(localStorage.getItem("creditCard") || 0);

    const homeLoan =
      Number(localStorage.getItem("homeLoan") || 0);

    const carLoan =
      Number(localStorage.getItem("carLoan") || 0);

    const personalLoan =
      Number(localStorage.getItem("personalLoan") || 0);

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const totalDebt =
      homeLoan +
      carLoan +
      personalLoan +
      creditCard;

    const netWorth =
      assets - totalDebt;

    if (creditCard > 50000) {
      results.push({
        type: "critical",
        message:
          `🔴 Credit Card Debt Alert: ₹${creditCard.toLocaleString("en-IN")}`
      });
    }

    if (az104 < 70) {
      results.push({
        type: "focus",
        message:
          `🟡 AZ-104 Progress Only ${az104}%`
      });
    }

    results.push({
      type: "wealth",
      message:
        `💰 Net Worth: ₹${netWorth.toLocaleString("en-IN")}`
    });

    results.push({
      type: "goal",
      message:
        `🎯 ₹1 Crore Goal Remaining: ₹${(10000000 - assets).toLocaleString("en-IN")}`
    });

    if (totalDebt > 0) {
      results.push({
        type: "debt",
        message:
          `🏠 Total Debt: ₹${totalDebt.toLocaleString("en-IN")}`
      });
    }

    results.push({
      type: "spiritual",
      message:
        "🪷 Continue Bhagavatgitha Project Progress"
    });

    setInsights(results);

  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        🤖 Durga AI 2.0
      </h2>

      <div className="space-y-4">

        {insights.map((item, index) => (

          <div
            key={index}
            className="border-l-4 border-indigo-500 pl-4 py-2"
          >
            {item.message}
          </div>

        ))}

      </div>

    </div>
  );
}

export default SmartDurgaAI2;