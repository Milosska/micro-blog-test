"use client";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectUser, selectIsLoading } from "@/redux/selectors";
import { redirect } from "next/navigation";

import { getAllPosts } from "@/helpers/supabase/supabasePosts";
import { IPostPublication } from "@/types/formTypes";

import { PostsList } from "@/components/PostsList/PostsList";
import { AddNewPostForm } from "@/components/Forms/AddNewPostForm/AddNewPostForm";

export default function GeneralPage() {
  const [posts, setPosts] = useState<IPostPublication[]>([]);
  const user = useSelector(selectUser);
  const selectIsAuthLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!selectIsAuthLoading && !user) {
      redirect("/");
    }
  }, [user, selectIsAuthLoading]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <>
      {user?.type === "author" && <AddNewPostForm />}
      <PostsList posts={posts} />
    </>
  );
}
