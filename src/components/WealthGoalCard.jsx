import { useEffect, useState } from "react";

function WealthGoalCard() {
  const [assets, setAssets] = useState(0);
  const [progress, setProgress] = useState(0);

  const calculateAssets = () => {
    const house = Number(localStorage.getItem("house") || 6500000);
    const epf = Number(localStorage.getItem("epf") || 329978);
    const fd = Number(localStorage.getItem("fd") || 150000);
    const mf = Number(localStorage.getItem("mf") || 145000);

    const totalAssets = house + epf + fd + mf;

    setAssets(totalAssets);

    const goal = 10000000; // ₹1 Crore

    setProgress((totalAssets / goal) * 100);
  };

  useEffect(() => {
    calculateAssets();
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        💰 ₹1 Crore Wealth Journey
      </h2>

      <p>
        Current Assets: ₹{assets.toLocaleString("en-IN")}
      </p>

      <p className="mt-2">
        Progress: {progress.toFixed(1)}%
      </p>

      <div className="bg-gray-200 h-4 rounded-full mt-3">
        <div
          className="bg-purple-500 h-4 rounded-full"
          style={{
            width: `${Math.min(progress, 100)}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default WealthGoalCard;