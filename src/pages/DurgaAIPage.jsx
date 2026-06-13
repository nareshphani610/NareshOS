function DurgaAIPage() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        🤖 Durga AI Command Center
      </h1>

      <p className="text-gray-500 mt-2">
        Personal Chief of Staff
      </p>

      {/* Priority Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💰 Wealth Priority
          </h2>

          <p>Close Credit Card Debt</p>
          <p>Continue SIP ₹25,000</p>
          <p>Continue EPF ₹19,978</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            💼 Career Priority
          </h2>

          <p>Complete AZ-104</p>
          <p>Continue SCCM Learning</p>
          <p>Continue Intune Learning</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            📖 Project Priority
          </h2>

          <p>Bhagavatgitha Dataset</p>
          <p>RAG Planning</p>
          <p>MVP Definition</p>
        </div>

      </div>

      {/* Daily Mission */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mt-6">

        <h2 className="text-2xl font-bold mb-4">
          🚀 Today's Mission
        </h2>

        <ul className="space-y-3">
          <li>🎯 Pay down debt</li>
          <li>📘 Study AZ-104</li>
          <li>📚 Work on Bhagavatgitha dataset</li>
          <li>❤️ Spend time with family</li>
          <li>🙏 Daily spiritual practice</li>
        </ul>

      </div>

      {/* Life Vision */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mt-6">

        <h2 className="text-2xl font-bold mb-4">
          🪷 NareshOS Life Vision
        </h2>

        <ul className="space-y-3">
          <li>💰 Become Debt Free</li>
          <li>💎 Build ₹1 Crore Wealth</li>
          <li>🎉 Create ₹1 Lakh Celebration Fund</li>
          <li>📘 Complete AZ-104</li>
          <li>📖 Launch Bhagavatgitha MVP</li>
          <li>❤️ Build a Happy Family Life</li>
        </ul>

      </div>

    </div>
  );
}

export default DurgaAIPage;