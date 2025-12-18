import { supabase } from "./supabase";

async function getReviews(userId) {
  // This query gets all doctors even if there is no review yet
  const { data, error } = await supabase
    .from("doctors")
    .select(
      `
    *,
    reviews!left (
      id,
      rate,
      comment,
      created_at,
      user_id
    )
  `
    )
    .eq("reviews.user_id", userId);

  if (error) throw new Error(error.message);

  return data;
}

async function addReview(userData) {
  const { error } = await supabase.from("reviews").insert([userData]).select();

  if (error) throw new Error(error.message);
}

async function editReview(id, userData) {
  const { error } = await supabase
    .from("reviews")
    .update(userData)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
}

export { getReviews, addReview, editReview };
