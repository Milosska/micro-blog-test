import { supabase } from "./supabaseClient";
import { ICommentForm, IComment } from "@/types/formTypes";

export const getAllCommentsByPost = async (postId: number) => {
  try {
    let { data: comments, error } = await supabase
      .from("comments")
      .select("*, users_data(nickname)")
      .eq("post_id", `${postId}`);

    if (error) {
      throw new Error();
    }

    return comments as IComment[];
  } catch (error: any) {
    console.error("Unexpected error during comment receiving:", error.message);
    return [];
  }
};

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
