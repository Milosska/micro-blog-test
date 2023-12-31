import { FC } from "react";
import { IPostPublication } from "@/types/formTypes";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { PostsListItem } from "./PostListItem/PostListItem";

export const PostsList: FC<{ posts: IPostPublication[] }> = ({ posts }) => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={6}>
              <PostsListItem post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
