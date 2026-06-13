import { useEffect, useState } from "react";

function DebtFreeCard() {
  const [currentDebt, setCurrentDebt] = useState(0);
  const [progress, setProgress] = useState(0);

  const calculateDebt = () => {
    const homeLoan = Number(localStorage.getItem("homeLoan") || 4765000);
    const carLoan = Number(localStorage.getItem("carLoan") || 657000);
    const personalLoan = Number(localStorage.getItem("personalLoan") || 95642);
    const creditCard = Number(localStorage.getItem("creditCard") || 89000);

    const debt =
      homeLoan +
      carLoan +
      personalLoan +
      creditCard;

    setCurrentDebt(debt);

    const originalDebt = 6000000;

    const paidOff = originalDebt - debt;

    const percentage = Math.max(
      0,
      Math.min(100, (paidOff / originalDebt) * 100)
    );

    setProgress(percentage);
  };

  useEffect(() => {
    calculateDebt();
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        🎯 Debt Free Journey
      </h2>

      <p className="mb-2">
        Current Debt: ₹{currentDebt.toLocaleString("en-IN")}
      </p>

      <p className="mb-2">
        Progress: {progress.toFixed(1)}%
      </p>

      <div className="bg-gray-200 h-4 rounded-full">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>
    </div>
  );
}

export default DebtFreeCard;