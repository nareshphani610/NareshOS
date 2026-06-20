import { useEffect, useState } from "react";

function DurgaFinancialAdvisor() {

  const [advice, setAdvice] =
    useState([]);

  useEffect(() => {

    const insights = [];

    insights.push(
      "🔥 Priority 1: Clear ₹89,000 credit card debt first."
    );

    insights.push(
      "💼 Priority 2: Close personal loan before increasing investments."
    );

    insights.push(
      "🚗 Priority 3: Finish car loan to free EMI."
    );

    insights.push(
      "📈 Continue SIPs for long-term wealth creation."
    );

    insights.push(
      "🎯 Focus on ₹1 Crore wealth target."
    );

    setAdvice(insights);

  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🤖 Durga Financial Advisor
      </h2>

      <div className="space-y-4">

        {advice.map(
          (item, index) => (
            <div
              key={index}
              className="
              bg-slate-100
              dark:bg-slate-800
              p-4
              rounded-xl
              "
            >
              {item}
            </div>
          )
        )}

      </div>

    </div>
  );
}

export default DurgaFinancialAdvisor;