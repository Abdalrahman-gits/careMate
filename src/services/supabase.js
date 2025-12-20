import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://enmomjenfxnhbaehgyvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubW9tamVuZnhuaGJhZWhneXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3ODcwNjYsImV4cCI6MjA4MDM2MzA2Nn0.ClmVBWV2ytW09Qy_rKoXiPJn3rZNnKa9nDOWry9sDNQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase, supabaseUrl };
