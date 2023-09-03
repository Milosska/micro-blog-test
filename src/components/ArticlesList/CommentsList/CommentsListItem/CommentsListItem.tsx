import { FC } from "react";
import { IComment } from "@/types/formTypes";

import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import { StyledNickname } from "./CommentListItem.styled";

export const CommentsListItem: FC<{ comment: IComment }> = ({ comment }) => {
  const user = useSelector(selectUser);
  const time = `${new Date(comment.created_at).toUTCString().slice(0, -3)}`;

  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: user?.id === comment.author_id ? "row-reverse" : "row",
        gap: "20px",
        alignItems: "baseline",
        width: "100%",
        backgroundColor: user?.id === comment.author_id ? "#cde7fc" : "#e7e7e7",
        ".MuiChip-root": {
          marginBottom: 0,
        },
      }}
    >
      <Box
        sx={{
          padding: "0",
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <StyledNickname>{comment.users_data.nickname}</StyledNickname>
        <Chip
          label={time}
          variant="filled"
          sx={{ backgroundColor: "#FFFFFF" }}
        />
      </Box>
      <ListItemText primary={comment.comment} sx={{ textTransform: "none" }} />
    </ListItem>
  );
};
