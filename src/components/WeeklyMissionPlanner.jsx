function WeeklyMissionPlanner() {

  const missions = [
    "📘 AZ-104 Study - 1 Hour",
    "💳 Pay Towards Credit Card Debt",
    "📖 Bhagavatgitha Dataset Work",
    "📘 Azure Lab Practice",
    "💰 Review Wealth Goals",
    "❤️ Family Time",
    "🙏 Spiritual Reflection",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        📅 Weekly Mission Planner
      </h2>

      <div className="space-y-3">

        {days.map((day, index) => (
          <div
            key={index}
            className="border-b pb-2"
          >
            <p className="font-bold">
              {day}
            </p>

            <p className="text-gray-600">
              {missions[index]}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default WeeklyMissionPlanner;