import { supabase } from "../lib/supabase";

export async function saveLiabilities(liabilities) {
  const { data, error } = await supabase
    .from("liabilities")
    .insert([liabilities]);

  return {
    data,
    error,
  };
}

export async function getLatestLiabilities() {
  const { data, error } = await supabase
    .from("liabilities")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  return {
    data,
    error,
  };
}