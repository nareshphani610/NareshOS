import { useEffect, useState } from "react";

import {
  getKnowledgeNotes,
  addKnowledgeNote,
  deleteKnowledgeNote,
} from "../services/knowledgeVaultService";

function DynamicKnowledgeVault() {

  const [notes, setNotes] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [content, setContent] =
    useState("");

  const [search, setSearch] =
    useState("");

  async function loadNotes() {

    const result =
      await getKnowledgeNotes();

    if (!result.error) {
      setNotes(result.data);
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function saveNote() {

    if (
      !title ||
      !category ||
      !content
    ) {
      alert("Fill all fields");
      return;
    }

    await addKnowledgeNote({
      title,
      category,
      content,
    });

    setTitle("");
    setCategory("");
    setContent("");

    loadNotes();
  }

  async function removeNote(id) {

    await deleteKnowledgeNote(id);

    loadNotes();
  }

  const filteredNotes =
    notes.filter((note) =>
      (
        note.title +
        note.category +
        note.content
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📚 Dynamic Knowledge Vault
      </h2>

      <input
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Search Notes"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <input
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        className="w-full border p-2 rounded-lg mb-3"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <textarea
        className="w-full border p-2 rounded-lg mb-3"
        rows="4"
        placeholder="Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <button
        onClick={saveNote}
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
      >
        ➕ Save Note
      </button>

      <div className="mt-6 space-y-4">

        {filteredNotes.map((note) => (

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

            <button
              onClick={() =>
                removeNote(note.id)
              }
              className="mt-3 bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DynamicKnowledgeVault;