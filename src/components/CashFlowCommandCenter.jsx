import { useEffect, useState } from "react";

function CashFlowCommandCenter() {

  const [cashFlow, setCashFlow] =
    useState(null);

  useEffect(() => {

    const salary =
      Number(
        localStorage.getItem("salary") ||
        120000
      );

    const sip =
      Number(
        localStorage.getItem("sip") ||
        25000
      );

    const homeLoanEmi = 34172;

    const motherHomeLoanEmi = 34275;

    const carLoanEmi = 34172;

    const personalLoanEmi = 9132;

    const totalEmi =
      homeLoanEmi +
      motherHomeLoanEmi +
      carLoanEmi +
      personalLoanEmi;

    const freeCash =
      salary -
      sip -
      totalEmi;

    const savingsRate =
      ((sip + freeCash) / salary) * 100;

    setCashFlow({
      salary,
      sip,
      totalEmi,
      freeCash,
      savingsRate,
    });

  }, []);

  if (!cashFlow) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        💰 Cash Flow Command Center
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-blue-50 p-4 rounded-xl">
          <p>💼 Monthly Salary</p>
          <p className="text-2xl font-bold">
            ₹{cashFlow.salary.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl">
          <p>📈 Monthly SIP</p>
          <p className="text-2xl font-bold">
            ₹{cashFlow.sip.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          <p>📉 Total EMI</p>
          <p className="text-2xl font-bold">
            ₹{cashFlow.totalEmi.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-xl">
          <p>💵 Free Cash Flow</p>
          <p className="text-2xl font-bold text-green-600">
            ₹{cashFlow.freeCash.toLocaleString("en-IN")}
          </p>
        </div>

      </div>

      <div className="mt-6 bg-yellow-50 p-4 rounded-xl">

        <p className="font-bold">
          🎯 Savings Rate
        </p>

        <p className="text-3xl font-bold">
          {cashFlow.savingsRate.toFixed(1)}%
        </p>

      </div>

      <div className="mt-6 bg-indigo-50 p-4 rounded-xl">

        <p className="font-bold mb-2">
          🤖 Durga Recommendation
        </p>

        <p>
          Direct free cash flow toward
          Credit Card → Personal Loan →
          Car Loan for fastest debt reduction.
        </p>

      </div>

    </div>
  );
}

export default CashFlowCommandCenter;