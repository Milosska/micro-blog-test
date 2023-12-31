"use client";
import { FC, useState, ChangeEvent } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "@/helpers/formValidationSchemas";
import { IPostForm } from "@/types/formTypes";

import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors";

import { handleAddPost } from "@/helpers/supabase/supabasePosts";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

import { FormGrid, FormThumb } from "./AddnewFormPost.styled";

export const AddNewPostForm: FC = () => {
  const [postTopic, setPostTopic] = useState("");
  const user = useSelector(selectUser);

  const handleTopicChange = (event: SelectChangeEvent) => {
    setPostTopic(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onSubmit: SubmitHandler<IPostForm> = async (data) => {
    const postData = { ...data, author_id: user!.id };
    console.log(postData);

    await handleAddPost(postData);
    setPostTopic("");
    reset();
  };

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.files) {
      const selectedFile: File = target.files[0];
      setValue("image", selectedFile);
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
          padding: "20px 100px",
          textAlign: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography component="h2" variant="h4">
          Add your new post
        </Typography>
        <FormGrid>
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Post title"
            autoComplete="title"
            autoFocus
            error={errors.title ? true : false}
            helperText={errors.title?.message}
            {...register("title")}
          />

          <TextField
            margin="normal"
            fullWidth
            id="summary"
            label="Summary"
            autoComplete="summary"
            autoFocus
            error={errors.summary ? true : false}
            helperText={errors.summary?.message}
            {...register("summary")}
          />
          <FormThumb>
            <FormControl
              sx={{
                textAlign: "start",
                width: "450px",
              }}
            >
              <InputLabel id="type">Topic</InputLabel>
              <Select
                labelId="topic"
                id="topic"
                value={postTopic}
                label="Topic"
                error={errors.topic ? true : false}
                {...register("topic")}
                onChange={handleTopicChange}
              >
                <MenuItem value={"science"}>Science</MenuItem>
                <MenuItem value={"history"}>History</MenuItem>
                <MenuItem value={"art"}>Art</MenuItem>
                <MenuItem value={"literature"}>Literature</MenuItem>
                <MenuItem value={"politics"}>Politics</MenuItem>
              </Select>
              {errors.topic && !postTopic && (
                <FormHelperText error>{errors.topic?.message}</FormHelperText>
              )}
            </FormControl>

            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image"
              required
              type="file"
              {...register("image")}
              onChange={handleFile}
            />
            <label htmlFor="image">
              <Button component="span">Upload post image</Button>
              <p>{errors.image?.message}</p>
            </label>
          </FormThumb>
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Post text"
            autoFocus
            multiline
            rows={9}
            error={errors.text ? true : false}
            helperText={errors.text?.message}
            {...register("text")}
          />
        </FormGrid>
        <Button
          type="submit"
          size="large"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create post
        </Button>
      </Box>
    </>
  );
};
