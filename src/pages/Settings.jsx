import {
  useState,
  useEffect,
} from "react";

import {
  saveSettings,
  getSettings,
} from "../services/settingsService";

function Settings() {

  const [form, setForm] =
    useState({
      monthly_income: "",
      monthly_expenses: "",
      monthly_sip: "",
      target_wealth: "",
      starting_debt: "",

      home_emi: "",
      mother_home_emi: "",
      car_emi: "",
      personal_emi: "",
    });

  useEffect(() => {

    async function loadData() {

      const result =
        await getSettings();

      if (result.data) {
        setForm({
          ...form,
          ...result.data,
        });
      }
    }

    loadData();

  }, []);

  async function handleSave() {

    const result =
      await saveSettings(form);

    if (result.error) {

      alert(
        "❌ Error saving settings"
      );

      return;
    }

    alert(
      "✅ Settings saved successfully"
    );
  }

  return (

    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h1 className="text-3xl font-bold mb-6">
        ⚙️ Financial Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="number"
          placeholder="Monthly Income"
          value={form.monthly_income}
          onChange={(e) =>
            setForm({
              ...form,
              monthly_income:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Monthly Expenses"
          value={form.monthly_expenses}
          onChange={(e) =>
            setForm({
              ...form,
              monthly_expenses:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Monthly SIP"
          value={form.monthly_sip}
          onChange={(e) =>
            setForm({
              ...form,
              monthly_sip:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Target Wealth"
          value={form.target_wealth}
          onChange={(e) =>
            setForm({
              ...form,
              target_wealth:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Starting Debt"
          value={form.starting_debt}
          onChange={(e) =>
            setForm({
              ...form,
              starting_debt:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Home Loan EMI"
          value={form.home_emi}
          onChange={(e) =>
            setForm({
              ...form,
              home_emi:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Mother Home EMI"
          value={form.mother_home_emi}
          onChange={(e) =>
            setForm({
              ...form,
              mother_home_emi:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Car EMI"
          value={form.car_emi}
          onChange={(e) =>
            setForm({
              ...form,
              car_emi:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="number"
          placeholder="Personal Loan EMI"
          value={form.personal_emi}
          onChange={(e) =>
            setForm({
              ...form,
              personal_emi:
                e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl"
        />

      </div>

      <button
        onClick={handleSave}
        className="
        mt-6
        bg-indigo-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Save Settings
      </button>

    </div>
  );
}

export default Settings;