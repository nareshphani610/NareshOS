import { useState, useEffect } from "react";

import {
  saveLiabilities,
  getLatestLiabilities,
} from "../services/liabilitiesService";

function LiabilitiesCard() {
  const [homeLoan, setHomeLoan] =
    useState("");

  const [carLoan, setCarLoan] =
    useState("");

  const [
    personalLoan,
    setPersonalLoan,
  ] = useState("");

  const [
    creditCard,
    setCreditCard,
  ] = useState("");

  useEffect(() => {
    async function loadLiabilities() {
      const result =
        await getLatestLiabilities();

      if (
        result.data &&
        result.data.length > 0
      ) {
        const item =
          result.data[0];

        setHomeLoan(
          item.home_loan || ""
        );

        setCarLoan(
          item.car_loan || ""
        );

        setPersonalLoan(
          item.personal_loan || ""
        );

        setCreditCard(
          item.credit_card || ""
        );

        return;
      }

      setHomeLoan(
        localStorage.getItem(
          "homeLoan"
        ) || ""
      );

      setCarLoan(
        localStorage.getItem(
          "carLoan"
        ) || ""
      );

      setPersonalLoan(
        localStorage.getItem(
          "personalLoan"
        ) || ""
      );

      setCreditCard(
        localStorage.getItem(
          "creditCard"
        ) || ""
      );
    }

    loadLiabilities();
  }, []);

  const saveLiabilitiesData =
    async () => {
      try {
        localStorage.setItem(
          "homeLoan",
          homeLoan
        );

        localStorage.setItem(
          "carLoan",
          carLoan
        );

        localStorage.setItem(
          "personalLoan",
          personalLoan
        );

        localStorage.setItem(
          "creditCard",
          creditCard
        );

        const result =
          await saveLiabilities({
            home_loan:
              Number(homeLoan),

            car_loan:
              Number(carLoan),

            personal_loan:
              Number(
                personalLoan
              ),

            credit_card:
              Number(
                creditCard
              ),
          });

        if (result.error) {
          console.error(
            result.error
          );

          alert(
            "❌ Supabase Save Failed"
          );

          return;
        }

        alert(
          "☁️ Liabilities Saved To Supabase"
        );
      } catch (error) {
        console.error(error);

        alert(
          "❌ Error Saving Liabilities"
        );
      }
    };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        📉 Liabilities
      </h2>

      <div className="space-y-3">

        <input
          type="number"
          placeholder="🏠 Home Loan"
          className="w-full border p-2 rounded-lg"
          value={homeLoan}
          onChange={(e) =>
            setHomeLoan(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="🚗 Car Loan"
          className="w-full border p-2 rounded-lg"
          value={carLoan}
          onChange={(e) =>
            setCarLoan(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="💼 Personal Loan"
          className="w-full border p-2 rounded-lg"
          value={personalLoan}
          onChange={(e) =>
            setPersonalLoan(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="💳 Credit Card"
          className="w-full border p-2 rounded-lg"
          value={creditCard}
          onChange={(e) =>
            setCreditCard(
              e.target.value
            )
          }
        />

        <button
          onClick={
            saveLiabilitiesData
          }
          className="bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          ☁️ Save Liabilities
        </button>

      </div>

    </div>
  );
}

export default LiabilitiesCard;