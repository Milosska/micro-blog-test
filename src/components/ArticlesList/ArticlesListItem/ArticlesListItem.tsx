"use client";
import { FC, useState } from "react";
import { IPostPublication } from "@/types/formTypes";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import { StyledLink } from "./PostListitem.styled";

export const ArticlesListItem: FC<{ post: IPostPublication }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReadMore = () => {
    setIsOpen((prevState) => !prevState);
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
        <Typography>{post.summary}</Typography>
        {isOpen && (
          <Typography
            variant="body2"
            sx={{
              padding: "10px 5px",
              fontSize: 16,
              textTransform: "none",
              textAlign: "justify",
            }}
          >
            {post.text}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {/* <StyledLink href={`/general/${post.author_id}`}>View author</StyledLink> */}
        <Button
          onClick={handleReadMore}
          size="small"
          sx={{ fontWeight: 700, fontSize: "16px" }}
        >
          {isOpen ? "Hide text" : "Read more"}
        </Button>
        <Button size="small" sx={{ fontWeight: 700, fontSize: "16px" }}>
          Comment
        </Button>
        <Button size="small" sx={{ fontWeight: 700, fontSize: "16px" }}>
          See all comments
        </Button>
      </CardActions>
    </Card>
  );
};
