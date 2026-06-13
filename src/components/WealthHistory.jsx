import { useEffect, useState } from "react";

function WealthHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(
        localStorage.getItem("wealthHistory")
      ) || [];

    setHistory(stored);
  }, []);

  const saveSnapshot = () => {
    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const debt =
      Number(localStorage.getItem("homeLoan") || 0) +
      Number(localStorage.getItem("carLoan") || 0) +
      Number(localStorage.getItem("personalLoan") || 0) +
      Number(localStorage.getItem("creditCard") || 0);

    const netWorth = assets - debt;

    const snapshot = {
      month: new Date().toLocaleDateString(
        "en-IN",
        {
          month: "short",
          year: "numeric",
        }
      ),
      netWorth,
    };

    const updated = [...history, snapshot];

    localStorage.setItem(
      "wealthHistory",
      JSON.stringify(updated)
    );

    setHistory(updated);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        📈 Wealth History
      </h2>

      <button
        onClick={saveSnapshot}
        className="bg-green-600 text-white px-4 py-2 rounded-xl"
      >
        Save Monthly Snapshot
      </button>

      <div className="mt-4 space-y-2">

        {history.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.month}</span>

            <span>
              ₹{item.netWorth.toLocaleString("en-IN")}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default WealthHistory;