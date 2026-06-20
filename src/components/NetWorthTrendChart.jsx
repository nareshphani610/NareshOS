import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function NetWorthTrendChart() {

  const data = [

    {
      month: "Jan",
      netWorth: 1200000,
    },

    {
      month: "Feb",
      netWorth: 1350000,
    },

    {
      month: "Mar",
      netWorth: 1500000,
    },

    {
      month: "Apr",
      netWorth: 1650000,
    },

    {
      month: "May",
      netWorth: 1750000,
    },

    {
      month: "Jun",
      netWorth: 1850000,
    },

  ];

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📊 Net Worth Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="netWorth"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default NetWorthTrendChart;