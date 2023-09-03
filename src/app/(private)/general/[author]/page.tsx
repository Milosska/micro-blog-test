"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { getPostsByAuthor } from "@/helpers/supabase/supabasePosts";
import { IPostPublication } from "@/types/formTypes";

import { ArticlesList } from "@/components/ArticlesList/ArtictesList";

export default function AuthorPage() {
  const [posts, setPosts] = useState<IPostPublication[]>([]);
  const pathname = usePathname();
  const authorId = pathname.split("/")[2];

  console.log(posts);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getPostsByAuthor(authorId);
      setPosts(data);
    };

    getPosts();
  }, [authorId]);

  return (
    <>
      <ArticlesList posts={posts} />
    </>
  );
}
