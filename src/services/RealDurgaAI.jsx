import { useState } from "react";

function RealDurgaAI() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askDurga = () => {

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const debt =
      1900000 +
      Number(localStorage.getItem("homeLoan") || 0) +
      Number(localStorage.getItem("carLoan") || 0) +
      Number(localStorage.getItem("personalLoan") || 0) +
      Number(localStorage.getItem("creditCard") || 0);

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    const q =
      question.toLowerCase();

    // Debt Questions

    if (
      q.includes("debt") ||
      q.includes("loan")
    ) {

      setAnswer(
        `You currently owe ₹${debt.toLocaleString("en-IN")}. Focus on Credit Card → Personal Loan → Car Loan before attacking home loans.`
      );

      return;
    }

    // Wealth Questions

    if (
      q.includes("wealth") ||
      q.includes("crore") ||
      q.includes("investment")
    ) {

      const progress =
        ((assets / 10000000) * 100)
          .toFixed(1);

      setAnswer(
        `You are ${progress}% toward your ₹1 Crore goal. Continue SIP ₹25,000 and eliminate high-interest debt.`
      );

      return;
    }

    // AZ-104 Questions

    if (
      q.includes("az-104") ||
      q.includes("azure")
    ) {

      setAnswer(
        `Your AZ-104 progress is ${az104}%. Focus on Networking, Storage, Compute, Identity and Backup.`
      );

      return;
    }

    // Priority Questions

    if (
      q.includes("priority") ||
      q.includes("focus") ||
      q.includes("today")
    ) {

      setAnswer(
        `Today's Priority:\n1. Credit Card Closure\n2. AZ-104 Study\n3. Wealth Building\n4. Family Time`
      );

      return;
    }

    // Default

    setAnswer(
      "I understand Wealth, Debt, Goals and AZ-104 topics. Ask me about them."
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🤖 Real Durga AI Assistant
      </h2>

      <textarea
        rows="3"
        className="w-full border p-3 rounded-xl"
        placeholder="Ask Durga..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      <button
        onClick={askDurga}
        className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-xl"
      >
        Ask Durga
      </button>

      <div className="mt-6 bg-slate-50 p-4 rounded-xl whitespace-pre-wrap">

        {answer ||
          "Ask me about debt, wealth, goals or AZ-104."}

      </div>

    </div>
  );
}

export default RealDurgaAI;