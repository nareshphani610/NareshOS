import { supabase } from "../lib/supabase";

export async function getKnowledgeNotes() {

  const { data, error } =
    await supabase
      .from("knowledge_vault")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  return { data, error };
}

export async function addKnowledgeNote(
  note
) {

  const { data, error } =
    await supabase
      .from("knowledge_vault")
      .insert([note]);

  return { data, error };
}

export async function deleteKnowledgeNote(
  id
) {

  const { error } =
    await supabase
      .from("knowledge_vault")
      .delete()
      .eq("id", id);

  return { error };
}