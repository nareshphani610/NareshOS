function Analytics() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        📊 Analytics Center
      </h1>

      <p className="text-gray-500 mt-2">
        Wealth, Goals and Life Progress Analytics
      </p>

      {/* Wealth Analytics */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💰 Total Assets
          </h2>

          <p className="text-3xl font-bold">
            ₹71.25L
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            📉 Total Debt
          </h2>

          <p className="text-3xl font-bold">
            ₹56.07L
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💎 Net Worth
          </h2>

          <p className="text-3xl font-bold">
            ₹15.18L
          </p>
        </div>

      </div>

      {/* Goal Progress */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mt-6">

        <h2 className="text-2xl font-bold mb-6">
          🎯 Goal Progress
        </h2>

        <div className="space-y-6">

          <div>
            <p>Debt Free Journey</p>

            <div className="bg-gray-200 h-4 rounded-full mt-2">
              <div className="bg-green-500 h-4 rounded-full w-[7%]"></div>
            </div>
          </div>

          <div>
            <p>₹1 Crore Wealth Goal</p>

            <div className="bg-gray-200 h-4 rounded-full mt-2">
              <div className="bg-purple-500 h-4 rounded-full w-[71%]"></div>
            </div>
          </div>

          <div>
            <p>AZ-104 Certification</p>

            <div className="bg-gray-200 h-4 rounded-full mt-2">
              <div className="bg-blue-500 h-4 rounded-full w-[40%]"></div>
            </div>
          </div>

          <div>
            <p>Bhagavatgitha MVP</p>

            <div className="bg-gray-200 h-4 rounded-full mt-2">
              <div className="bg-orange-500 h-4 rounded-full w-[10%]"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;