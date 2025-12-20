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

async function login(userData) {
  const { email, password } = userData;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error("couldn't get user");

  return data;
}

async function updateUserData(userData) {
  const { data, error } = await supabase.auth.updateUser({
    email: userData.email,
    data: {
      name: userData.name,
      phone: userData.phone,
      address: userData.address,
      gender: userData.gender,
      dateOfBirth: userData.dateOfBirth,
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("something went wrong during logout");
}

export { signup, login, getCurrentUser, updateUserData, logout };
