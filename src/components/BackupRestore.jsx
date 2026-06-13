function BackupRestore() {

  const exportData = () => {

    const data = {};

    for (let i = 0; i < localStorage.length; i++) {

      const key = localStorage.key(i);

      data[key] = localStorage.getItem(key);
    }

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "NareshOS_Backup.json";

    a.click();

    URL.revokeObjectURL(url);
  };

  const importData = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {

      const data = JSON.parse(e.target.result);

      Object.keys(data).forEach((key) => {
        localStorage.setItem(key, data[key]);
      });

      alert("Backup Restored Successfully");

      window.location.reload();
    };

    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        💾 Backup & Restore
      </h2>

      <div className="flex gap-4">

        <button
          onClick={exportData}
          className="bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          Export Backup
        </button>

        <label className="bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer">
          Import Backup

          <input
            type="file"
            accept=".json"
            onChange={importData}
            className="hidden"
          />
        </label>

      </div>

    </div>
  );
}

export default BackupRestore;