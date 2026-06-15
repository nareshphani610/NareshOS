import { useState } from "react";

function WinsCenter() {

  const [wins] = useState([

    {
      title: "☁️ Supabase Cloud Integration",
      date: "2026",
      category: "Technology",
    },

    {
      title: "📈 Wealth Forecast Engine Built",
      date: "2026",
      category: "Wealth",
    },

    {
      title: "📉 Debt Freedom Calculator Built",
      date: "2026",
      category: "Wealth",
    },

    {
      title: "🤖 Durga AI 3.0 Released",
      date: "2026",
      category: "AI",
    },

    {
      title: "🪷 NareshOS v4.1 Released",
      date: "2026",
      category: "Platform",
    },

  ]);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🏆 Wins & Achievements Center
      </h2>

      <div className="space-y-4">

        {wins.map((win, index) => (

          <div
            key={index}
            className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-xl"
          >

            <p className="font-bold">
              {win.title}
            </p>

            <p className="text-sm text-gray-500">
              {win.category}
            </p>

            <p className="text-sm">
              {win.date}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WinsCenter;