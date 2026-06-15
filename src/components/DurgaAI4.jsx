import { useEffect, useState } from "react";

function DurgaAI4() {

  const [briefing, setBriefing] =
    useState([]);

  useEffect(() => {

    const items = [];

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const wealthProgress =
      ((assets / 10000000) * 100).toFixed(1);

    const creditCard =
      Number(localStorage.getItem("creditCard") || 0);

    const personalLoan =
      Number(localStorage.getItem("personalLoan") || 0);

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    items.push(
      `💰 Wealth Progress: ${wealthProgress}% of ₹1 Crore Goal`
    );

    if (creditCard > 0) {
      items.push(
        `🔴 Priority: Close Credit Card ₹${creditCard.toLocaleString("en-IN")}`
      );
    }

    if (personalLoan > 0) {
      items.push(
        `🟠 Personal Loan Remaining ₹${personalLoan.toLocaleString("en-IN")}`
      );
    }

    if (az104 < 100) {
      items.push(
        `📘 AZ-104 Progress ${az104}% - Study 1 module today`
      );
    }

    items.push(
      "📖 Bhagavatgitha Project - Add content this week"
    );

    items.push(
      "❤️ Family First - Review upcoming celebrations"
    );

    items.push(
      "🚀 Focus on debt reduction and wealth building"
    );

    setBriefing(items);

  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-2">
        🤖 Durga AI 4.0
      </h2>

      <p className="text-gray-500 mb-6">
        Daily Executive Briefing
      </p>

      <div className="space-y-3">

        {briefing.map((item, index) => (

          <div
            key={index}
            className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-xl"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default DurgaAI4;