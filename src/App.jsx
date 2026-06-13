function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-slate-900 to-indigo-900 text-white p-6">

        <h1 className="text-3xl font-bold">
          🪷 NareshOS
        </h1>

        <p className="text-sm text-slate-300 mt-2">
          Live Your Dharma
        </p>

        <div className="mt-10 space-y-3">

          <div className="bg-indigo-600 p-3 rounded-xl">
            🏠 Dashboard
          </div>

          <div className="p-3">
            💰 Wealth
          </div>

          <div className="p-3">
            ❤️ Family
          </div>

          <div className="p-3">
            💼 Career
          </div>

          <div className="p-3">
            📖 Bhagavatgitha
          </div>

          <div className="p-3">
            🤖 Durga AI
          </div>

        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Om Namo Narayanaya 🙏
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-5 gap-4 mt-8">

          <div className="bg-green-500 text-white p-5 rounded-3xl">
            <h3>Total Assets</h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹73.6L
            </h2>
          </div>

          <div className="bg-red-500 text-white p-5 rounded-3xl">
            <h3>Total Debt</h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹56.1L
            </h2>
          </div>

          <div className="bg-blue-500 text-white p-5 rounded-3xl">
            <h3>Net Worth</h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹17.5L
            </h2>
          </div>

          <div className="bg-orange-500 text-white p-5 rounded-3xl">
            <h3>Monthly Invest</h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹44,978
            </h2>
          </div>

          <div className="bg-purple-500 text-white p-5 rounded-3xl">
            <h3>1 Cr Goal</h3>
            <h2 className="text-3xl font-bold mt-2">
              17%
            </h2>
          </div>

        </div>

        {/* Durga */}
        <div className="bg-white p-6 rounded-3xl shadow-lg mt-8">
          <h2 className="text-2xl font-bold">
            🤖 Durga Command Center
          </h2>
          <div className="grid grid-cols-3 gap-6 mt-6">

  <div className="bg-white rounded-3xl p-6 shadow-lg">
    <h2 className="text-xl font-bold mb-4">
      💰 Assets
    </h2>

    <table className="w-full">
      <tbody>
        <tr>
          <td>House</td>
          <td>₹65L</td>
        </tr>

        <tr>
          <td>EPF</td>
          <td>₹3.1L</td>
        </tr>

        <tr>
          <td>FD</td>
          <td>₹1.5L</td>
        </tr>

        <tr>
          <td>Mutual Funds</td>
          <td>₹1.2L</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg">
    <h2 className="text-xl font-bold mb-4">
      📉 Liabilities
    </h2>

    <table className="w-full">
      <tbody>
        <tr>
          <td>Home Loan</td>
          <td>₹47.65L</td>
        </tr>

        <tr>
          <td>Car Loan</td>
          <td>₹6.57L</td>
        </tr>

        <tr>
          <td>Personal Loan</td>
          <td>₹95,642</td>
        </tr>

        <tr>
          <td>Credit Card</td>
          <td>₹89,000</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg">
    <h2 className="text-xl font-bold mb-4">
      🎯 Goals Progress
    </h2>

    <p>Debt Free</p>
    <div className="bg-gray-200 h-3 rounded-full">
      <div className="bg-green-500 h-3 rounded-full w-1/4"></div>
    </div>

    <p className="mt-4">AZ-104</p>
    <div className="bg-gray-200 h-3 rounded-full">
      <div className="bg-blue-500 h-3 rounded-full w-2/5"></div>
    </div>

    <p className="mt-4">Bhagavatgitha MVP</p>
    <div className="bg-gray-200 h-3 rounded-full">
      <div className="bg-purple-500 h-3 rounded-full w-1/12"></div>
    </div>
  </div>

</div>

          <p className="mt-3">
            Priority 1: Clear Credit Card Debt ₹89,000
          </p>

          <p>
            Priority 2: Complete AZ-104
          </p>

          <p>
            Priority 3: Build Bhagavatgitha MVP
          </p>
        </div>

      </div>

    </div>
  )
}

export default App