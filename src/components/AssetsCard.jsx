import { useState, useEffect } from "react";

function AssetsCard() {

  const [house, setHouse] = useState("");
  const [epf, setEpf] = useState("");
  const [fd, setFd] = useState("");
  const [mf, setMf] = useState("");

  useEffect(() => {
    setHouse(localStorage.getItem("house") || "6500000");
    setEpf(localStorage.getItem("epf") || "329978");
    setFd(localStorage.getItem("fd") || "150000");
    setMf(localStorage.getItem("mf") || "145000");
  }, []);

  const saveAssets = () => {
    localStorage.setItem("house", house);
    localStorage.setItem("epf", epf);
    localStorage.setItem("fd", fd);
    localStorage.setItem("mf", mf);

    alert("Assets Saved Successfully");
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        💰 Assets
      </h2>

      <div className="space-y-3">

        <div>
          <label>🏠 House</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </div>

        <div>
          <label>🏦 EPF</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={epf}
            onChange={(e) => setEpf(e.target.value)}
          />
        </div>

        <div>
          <label>💵 FD</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={fd}
            onChange={(e) => setFd(e.target.value)}
          />
        </div>

        <div>
          <label>📈 Mutual Funds</label>
          <input
            className="w-full border p-2 rounded-lg"
            value={mf}
            onChange={(e) => setMf(e.target.value)}
          />
        </div>

        <button
          onClick={saveAssets}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Save Assets
        </button>

      </div>
    </div>
  );
}

export default AssetsCard;