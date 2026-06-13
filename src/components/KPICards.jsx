function KPICards() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-8">

      <div className="bg-green-500 text-white p-5 rounded-3xl">
        <h3>Total Assets</h3>
        <h2 className="text-3xl font-bold mt-2">₹73.6L</h2>
      </div>

      <div className="bg-red-500 text-white p-5 rounded-3xl">
        <h3>Total Debt</h3>
        <h2 className="text-3xl font-bold mt-2">₹56.1L</h2>
      </div>

      <div className="bg-blue-500 text-white p-5 rounded-3xl">
        <h3>Net Worth</h3>
        <h2 className="text-3xl font-bold mt-2">₹17.5L</h2>
      </div>

      <div className="bg-orange-500 text-white p-5 rounded-3xl">
        <h3>Monthly Invest</h3>
        <h2 className="text-3xl font-bold mt-2">₹44,978</h2>
      </div>

      <div className="bg-purple-500 text-white p-5 rounded-3xl">
        <h3>1 Cr Goal</h3>
        <h2 className="text-3xl font-bold mt-2">17%</h2>
      </div>

    </div>
  );
}

export default KPICards;