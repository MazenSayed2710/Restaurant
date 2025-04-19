import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw Error("There are error in password or email");
  return data;
}

export async function getUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data: user, error } = await supabase.auth.getUser();
  if (error) throw Error("there are somthing wrong in auth");
  return user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw Error(error.message);
}

export async function signup({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw Error(error.message);
  return data;
}
