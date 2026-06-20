import { useEffect, useState } from "react";
import { getSettings } from "../services/settingsService";

export default function useSettings() {

  const [settings, setSettings] =
    useState(null);

  useEffect(() => {

    async function load() {

      const result =
        await getSettings();

      if (result.data) {
        setSettings(
          result.data
        );
      }

    }

    load();

  }, []);

  return settings;
}