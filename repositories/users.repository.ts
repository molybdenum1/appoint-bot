import supabase from "../db.js";

export async function findUserByTelegramId(id: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("telegram_id", id)
    .single();

  if (error && error.code !== "PGRST116") {
    // PGRST116 = not found
    throw error;
  }

  return data;
}

export async function findUsers() {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    throw error;
  }

  return data || [];
}

export async function createUser(telegram_id: string, name?: string) {
  const { data, error } = await supabase
    .from("users")
    .insert({
      telegram_id,
      name: name || null,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createMasterUser(telegram_id: string, name?: string) {
  const { data, error } = await supabase
    .from("users")
    .insert({
      telegram_id,
      name: name || null,
      role: "master",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
