function Sidebar() {
  return (
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

        <div className="p-3 hover:bg-slate-800 rounded-xl cursor-pointer">
          💰 Wealth
        </div>

        <div className="p-3 hover:bg-slate-800 rounded-xl cursor-pointer">
          ❤️ Family
        </div>

        <div className="p-3 hover:bg-slate-800 rounded-xl cursor-pointer">
          💼 Career
        </div>

        <div className="p-3 hover:bg-slate-800 rounded-xl cursor-pointer">
          📖 Bhagavatgitha
        </div>

        <div className="p-3 hover:bg-slate-800 rounded-xl cursor-pointer">
          🤖 Durga AI
        </div>

      </div>
    </div>
  );
}

export default Sidebar;