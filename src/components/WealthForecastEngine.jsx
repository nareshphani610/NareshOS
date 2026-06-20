import { useMemo } from "react";

function WealthForecastEngine() {

  const currentWealth =
    689978;

  const monthlyInvestment =
    25000 + 19978;

  const expectedReturn =
    12;

  const forecast = useMemo(() => {

    let corpus =
      currentWealth;

    let months = 0;

    while (
      corpus < 10000000
    ) {

      corpus =
        corpus *
          (1 +
            expectedReturn /
              100 /
              12) +
        monthlyInvestment;

      months++;

      if (
        months > 600
      )
        break;
    }

    return {
      months,
      years:
        (
          months / 12
        ).toFixed(1),
      corpus:
        Math.round(
          corpus
        ),
    };

  }, []);

  const targetYear =
    new Date().getFullYear() +
    Math.ceil(
      forecast.months /
        12
    );

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🎯 ₹1 Crore Wealth Forecast
      </h2>

      <div className="space-y-4">

        <h3>
          💰 Current Wealth:
          ₹{currentWealth.toLocaleString()}
        </h3>

        <h3>
          📈 Monthly Investment:
          ₹{monthlyInvestment.toLocaleString()}
        </h3>

        <h3>
          🎯 Goal:
          ₹1,00,00,000
        </h3>

        <h3>
          ⏳ Time To Goal:
          {forecast.years} Years
        </h3>

        <h3>
          📅 Target Year:
          {targetYear}
        </h3>

        <h3>
          🚀 Projected Corpus:
          ₹{forecast.corpus.toLocaleString()}
        </h3>

      </div>

    </div>
  );
}

export default WealthForecastEngine;