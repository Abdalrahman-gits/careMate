import { supabase } from "./supabase";

async function signup(userData) {
  const { email, password, name, phone } = userData;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        phone,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error("couldn't get user");
  console.log(data);

  return data;
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("something went wrong during logout");
}

export { signup, getCurrentUser, logout };
