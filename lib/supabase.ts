import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ekcunpcpqsvkciliahum.supabase.co";

const supabaseAnonKey =
  "sb_publishable_7gyGwyB2f-KLshvFd9m4gA_X8pB7bNI";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);