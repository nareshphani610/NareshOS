import { useState } from "react";

import {
  searchMemory,
} from "../services/durgaMemorySearchService";

function DurgaMemorySearch() {

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState([]);

  async function handleSearch() {

    if (!query) {
      return;
    }

    const response =
      await searchMemory(query);

    if (!response.error) {
      setResults(
        response.data
      );
    }
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🤖 Durga Memory Search
      </h2>

      <div className="flex gap-3">

        <input
          type="text"
          className="flex-1 border p-3 rounded-xl"
          placeholder="Ask Durga..."
          value={query}
          onChange={(e) =>
            setQuery(
              e.target.value
            )
          }
        />

        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-5 rounded-xl"
        >
          Search
        </button>

      </div>

      <div className="mt-6 space-y-4">

        {results.length === 0 ? (

          <div className="text-gray-500">
            No memory results yet.
          </div>

        ) : (

          results.map(
            (note) => (

              <div
                key={note.id}
                className="border rounded-xl p-4"
              >

                <h3 className="font-bold">
                  {note.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {note.category}
                </p>

                <p className="mt-2">
                  {note.content}
                </p>

              </div>

            )
          )

        )}

      </div>

    </div>
  );
}

export default DurgaMemorySearch;