import { supabase, supabaseUrl } from "./supabase";

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
  // 1) Update text data
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

  if (!userData.avatar) return data;

  // 2) Uploading user-image if changed

  const fileName = `avatar-${data.user.id}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, userData.avatar, {
      upsert: true,
    });

  if (storageError) throw new Error(storageError.message);

  const { data: finalData, error: finalError } = await supabase.auth.updateUser(
    {
      data: {
        // Added the Date.now() to Force browser to fetch the new image
        // Browser caches the image for too long
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}?${Date.now()}`,
      },
    }
  );

  if (finalError) throw new Error(finalError.message);

  return finalData;
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("something went wrong during logout");
}

export { signup, login, getCurrentUser, updateUserData, logout };
