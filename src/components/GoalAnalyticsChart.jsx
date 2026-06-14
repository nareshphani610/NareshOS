import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GoalAnalyticsChart() {

  const az104 =
    Number(localStorage.getItem("az104") || 40);

  const data = [
    {
      goal: "Debt Free",
      progress: 7,
    },
    {
      goal: "₹1 Crore",
      progress: 71,
    },
    {
      goal: "AZ-104",
      progress: az104,
    },
    {
      goal: "Bhagavatgitha",
      progress: 10,
    },
    {
      goal: "Fund",
      progress: 35,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        🎯 Goal Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>

          <XAxis dataKey="goal" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="progress"
            fill="#7c3aed"
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default GoalAnalyticsChart;