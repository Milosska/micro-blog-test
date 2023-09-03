"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { useSelector } from "react-redux";
import { selectUser, selectIsLoading } from "@/redux/selectors";
import { redirect } from "next/navigation";

import { getPostsByAuthor } from "@/helpers/supabase/supabasePosts";
import { IPostPublicationExtended } from "@/types/formTypes";

import Typography from "@mui/material/Typography";
import { ArticlesList } from "@/components/ArticlesList/ArtictesList";

export default function AuthorPage() {
  const [posts, setPosts] = useState<IPostPublicationExtended[]>([]);
  const [author, setAuthor] = useState<string | null>(null);
  const pathname = usePathname();
  const authorId = pathname.split("/")[2];
  const user = useSelector(selectUser);
  const selectIsAuthLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!selectIsAuthLoading && !user) {
      redirect("/");
    }
  }, [user, selectIsAuthLoading]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getPostsByAuthor(authorId);
      setPosts(data);
      setAuthor(data[0].users_data.nickname);
    };

    getPosts();
  }, [authorId]);

  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        sx={{ textAlign: "center", marginTop: "40px" }}
      >
        {author} posts
      </Typography>
      <ArticlesList posts={posts} />
    </>
  );
}
