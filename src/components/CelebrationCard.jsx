function CelebrationCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        🎉 Celebration Fund
      </h2>

      <p>Target: ₹1,00,000</p>
      <p>Current: ₹35,000</p>
      <p>Remaining: ₹65,000</p>

      <div className="bg-gray-200 h-4 rounded-full mt-4">
        <div className="bg-green-500 h-4 rounded-full w-1/3"></div>
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Annual Family Celebration Goal
      </p>
    </div>
  );
}

export default CelebrationCard;