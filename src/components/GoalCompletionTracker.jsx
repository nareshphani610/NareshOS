import { useEffect, useState } from "react";

function GoalCompletionTracker() {

  const [goals, setGoals] = useState({
    debtFree: 0,
    wealthGoal: 0,
    az104: 0,
    bhagavatgitha: 10,
    overall: 0,
  });

  useEffect(() => {

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const totalDebt =
      1900000 +
      Number(localStorage.getItem("homeLoan") || 0) +
      Number(localStorage.getItem("carLoan") || 0) +
      Number(localStorage.getItem("personalLoan") || 0) +
      Number(localStorage.getItem("creditCard") || 0);

    const debtFree =
      Math.max(
        0,
        100 -
        (totalDebt / 7458125) * 100
      );

    const wealthGoal =
      Math.min(
        100,
        (assets / 10000000) * 100
      );

    const az104 =
      Number(
        localStorage.getItem("az104") || 40
      );

    const bhagavatgitha = 10;

    const overall =
      (
        debtFree +
        wealthGoal +
        az104 +
        bhagavatgitha
      ) / 4;

    setGoals({
      debtFree,
      wealthGoal,
      az104,
      bhagavatgitha,
      overall,
    });

  }, []);

  const ProgressBar = ({
    label,
    value,
  }) => (
    <div className="mb-4">

      <div className="flex justify-between mb-1">

        <span>{label}</span>

        <span>
          {value.toFixed(1)}%
        </span>

      </div>

      <div className="bg-gray-200 h-4 rounded-full">

        <div
          className="bg-indigo-600 h-4 rounded-full"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        🎯 Goal Completion Tracker
      </h2>

      <ProgressBar
        label="💳 Debt Freedom"
        value={goals.debtFree}
      />

      <ProgressBar
        label="💰 ₹1 Crore Goal"
        value={goals.wealthGoal}
      />

      <ProgressBar
        label="📘 AZ-104"
        value={goals.az104}
      />

      <ProgressBar
        label="📖 Bhagavatgitha"
        value={goals.bhagavatgitha}
      />

      <div className="mt-8 bg-green-50 p-4 rounded-xl">

        <p className="text-lg font-bold">
          🏆 Overall NareshOS Score
        </p>

        <p className="text-4xl font-bold text-green-600">
          {goals.overall.toFixed(1)}%
        </p>

      </div>

    </div>
  );
}

export default GoalCompletionTracker;