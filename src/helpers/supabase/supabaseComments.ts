import { supabase } from "./supabaseClient";
import { ICommentForm } from "@/types/formTypes";

export const handleAddComment = async (commentData: ICommentForm) => {
  try {
    const { data, error } = await supabase
      .from("comments")
      .insert([{ ...commentData }])
      .select();

    if (error) {
      throw new Error();
    }

    return data;
  } catch (error: any) {
    console.error(
      "Unexpected error during comment publication:",
      error.message
    );
  }
};
