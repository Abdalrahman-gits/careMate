import { supabase } from "./supabase";

async function getDoctors() {
  const { data: doctors, error } = await supabase.from("doctors").select("*");

  if (error) throw new Error(error.message);

  return doctors;
}

async function getDoctorInfo(doctorId) {
  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("id", doctorId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export { getDoctors, getDoctorInfo };
