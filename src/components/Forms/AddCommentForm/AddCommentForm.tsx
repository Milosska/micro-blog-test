import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "@/helpers/formValidationSchemas";
import { ICommentForm } from "@/types/formTypes";

import { handleAddComment } from "@/helpers/supabase/supabaseComments";

import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const AddCommentForm: FC<{ postId: number }> = ({ postId }) => {
  const user = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(commentSchema),
  });

  const onSubmit: SubmitHandler<ICommentForm> = async (data) => {
    const commentData = { ...data, author_id: user!.id, post_id: postId };
    await handleAddComment(commentData);
    reset();
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
          padding: "0 10px",
          textAlign: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          margin="normal"
          fullWidth
          id="comment"
          label="Comment"
          multiline
          rows={5}
          error={errors.comment ? true : false}
          helperText={errors.comment?.message}
          {...register("comment")}
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          sx={{ mt: 3, mb: 2, display: "block", marginLeft: "auto" }}
        >
          Comment
        </Button>
      </Box>
    </>
  );
};
