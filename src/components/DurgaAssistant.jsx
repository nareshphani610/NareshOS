import { useState } from "react";

import {
  searchMemory,
} from "../services/durgaMemorySearchService";

function DurgaAssistant() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  async function askDurga() {

    if (!question) {
      return;
    }

    const response =
      await searchMemory(
        question
      );

    if (
      response.error ||
      response.data.length === 0
    ) {

      setAnswer(
        "I could not find anything in memory."
      );

      return;
    }

    let result =
      "Based on your knowledge vault:\n\n";

    response.data.forEach(
      (note) => {

        result +=
          `📚 ${note.title}\n`;

        result +=
          `${note.content}\n\n`;

      }
    );

    setAnswer(result);

  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        🤖 Durga Conversational Assistant
      </h2>

      <textarea
        rows="3"
        className="w-full border p-3 rounded-xl"
        placeholder="Ask Durga anything..."
        value={question}
        onChange={(e) =>
          setQuestion(
            e.target.value
          )
        }
      />

      <button
        onClick={askDurga}
        className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-xl"
      >
        Ask Durga
      </button>

      <div className="mt-6 bg-slate-50 p-4 rounded-xl whitespace-pre-wrap">

        {answer || "Waiting for your question..."}

      </div>

    </div>
  );
}

export default DurgaAssistant;