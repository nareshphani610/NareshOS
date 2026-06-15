import { useEffect, useState } from "react";

function DurgaAI3() {

  const [recommendations, setRecommendations] =
    useState([]);

  useEffect(() => {

    const items = [];

    const creditCard =
      Number(localStorage.getItem("creditCard") || 0);

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    if (creditCard > 0) {
      items.push(
        "🔴 Close Credit Card before any major investment."
      );
    }

    if (az104 < 70) {
      items.push(
        "📘 Complete 3 AZ-104 study sessions this week."
      );
    }

    if (assets < 10000000) {

      const remaining =
        10000000 - assets;

      items.push(
        `💰 ₹1 Crore Goal Remaining: ₹${remaining.toLocaleString("en-IN")}`
      );
    }

    items.push(
      "📖 Add Bhagavatgitha content this week."
    );

    items.push(
      "❤️ Schedule dedicated family time."
    );

    setRecommendations(items);

  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        🤖 Durga AI 3.0
      </h2>

      <div className="space-y-3">

        {recommendations.map(
          (item, index) => (
            <div
              key={index}
              className="border-l-4 border-indigo-500 pl-4 py-2"
            >
              {item}
            </div>
          )
        )}

      </div>

    </div>
  );
}

export default DurgaAI3;