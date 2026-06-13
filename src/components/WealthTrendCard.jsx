function WealthTrendCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        📈 Wealth Trend
      </h2>

      <p className="mb-2">
        Jun 2026  → ₹15.18L
      </p>

      <p className="mb-2">
        Jul 2026  → ₹16.50L
      </p>

      <p className="mb-2">
        Aug 2026  → ₹17.40L
      </p>

      <p className="mb-2">
        Sep 2026  → ₹18.50L
      </p>

      <div className="mt-4">
        <div className="bg-blue-200 h-3 rounded-full mb-2 w-1/2"></div>
        <div className="bg-blue-300 h-3 rounded-full mb-2 w-3/5"></div>
        <div className="bg-blue-400 h-3 rounded-full mb-2 w-4/5"></div>
        <div className="bg-blue-500 h-3 rounded-full w-full"></div>
      </div>

    </div>
  );
}

export default WealthTrendCard;