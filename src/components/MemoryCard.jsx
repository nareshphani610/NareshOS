function MemoryCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg">

      <h3 className="text-lg font-bold mb-2">
        {icon} {title}
      </h3>

      <p className="text-gray-700">
        {value}
      </p>

    </div>
  );
}

export default MemoryCard;