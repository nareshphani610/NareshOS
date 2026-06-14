import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WealthAnalyticsChart() {

  let data = [];

  try {
    data =
      JSON.parse(
        localStorage.getItem("wealthHistory")
      ) || [];
  } catch {
    data = [];
  }

  if (data.length === 0) {
    data = [
      {
        month: "Current",
        netWorth: 0,
      },
    ];
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        📈 Net Worth Trend
      </h2>

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="netWorth"
              stroke="#4f46e5"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WealthAnalyticsChart;