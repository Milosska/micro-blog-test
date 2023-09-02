import { FC } from "react";
import { IPostPublication } from "@/types/formTypes";

import Button from "@mui/material/Button";

export const PostsList: FC<{ posts: IPostPublication[] }> = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <p>PostsList</p>
    </>
  );
};
