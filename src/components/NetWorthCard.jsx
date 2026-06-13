import { useState, useEffect } from "react";

function NetWorthCard() {
  const [netWorth, setNetWorth] = useState(0);

  const calculateNetWorth = () => {
    const house = parseFloat(localStorage.getItem("house") || 6500000);
    const epf = parseFloat(localStorage.getItem("epf") || 329978);
    const fd = parseFloat(localStorage.getItem("fd") || 150000);
    const mf = parseFloat(localStorage.getItem("mf") || 145000);

    const homeLoan = parseFloat(localStorage.getItem("homeLoan") || 4765000);
    const carLoan = parseFloat(localStorage.getItem("carLoan") || 657000);
    const personalLoan = parseFloat(localStorage.getItem("personalLoan") || 95642);
    const creditCard = parseFloat(localStorage.getItem("creditCard") || 89000);

    const totalAssets = house + epf + fd + mf;
    const totalLiabilities =
      homeLoan + carLoan + personalLoan + creditCard;

    setNetWorth(totalAssets - totalLiabilities);
  };

  useEffect(() => {
    calculateNetWorth();
  }, []);

  return (
    <div className="bg-blue-500 text-white p-5 rounded-3xl">
      <h3 className="text-lg font-semibold">
        Auto Net Worth
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        ₹{netWorth.toLocaleString("en-IN")}
      </h2>

      <p className="mt-2 text-sm">
        Assets - Liabilities
      </p>
    </div>
  );
}

export default NetWorthCard;