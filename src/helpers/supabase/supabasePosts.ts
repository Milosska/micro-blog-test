import { supabase } from "./supabaseClient";
import { IPostPublication, IPostForm } from "@/types/formTypes";

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

export const handleAddPost = async (postData: IPostForm) => {
  try {
    const { title, summary, text, topic, image, author_id } = postData;

    const imgKey = await uploadPostImage(postData.image);

    if (!imgKey) {
      throw new Error();
    }

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title,
          summary,
          text,
          topic,
          author_id,
          img_url: `https://eakfazqqinayqpbscgge.supabase.co/storage/v1/object/public/post-images/${imgKey.path}`,
        },
      ])
      .select();

    if (error) {
      throw new Error();
    }

    return data;
  } catch (error: any) {
    console.error("Unexpected error during post publication:", error.message);
  }
};

async function uploadPostImage(file: File) {
  try {
    const { data, error } = await supabase.storage
      .from("post-images")
      .upload(`${Date.now()}-${file.name}`, file);

    if (error) {
      throw new Error();
    }

    return data;
  } catch (error: any) {
    console.error("Unexpected error during post image upload:", error.message);
  }
}

export const getPostsByAuthor = async (authorId: string) => {
  try {
let { data: posts, error } = await supabase
  .from("posts")
  .select("*")
      .eq("author_id", `${authorId}`);
    
    if (error) {
      throw new Error();
    }

    return posts as IPostPublication[];
  } catch (error: any) {
    console.error("Unexpected error:", error.message);
    return [];
  }
};
