import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://noybxdvzrtcerkddillq.supabase.co";

const supabaseKey =
  "sb_publishable_8czMnXpgvUz0GJy8YYZB9w_YZPZvG97";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );