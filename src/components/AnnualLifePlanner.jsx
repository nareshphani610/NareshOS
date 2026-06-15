import { useMemo } from "react";

function AnnualLifePlanner() {

  const events = useMemo(() => [

    {
      date: "23 May",
      title: "💍 Wedding Anniversary",
      category: "Family",
    },

    {
      date: "03 Jul",
      title: "🎂 Wife Birthday",
      category: "Family",
    },

    {
      date: "17 Sep",
      title: "🎂 Srikrithi Birthday",
      category: "Family",
    },

    {
      date: "25 Oct",
      title: "🎂 Naresh Birthday",
      category: "Family",
    },

    {
      date: "19 Dec",
      title: "🎂 Srinija Birthday",
      category: "Family",
    },

    {
      date: "31 Dec",
      title: "📘 AZ-104 Target Review",
      category: "Career",
    },

    {
      date: "31 Dec",
      title: "📖 Bhagavatgitha Project Milestone",
      category: "Project",
    },

    {
      date: "31 Dec",
      title: "💰 ₹1 Crore Wealth Goal Review",
      category: "Wealth",
    },

  ], []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📅 Annual Life Planner
      </h2>

      <div className="space-y-4">

        {events.map((event, index) => (

          <div
            key={index}
            className="border-l-4 border-indigo-500 pl-4 py-3 bg-slate-50 rounded-xl"
          >

            <p className="font-bold">
              {event.date}
            </p>

            <p>
              {event.title}
            </p>

            <p className="text-sm text-gray-500">
              {event.category}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AnnualLifePlanner;