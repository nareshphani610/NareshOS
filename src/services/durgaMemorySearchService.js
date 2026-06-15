import { supabase } from "../lib/supabase";

export async function searchMemory(
  query
) {

  const { data, error } =
    await supabase
      .from("knowledge_vault")
      .select("*");

  if (error) {
    return {
      data: [],
      error,
    };
  }

  const results =
    data.filter((note) =>
      (
        note.title +
        note.category +
        note.content
      )
        .toLowerCase()
        .includes(
          query.toLowerCase()
        )
    );

  return {
    data: results,
    error: null,
  };
}