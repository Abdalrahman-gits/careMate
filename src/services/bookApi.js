import { supabase } from "./supabase";

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
  const { data, error } = await supabase
    .from("bookings")
    .select(
      `
      id,
      booking_date,
      doctors:doctor_id (
        id,
        full_name,
        speciality,
        image_url
      )
    `
    )
    .eq("user_id", userId)
    .order("booking_date", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}

async function deleteAppointment(id) {
  console.log(id);
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  console.log(data, error);
  if (error) throw new Error(error.message);
}

export { addAppointment, getUserAppointments, deleteAppointment };
