import { useEffect, useState } from "react";

function WealthForecastCard() {

  const [forecast, setForecast] =
    useState({
      current: 0,
      oneYear: 0,
      threeYears: 0,
      fiveYears: 0,
    });

  useEffect(() => {

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const monthlySip = 25000;

    const annualReturn = 0.12;

    const calculateFutureValue = (
      principal,
      monthly,
      years
    ) => {

      let amount = principal;

      for (
        let month = 1;
        month <= years * 12;
        month++
      ) {

        amount =
          amount * (1 + annualReturn / 12);

        amount =
          amount + monthly;
      }

      return Math.round(amount);
    };

    setForecast({

      current: assets,

      oneYear:
        calculateFutureValue(
          assets,
          monthlySip,
          1
        ),

      threeYears:
        calculateFutureValue(
          assets,
          monthlySip,
          3
        ),

      fiveYears:
        calculateFutureValue(
          assets,
          monthlySip,
          5
        ),

    });

  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        📈 Wealth Forecast Engine
      </h2>

      <div className="space-y-4">

        <div>
          💰 Current Wealth:
          <br />
          <span className="font-bold text-xl">
            ₹{forecast.current.toLocaleString("en-IN")}
          </span>
        </div>

        <div>
          📅 After 1 Year:
          <br />
          <span className="font-bold text-green-600">
            ₹{forecast.oneYear.toLocaleString("en-IN")}
          </span>
        </div>

        <div>
          📅 After 3 Years:
          <br />
          <span className="font-bold text-green-600">
            ₹{forecast.threeYears.toLocaleString("en-IN")}
          </span>
        </div>

        <div>
          🎯 After 5 Years:
          <br />
          <span className="font-bold text-purple-600 text-xl">
            ₹{forecast.fiveYears.toLocaleString("en-IN")}
          </span>
        </div>

      </div>

    </div>
  );
}

export default WealthForecastCard;