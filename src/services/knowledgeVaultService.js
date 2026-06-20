import { supabase } from "../lib/supabase";

export async function getKnowledgeNotes() {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } =
    await supabase
      .from("knowledge_vault")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false,
      });

  return {
    data,
    error,
  };
}

export async function addKnowledgeNote(
  note
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } =
    await supabase
      .from("knowledge_vault")
      .insert([
        {
          ...note,
          user_id: user.id,
        },
      ]);

  return {
    data,
    error,
  };
}

export async function deleteKnowledgeNote(
  id
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } =
    await supabase
      .from("knowledge_vault")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

  return {
    error,
  };
}