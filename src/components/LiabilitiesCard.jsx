import { useState, useEffect } from "react";

function LiabilitiesCard() {

  const [homeLoan, setHomeLoan] = useState("");
  const [carLoan, setCarLoan] = useState("");
  const [personalLoan, setPersonalLoan] = useState("");
  const [creditCard, setCreditCard] = useState("");

  useEffect(() => {
    setHomeLoan(localStorage.getItem("homeLoan") || "4765000");
    setCarLoan(localStorage.getItem("carLoan") || "657000");
    setPersonalLoan(localStorage.getItem("personalLoan") || "95642");
    setCreditCard(localStorage.getItem("creditCard") || "89000");
  }, []);

  const saveLiabilities = () => {
    localStorage.setItem("homeLoan", homeLoan);
    localStorage.setItem("carLoan", carLoan);
    localStorage.setItem("personalLoan", personalLoan);
    localStorage.setItem("creditCard", creditCard);

    alert("Liabilities Saved Successfully");
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        📉 Liabilities
      </h2>

      <div className="space-y-3">

        <div>
          <label>🏠 Home Loan</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={homeLoan}
            onChange={(e) => setHomeLoan(e.target.value)}
          />
        </div>

        <div>
          <label>🚗 Car Loan</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={carLoan}
            onChange={(e) => setCarLoan(e.target.value)}
          />
        </div>

        <div>
          <label>💼 Personal Loan</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={personalLoan}
            onChange={(e) => setPersonalLoan(e.target.value)}
          />
        </div>

        <div>
          <label>💳 Credit Card</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
          />
        </div>

        <button
          onClick={saveLiabilities}
          className="bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Save Liabilities
        </button>

      </div>
    </div>
  );
}

export default LiabilitiesCard;