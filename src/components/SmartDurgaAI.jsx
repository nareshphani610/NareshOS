import { useEffect, useState } from "react";

function SmartDurgaAI() {

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {

    const advice = [];

    const creditCard =
      Number(localStorage.getItem("creditCard") || 0);

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    const house =
      Number(localStorage.getItem("house") || 0);

    const epf =
      Number(localStorage.getItem("epf") || 0);

    const fd =
      Number(localStorage.getItem("fd") || 0);

    const mf =
      Number(localStorage.getItem("mf") || 0);

    const assets =
      house + epf + fd + mf;

    if (creditCard > 0) {
      advice.push(
        `💳 Priority #1: Close Credit Card Debt (₹${creditCard.toLocaleString("en-IN")})`
      );
    }

    if (az104 < 80) {
      advice.push(
        `📘 Priority #2: AZ-104 Progress is ${az104}%`
      );
    }

    if (assets < 10000000) {
      const remaining =
        10000000 - assets;

      advice.push(
        `💰 ₹1 Crore Goal Remaining: ₹${remaining.toLocaleString("en-IN")}`
      );
    }

    advice.push(
      "📖 Continue Bhagavatgitha Dataset Collection"
    );

    advice.push(
      "❤️ Spend quality time with family"
    );

    advice.push(
      "🙏 Daily spiritual practice"
    );

    setRecommendations(advice);

  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        🤖 Smart Durga AI Engine
      </h2>

      <div className="space-y-4">

        {recommendations.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-indigo-500 pl-4"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default SmartDurgaAI;