function ExecutiveSummaryCard() {
  const today = new Date();

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-3xl font-bold">
        🪷 Good Morning Naresh
      </h2>

      <p className="mt-2">
        {today.toLocaleDateString("en-IN")}
      </p>

      <p className="mt-2">
        Next Event: Durga Birthday 🎂
      </p>

      <p>
        Stay focused on your Dharma.
      </p>

    </div>
  );
}

export default ExecutiveSummaryCard;