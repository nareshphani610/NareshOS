import { useMemo } from "react";

function DebtFreeCountdown() {

  const debts = {
    homeLoan: 4720000,
    motherLoan: 1900000,
    carLoan: 654000,
    personalLoan: 95125,
    creditCard: 89000,
  };

  const emis = {
    homeLoan: 34172,
    motherLoan: 34275,
    carLoan: 18850,
    personalLoan: 9132,
  };

  const totalDebt =
    debts.homeLoan +
    debts.motherLoan +
    debts.carLoan +
    debts.personalLoan +
    debts.creditCard;

  const monthlyPayment =
    emis.homeLoan +
    emis.motherLoan +
    emis.carLoan +
    emis.personalLoan;

  const monthsToFreedom =
    Math.ceil(
      totalDebt /
      monthlyPayment
    );

  const debtFreeYear =
    new Date().getFullYear() +
    Math.ceil(
      monthsToFreedom / 12
    );

  const score =
    totalDebt < 2000000
      ? "A"
      : totalDebt < 5000000
      ? "B"
      : "C";

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📉 Debt Free Countdown
      </h2>

      <div className="space-y-4">

        <h3>
          💰 Total Debt:
          ₹{totalDebt.toLocaleString()}
        </h3>

        <h3>
          🏦 Monthly EMI:
          ₹{monthlyPayment.toLocaleString()}
        </h3>

        <h3>
          📅 Estimated Debt Free Year:
          {debtFreeYear}
        </h3>

        <h3>
          🎯 Debt Freedom Score:
          {score}
        </h3>

      </div>

    </div>
  );
}

export default DebtFreeCountdown;