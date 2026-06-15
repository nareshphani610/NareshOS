import MemoryCard from "./MemoryCard";

function MemoryCenter() {

  const memories = [

    {
      title: "₹1 Crore Goal",
      value:
        "Build wealth to ₹1 Crore",
      icon: "💰",
    },

    {
      title: "Debt Free Goal",
      value:
        "Close Credit Card → Personal Loan → Car Loan → Home Loans",
      icon: "📉",
    },

    {
      title: "AZ-104",
      value:
        "Current Progress 40%",
      icon: "📘",
    },

    {
      title: "Bhagavatgitha",
      value:
        "Build AI-powered scripture assistant",
      icon: "📖",
    },

    {
      title: "Family",
      value:
        "Celebrate key milestones and birthdays",
      icon: "❤️",
    },

  ];

  return (
    <div className="bg-slate-50 rounded-3xl p-6">

      <h2 className="text-3xl font-bold mb-6">
        🧠 Durga Memory Center
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {memories.map(
          (memory, index) => (

            <MemoryCard
              key={index}
              title={memory.title}
              value={memory.value}
              icon={memory.icon}
            />

          )
        )}

      </div>

    </div>
  );
}

export default MemoryCenter;