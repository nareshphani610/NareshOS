import { supabase } from "../lib/supabase";

export async function saveAssets(assets) {
  const { data, error } = await supabase
    .from("assets")
    .insert([assets]);

  return { data, error };
}

export async function getLatestAssets() {
  const { data, error } = await supabase
    .from("assets")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  return {
    data,
    error,
  };
}