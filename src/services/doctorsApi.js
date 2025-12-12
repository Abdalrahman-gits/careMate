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

async function addAppointment(data) {
  const { error } = await supabase
    .from("bookings")
    .insert([
      {
        doctor_id: data.doctorId,
        user_id: data.userId,
        booking_date: data.date,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}

async function getUserAppointments(userId) {
  console.log(userId);
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
}

export { getDoctors, getDoctorInfo, addAppointment, getUserAppointments };
