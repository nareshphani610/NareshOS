function Bhagavatgitha() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        📖 Bhagavatgitha Project Center
      </h1>

      <p className="text-gray-500 mt-2">
        AI Powered Scripture Assistant
      </p>

      {/* Project Status */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            📚 Dataset
          </h2>

          <p>10% Complete</p>

          <div className="bg-gray-200 h-3 rounded-full mt-3">
            <div className="bg-blue-500 h-3 rounded-full w-1/12"></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            🤖 RAG Engine
          </h2>

          <p>Planning Stage</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            📱 Flutter App
          </h2>

          <p>Not Started</p>
        </div>

      </div>

      {/* Roadmap */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mt-6">

        <h2 className="text-2xl font-bold mb-4">
          🚀 Bhagavatgitha MVP Roadmap
        </h2>

        <ul className="space-y-3">

          <li>✅ Project Vision Defined</li>

          <li>🔄 Dataset Collection</li>

          <li>📚 Verse Index Creation</li>

          <li>🤖 RAG Architecture</li>

          <li>⚙ FastAPI Backend</li>

          <li>📱 Flutter Frontend</li>

          <li>🚀 MVP Launch</li>

        </ul>

      </div>

    </div>
  );
}

export default Bhagavatgitha;