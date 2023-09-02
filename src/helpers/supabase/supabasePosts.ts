import { supabase } from "./supabaseClient";
import { IPostPublication } from "@/types/formTypes";

export const getAllPosts = async () => {
  try {
    let { data: posts, error } = await supabase.from("posts").select("*");

    if (error) {
      throw new Error();
    }

    return posts as IPostPublication[];
  } catch (error: any) {
    console.error("Unexpected error:", error.message);
    return [];
  }
};

export const handleAddPost = async (postData: IPostPublication) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ ...postData }])
      .select();

    if (error) {
      throw new Error();
    }

    return data;
  } catch (error: any) {
    console.error("Unexpected error during post publication:", error.message);
  }
};
