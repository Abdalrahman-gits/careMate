import { supabase } from "./supabase";

async function getDoctors() {
  const { data: doctors, error } = await supabase.from("doctors").select("*");

  if (error) throw new Error(error.message);

  return doctors;
}

export { getDoctors };
