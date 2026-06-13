function FamilyCountdownCard() {

  const today = new Date();

  const events = [
    {
      name: "Durga Birthday",
      date: new Date(today.getFullYear(), 6, 3)
    },
    {
      name: "Wedding Anniversary",
      date: new Date(today.getFullYear(), 4, 23)
    },
    {
      name: "Naresh Birthday",
      date: new Date(today.getFullYear(), 9, 25)
    },
    {
      name: "Srikrithi Birthday",
      date: new Date(today.getFullYear(), 8, 17)
    },
    {
      name: "Srinija Birthday",
      date: new Date(today.getFullYear(), 11, 19)
    }
  ];

  const updatedEvents = events.map((event) => {

    let eventDate = event.date;

    if (eventDate < today) {
      eventDate = new Date(
        today.getFullYear() + 1,
        eventDate.getMonth(),
        eventDate.getDate()
      );
    }

    const diff =
      Math.ceil(
        (eventDate - today) /
        (1000 * 60 * 60 * 24)
      );

    return {
      ...event,
      daysLeft: diff
    };
  });

  updatedEvents.sort(
    (a, b) => a.daysLeft - b.daysLeft
  );

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        🎂 Family Countdown Engine
      </h2>

      {updatedEvents.map((event, index) => (
        <div
          key={index}
          className="flex justify-between border-b py-2"
        >
          <span>{event.name}</span>

          <span className="font-bold text-pink-600">
            {event.daysLeft} days
          </span>
        </div>
      ))}

    </div>
  );
}

export default FamilyCountdownCard;