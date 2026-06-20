import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AssetAllocationChart() {

  const data = [
    { name: "Stocks", value: 60000 },
    { name: "Mutual Funds", value: 145000 },
    { name: "EPF", value: 329978 },
    { name: "FD", value: 155000 },
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#ea580c",
    "#9333ea",
  ];

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📊 Asset Allocation
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map(
              (_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default AssetAllocationChart;