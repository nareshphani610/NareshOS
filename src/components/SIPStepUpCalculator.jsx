import { useState } from "react";

function SIPStepUpCalculator() {

  const [sip, setSip] =
    useState(25000);

  const [stepUp, setStepUp] =
    useState(10);

  const [years, setYears] =
    useState(15);

  const expectedReturn = 12;

  let corpus = 0;

  for (
    let year = 1;
    year <= years;
    year++
  ) {

    const yearlySip =
      sip *
      Math.pow(
        1 +
          stepUp / 100,
        year - 1
      );

    for (
      let month = 1;
      month <= 12;
      month++
    ) {

      corpus =
        corpus *
          (1 +
            expectedReturn /
              100 /
              12) +
        yearlySip;
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📈 SIP Step-Up Calculator
      </h2>

      <div className="space-y-4">

        <div>
          <label>
            Monthly SIP
          </label>

          <input
            type="number"
            value={sip}
            onChange={(e) =>
              setSip(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label>
            Annual Step-Up %
          </label>

          <input
            type="number"
            value={stepUp}
            onChange={(e) =>
              setStepUp(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label>
            Years
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div className="text-2xl font-bold mt-6">

          🎯 Future Corpus:

          ₹
          {Math.round(
            corpus
          ).toLocaleString()}

        </div>

      </div>

    </div>
  );
}

export default SIPStepUpCalculator;