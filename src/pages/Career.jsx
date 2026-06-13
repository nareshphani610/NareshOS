function Career() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        💼 Career Center
      </h1>

      <p className="text-gray-500 mt-2">
        Certifications, Learning and Career Growth
      </p>

      {/* Career Summary */}
      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            🎯 AZ-104
          </h2>

          <p>Progress: 40%</p>

          <div className="bg-gray-200 h-3 rounded-full mt-3">
            <div className="bg-blue-500 h-3 rounded-full w-2/5"></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            🖥 SCCM
          </h2>

          <p>
            Learning In Progress
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            ☁ Azure
          </h2>

          <p>
            AZ-900 Completed
          </p>
        </div>

      </div>

      {/* Learning Roadmap */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mt-6">

        <h2 className="text-2xl font-bold mb-4">
          🚀 Career Roadmap
        </h2>

        <ul className="space-y-3">

          <li>✅ AZ-900 Completed</li>

          <li>🔄 AZ-104 In Progress</li>

          <li>📚 SCCM Learning</li>

          <li>📱 Intune Learning</li>

          <li>🎤 Interview Preparation</li>

        </ul>

      </div>

    </div>
  );
}

export default Career;