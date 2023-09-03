"use client";
import { FC, useState } from "react";
import { IPostPublication } from "@/types/formTypes";

import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { AddCommentForm } from "@/components/Forms/AddCommentForm/AddCommentForm";
import { CommentsList } from "../CommentsList/CommentsList";

export const ArticlesListItem: FC<{ post: IPostPublication }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);

  const handleSeeComments = () => {
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
      <CardMedia sx={{ height: 250 }} image={post.img_url} title="Post image" />
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

        {user?.type === "commentator" && <AddCommentForm postId={post.id} />}
        {isOpen && <CommentsList postId={post.id} />}
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={handleSeeComments}
          size="small"
          sx={{ fontWeight: 700, fontSize: "16px" }}
        >
          {isOpen ? "Hide comments" : "See all comments"}
        </Button>
      </CardActions>
    </Card>
  );
};
