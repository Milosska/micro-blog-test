import { FC, useState, useEffect } from "react";
import { IComment } from "@/types/formTypes";

import { getAllCommentsByPost } from "@/helpers/supabase/supabaseComments";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { CommentsListItem } from "./CommentsListItem/CommentsListItem";
import { Loader } from "@/components/Loader/Loader";
import { LoaderContainer } from "./CommentsList.styled";

export const CommentsList: FC<{ postId: number }> = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      const data = await getAllCommentsByPost(postId);
      setComments(data);
      setIsLoading(false);
    };

    getComments();
  }, [postId]);

  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <List
          sx={{
            maxHeight: "500px",
            overflow: "auto",
            "& :not(:last-child)": {
              mb: "15px",
            },
          }}
        >
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentsListItem key={comment.id} comment={comment} />
            ))
          ) : (
            <Typography
              gutterBottom
              variant="overline"
              component="p"
              sx={{
                fontSize: "18px",
                textTransform: "none",
                textAlign: "center",
              }}
            >
              No comments are made for this post yet.
            </Typography>
          )}
        </List>
      )}
    </>
  );
};
