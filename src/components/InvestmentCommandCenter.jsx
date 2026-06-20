import { useEffect, useState } from "react";

function InvestmentCommandCenter() {

  const [investments, setInvestments] =
    useState({
      stocks: 60000,
      mutualFunds: 145000,
      epf: 329978,
      fd: 155000,
    });

  const totalInvestments =
    investments.stocks +
    investments.mutualFunds +
    investments.epf +
    investments.fd;

  const wealthGoal = 10000000;

  const progress =
    (
      (totalInvestments /
        wealthGoal) *
      100
    ).toFixed(1);

  const investmentScore =
    progress > 50
      ? "A"
      : progress > 25
      ? "B"
      : "C";

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "investmentData"
      );

    if (saved) {
      setInvestments(
        JSON.parse(saved)
      );
    }

  }, []);

  const saveData = () => {

    localStorage.setItem(
      "investmentData",
      JSON.stringify(
        investments
      )
    );

    alert(
      "✅ Investments Saved"
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📈 Investment Command Center
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label>
            📊 Stocks
          </label>

          <input
            type="number"
            value={investments.stocks}
            onChange={(e) =>
              setInvestments({
                ...investments,
                stocks: Number(
                  e.target.value
                ),
              })
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label>
            📈 Mutual Funds
          </label>

          <input
            type="number"
            value={
              investments.mutualFunds
            }
            onChange={(e) =>
              setInvestments({
                ...investments,
                mutualFunds:
                  Number(
                    e.target.value
                  ),
              })
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label>
            🏦 EPF
          </label>

          <input
            type="number"
            value={investments.epf}
            onChange={(e) =>
              setInvestments({
                ...investments,
                epf: Number(
                  e.target.value
                ),
              })
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label>
            💵 FD
          </label>

          <input
            type="number"
            value={investments.fd}
            onChange={(e) =>
              setInvestments({
                ...investments,
                fd: Number(
                  e.target.value
                ),
              })
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

      </div>

      <div className="mt-6 space-y-3">

        <h3 className="text-xl font-bold">
          💰 Total Investments:
          ₹{totalInvestments.toLocaleString()}
        </h3>

        <h3 className="text-xl font-bold">
          🎯 ₹1 Crore Progress:
          {progress}%
        </h3>

        <h3 className="text-xl font-bold">
          🧠 Investment Score:
          {investmentScore}
        </h3>

      </div>

      <button
        onClick={saveData}
        className="
        mt-6
        bg-green-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Save Investments
      </button>

    </div>
  );
}

export default InvestmentCommandCenter;