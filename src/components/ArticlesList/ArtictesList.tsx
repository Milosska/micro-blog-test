import { FC } from "react";
import { IPostPublication } from "@/types/formTypes";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { ArticlesListItem } from "./ArticlesListItem/ArticlesListItem";

export const ArticlesList: FC<{ posts: IPostPublication[] }> = ({ posts }) => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12}>
              <ArticlesListItem post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
