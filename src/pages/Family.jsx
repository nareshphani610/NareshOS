import FamilyCard from "../components/FamilyCard";
import CelebrationCard from "../components/CelebrationCard";
import FamilyCountdownCard from "../components/FamilyCountdownCard";

function Family() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        ❤️ Family Center
      </h1>

      <p className="text-gray-500 mt-2">
        Family, Celebrations and Important Dates
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            🎂 Upcoming Event
          </h2>

          <p>Durga Birthday</p>

          <p className="text-pink-600 font-bold mt-2">
            03 Jul
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💍 Anniversary
          </h2>

          <p>23 May</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            🎉 Celebration Goal
          </h2>

          <p>₹35,000 / ₹1,00,000</p>

          <div className="bg-gray-200 h-3 rounded-full mt-3">
            <div className="bg-green-500 h-3 rounded-full w-1/3"></div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <FamilyCard />

        <CelebrationCard />

        <FamilyCountdownCard />

      </div>

    </div>
  );
}

export default Family;