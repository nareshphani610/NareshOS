function DateTimeCard() {
  const now = new Date();

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg">
      <h2 className="text-lg font-bold">
        📅 Today
      </h2>

      <p className="mt-2">
        {now.toLocaleDateString()}
      </p>

      <p className="text-gray-500">
        {now.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default DateTimeCard;