import supabase from "./supabase";

async function getSection(type) {
  let { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("type", type);

  if (error) {
    console.error(error.message);
    throw new Error("There are something wrong in fetching data");
  }

  return data;
}
async function getItems() {
  let { data, error } = await supabase.from("items").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("There are something wrong in fetching data");
  }

  return data;
}

async function getItemById(id) {
  try {
    let { data, error } = await supabase.from("items").select("*").eq("id", id);
    if (error) {
      console.error(error.message);
      return null;
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getMenus() {
  let { data: menus, error } = await supabase.from("menus").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("There are something wrong in fetching data");
  }
  return menus;
}
export { getSection, getItemById, getItems, getMenus };

async function getOffers() {
  let { data, error } = await supabase.from("offers").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("There are something wrong in fetching data");
  }
  return data;
}

export default getOffers;
