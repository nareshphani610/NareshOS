import { useMemo } from "react";
import useSettings from "../hooks/useSettings";

function CashFlowCard() {

  const settings = useSettings();

  if (!settings) {
    return (
      <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">
        Loading Cash Flow...
      </div>
    );
  }

  const income =
    Number(
      settings.monthly_income || 0
    );

  const expenses =
    Number(
      settings.monthly_expenses || 0
    );

  const sip =
    Number(
      settings.monthly_sip || 0
    );

  const emis = {
    homeLoan: 34075,
    motherLoan: 34275,
    carLoan: 18850,
    personalLoan: 9132,
  };

  const cashFlow = useMemo(() => {

    const totalEmi =
      Object.values(emis)
        .reduce(
          (a, b) => a + b,
          0
        );

    const totalInvestments =
      sip;

    const freeCash =
      income -
      totalEmi -
      totalInvestments -
      expenses;

    return {
      totalEmi,
      totalInvestments,
      freeCash,
    };

  }, [
    income,
    expenses,
    sip,
  ]);

  return (

    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        💵 Cash Flow
      </h2>

      <div className="space-y-2">

        <p>
          Income:
          ₹{income.toLocaleString("en-IN")}
        </p>

        <p>
          EMI:
          ₹{cashFlow.totalEmi.toLocaleString("en-IN")}
        </p>

        <p>
          Investments:
          ₹{cashFlow.totalInvestments.toLocaleString("en-IN")}
        </p>

        <p>
          Expenses:
          ₹{expenses.toLocaleString("en-IN")}
        </p>

        <hr />

        <p className="text-xl font-bold">

          Free Cash:
          ₹
          {cashFlow.freeCash.toLocaleString(
            "en-IN"
          )}

        </p>

      </div>

    </div>

  );
}

export default CashFlowCard;