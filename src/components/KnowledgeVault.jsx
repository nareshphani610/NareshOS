import { useState } from "react";

function KnowledgeVault() {

  const [vault] = useState([

    {
      title: "AZ-104 Notes",
      category: "Career",
      description:
        "Azure Administration study notes and interview preparation.",
    },

    {
      title: "Bhagavatgitha Project",
      category: "Project",
      description:
        "AI-powered scripture assistant roadmap, datasets, RAG architecture and app ideas.",
    },

    {
      title: "Financial Knowledge",
      category: "Wealth",
      description:
        "Debt reduction strategies, SIP investing, wealth creation and tax planning.",
    },

    {
      title: "Life Lessons",
      category: "Personal",
      description:
        "Important lessons learned from career, family and financial decisions.",
    },

    {
      title: "Durga Knowledge Base",
      category: "AI",
      description:
        "Core memory used by Durga AI for recommendations and guidance.",
    },

  ]);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        📚 Knowledge Vault
      </h2>

      <div className="space-y-4">

        {vault.map((item, index) => (

          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-xl"
          >

            <p className="font-bold">
              {item.title}
            </p>

            <p className="text-sm text-gray-500">
              {item.category}
            </p>

            <p className="mt-2">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default KnowledgeVault;