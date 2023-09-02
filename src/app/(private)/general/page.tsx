"use client";
import { useState, useEffect } from "react";

import { getAllPosts } from "@/helpers/supabase/supabasePosts";
import { IPostPublication } from "@/types/formTypes";

import { PostsList } from "@/components/PostsList/PostsList";
import { AddNewPostForm } from "@/components/Forms/AddNewPostForm/AddNewPostForm";

export default function GeneralPage() {
  const [posts, setPosts] = useState<IPostPublication[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <>
      <AddNewPostForm />
      <PostsList posts={posts} />
    </>
  );
}
