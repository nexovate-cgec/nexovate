import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://tkvdkzfqohjzssuyqdmo.supabase.co";

const supabaseAnonKey =
  "sb_publishable_Vu0Rl61ir4Z_pnlSQhA8Yw_Ri2gEKOU";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);