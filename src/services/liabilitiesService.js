import { supabase } from "../lib/supabase";

export async function saveLiabilities(
  liabilities
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } =
    await supabase
      .from("liabilities")
      .insert([
        {
          ...liabilities,
          user_id: user.id,
        },
      ]);

  return {
    data,
    error,
  };
}

export async function getLatestLiabilities() {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } =
    await supabase
      .from("liabilities")
      .select("*")
      .eq("user_id", user.id)
      .order(
        "created_at",
        {
          ascending: false,
        }
      )
      .limit(1);

  return {
    data,
    error,
  };
}