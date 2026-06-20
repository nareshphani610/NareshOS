import { useState } from "react";

function EndpointCopilot() {

  const [prompt, setPrompt] =
    useState("");

  const [response, setResponse] =
    useState("");

  const generateResponse = () => {

    const text =
      prompt.toLowerCase();

    if (
      text.includes("chrome")
    ) {

      setResponse(`
# Chrome Detection Script

if (Test-Path "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe") {
    Write-Output "Installed"
    exit 0
}
exit 1
      `);

      return;
    }

    if (
      text.includes("bitlocker")
    ) {

      setResponse(`
# BitLocker Status

Get-BitLockerVolume |
Select MountPoint,
ProtectionStatus
      `);

      return;
    }

    if (
      text.includes("registry")
    ) {

      setResponse(`
Registry Analysis

HKLM\\Software\\Policies

Use Intune Settings Catalog
or Custom OMA-URI.
      `);

      return;
    }

    setResponse(
      "No template found. Add AI integration later."
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">

      <h1 className="text-3xl font-bold mb-6">
        🖥️ Endpoint Engineering Copilot
      </h1>

      <textarea
        rows={5}
        value={prompt}
        onChange={(e) =>
          setPrompt(
            e.target.value
          )
        }
        placeholder="
Example:
Create Chrome Detection Script

Create BitLocker Report

Explain Registry Key
"
        className="
        w-full
        border
        p-4
        rounded-xl
        "
      />

      <button
        onClick={
          generateResponse
        }
        className="
        mt-4
        bg-indigo-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Generate
      </button>

      <pre
        className="
        mt-6
        bg-slate-100
        dark:bg-slate-800
        p-4
        rounded-xl
        overflow-auto
        "
      >
        {response}
      </pre>

    </div>
  );
}

export default EndpointCopilot;