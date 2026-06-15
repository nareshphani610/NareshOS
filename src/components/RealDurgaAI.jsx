import { useState } from "react";

function RealDurgaAI() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askDurga = () => {

    const q = question.toLowerCase();

    if (
      q.includes("debt") ||
      q.includes("loan")
    ) {

      setAnswer(
        "Focus on Credit Card → Personal Loan → Car Loan → Home Loans."
      );

      return;
    }

    if (
      q.includes("wealth") ||
      q.includes("crore")
    ) {

      setAnswer(
        "Continue SIP ₹25,000 and eliminate high-interest debt."
      );

      return;
    }

    if (
      q.includes("az-104") ||
      q.includes("azure")
    ) {

      setAnswer(
        "Study Networking, Storage, Compute, Identity and Backup."
      );

      return;
    }

    setAnswer(
      "Ask me about Debt, Wealth or AZ-104."
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        🤖 Real Durga AI
      </h2>

      <textarea
        rows="3"
        className="w-full border p-3 rounded-xl"
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Ask Durga..."
      />

      <button
        onClick={askDurga}
        className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-xl"
      >
        Ask
      </button>

      <div className="mt-4 bg-slate-100 p-4 rounded-xl">
        {answer || "Waiting for question..."}
      </div>

    </div>
  );
}

export default RealDurgaAI;