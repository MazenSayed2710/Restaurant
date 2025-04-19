import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fmimfwijmxphzscjhjeg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtaW1md2lqbXhwaHpzY2poamVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5ODE4MTgsImV4cCI6MjA2MDU1NzgxOH0.fE5IVgOoODf05ngmKUz9I9locRv2jCBKp3CC_GwBN9o";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
