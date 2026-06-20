import { supabase } from "../lib/supabase";

export async function saveAssets(assets) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } =
    await supabase
      .from("assets")
      .insert([
        {
          ...assets,
          user_id: user.id,
        },
      ]);

  return {
    data,
    error,
  };
}

export async function getLatestAssets() {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } =
    await supabase
      .from("assets")
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