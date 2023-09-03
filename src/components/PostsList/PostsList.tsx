import { FC } from "react";
import { IPostPublication } from "@/types/formTypes";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { PostsListItem } from "./PostListItem/PostListItem";

export const PostsList: FC<{ posts: IPostPublication[] }> = ({ posts }) => {
  console.log(posts);

  const shortCardSummary = (summary: string) => {
    return summary.length > 100 ? `${summary.slice(0, 95)}...` : summary;
  };

  return (
    <>
      <Container sx={{ py: 8 }}>
        {/* End hero unit */}
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
