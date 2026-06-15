import { useState, useEffect } from "react";

import {
  saveAssets,
  getLatestAssets,
} from "../services/assetsService";

function AssetsCard() {
  const [house, setHouse] = useState("");
  const [epf, setEpf] = useState("");
  const [fd, setFd] = useState("");
  const [mf, setMf] = useState("");

  useEffect(() => {
    async function loadAssets() {
      const result =
        await getLatestAssets();

      if (
        result.data &&
        result.data.length > 0
      ) {
        const asset =
          result.data[0];

        setHouse(asset.house || "");
        setEpf(asset.epf || "");
        setFd(asset.fd || "");
        setMf(asset.mf || "");

        return;
      }

      setHouse(
        localStorage.getItem("house") || ""
      );

      setEpf(
        localStorage.getItem("epf") || ""
      );

      setFd(
        localStorage.getItem("fd") || ""
      );

      setMf(
        localStorage.getItem("mf") || ""
      );
    }

    loadAssets();
  }, []);

  const saveAssetsData = async () => {
    try {
      localStorage.setItem(
        "house",
        house
      );

      localStorage.setItem(
        "epf",
        epf
      );

      localStorage.setItem(
        "fd",
        fd
      );

      localStorage.setItem(
        "mf",
        mf
      );

      const result =
        await saveAssets({
          house: Number(house),
          epf: Number(epf),
          fd: Number(fd),
          mf: Number(mf),
        });

      if (result.error) {
        console.error(
          result.error
        );

        alert(
          "❌ Supabase Save Failed"
        );

        return;
      }

      alert(
        "☁️ Assets Saved To Supabase"
      );
    } catch (error) {
      console.error(error);

      alert(
        "❌ Error Saving Assets"
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        💰 Assets
      </h2>

      <div className="space-y-3">

        <div>
          <label>
            🏠 House
          </label>

          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={house}
            onChange={(e) =>
              setHouse(
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label>
            🏦 EPF
          </label>

          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={epf}
            onChange={(e) =>
              setEpf(
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label>
            💵 FD
          </label>

          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={fd}
            onChange={(e) =>
              setFd(
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label>
            📈 Mutual Funds
          </label>

          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={mf}
            onChange={(e) =>
              setMf(
                e.target.value
              )
            }
          />
        </div>

        <button
          onClick={saveAssetsData}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          ☁️ Save Assets
        </button>

      </div>

    </div>
  );
}

export default AssetsCard;