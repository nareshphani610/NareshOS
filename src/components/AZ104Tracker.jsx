import { useState, useEffect } from "react";

function AZ104Tracker() {

  const [progress, setProgress] = useState(40);

  useEffect(() => {
    const saved =
      Number(localStorage.getItem("az104")) || 40;

    setProgress(saved);
  }, []);

  const saveProgress = () => {
    localStorage.setItem("az104", progress);

    alert("AZ-104 Progress Saved");
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        🎯 AZ-104 Progress Tracker
      </h2>

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) =>
          setProgress(Number(e.target.value))
        }
        className="w-full"
      />

      <p className="mt-4 font-bold">
        Progress: {progress}%
      </p>

      <div className="bg-gray-200 h-4 rounded-full mt-3">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>

      <button
        onClick={saveProgress}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4"
      >
        Save Progress
      </button>

    </div>
  );
}

export default AZ104Tracker;