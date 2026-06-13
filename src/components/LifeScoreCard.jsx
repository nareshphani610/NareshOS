import { useEffect, useState } from "react";

function LifeScoreCard() {

  const [score, setScore] = useState(0);

  useEffect(() => {

    const assets =
      Number(localStorage.getItem("house") || 0) +
      Number(localStorage.getItem("epf") || 0) +
      Number(localStorage.getItem("fd") || 0) +
      Number(localStorage.getItem("mf") || 0);

    const debt =
      Number(localStorage.getItem("homeLoan") || 0) +
      Number(localStorage.getItem("carLoan") || 0) +
      Number(localStorage.getItem("personalLoan") || 0) +
      Number(localStorage.getItem("creditCard") || 0);

    const az104 =
      Number(localStorage.getItem("az104") || 40);

    const wealthScore =
      Math.min(25, (assets / 10000000) * 25);

    const debtScore =
      Math.max(0, 25 - (debt / 6000000) * 25);

    const careerScore =
      (az104 / 100) * 20;

    const bhagavatgithaScore = 2;

    const celebrationScore = 5;

    const total =
      wealthScore +
      debtScore +
      careerScore +
      bhagavatgithaScore +
      celebrationScore;

    setScore(Math.round(total));

  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        🪷 Life Score Engine
      </h2>

      <div className="text-center">

        <h1 className="text-6xl font-bold text-indigo-600">
          {score}
        </h1>

        <p className="text-gray-500">
          /100
        </p>

      </div>

      <div className="bg-gray-200 h-4 rounded-full mt-6">

        <div
          className="bg-indigo-600 h-4 rounded-full"
          style={{
            width: `${score}%`
          }}
        ></div>

      </div>

    </div>
  );
}

export default LifeScoreCard;