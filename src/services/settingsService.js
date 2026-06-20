import { supabase } from "../lib/supabase";

export async function saveSettings(
  settings
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return await supabase
    .from("settings")
    .insert([
      {
        ...settings,
        user_id: user.id,
      },
    ]);
}

export async function getSettings() {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return await supabase
    .from("settings")
    .select("*")
    .eq("user_id", user.id)
    .order(
      "created_at",
      {
        ascending: false,
      }
    )
    .limit(1)
    .single();
}