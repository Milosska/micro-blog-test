import { FC } from "react";
import { IPostPublication } from "@/types/formTypes";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { StyledLink } from "./PostListitem.styled";

export const PostsListItem: FC<{ post: IPostPublication }> = ({ post }) => {
  const shortCardSummary = (summary: string) => {
    return summary.length > 100 ? `${summary.slice(0, 95)}...` : summary;
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={post.img_url} title="Post image" />
      <CardContent sx={{ flexGrow: 1, textTransform: "uppercase" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          sx={{ fontWeight: 700 }}
        >
          {post.title}
        </Typography>
        <Typography>{shortCardSummary(post.summary)}</Typography>
      </CardContent>
      <CardActions>
        <StyledLink href={`/general/${post.author_id}`}>View author</StyledLink>
      </CardActions>
    </Card>
  );
};
