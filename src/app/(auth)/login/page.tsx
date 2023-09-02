"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/helpers/formValidationSchemas";
import { ILoginForm } from "@/types/formTypes";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loginUser } from "@/redux/authSlice/operations";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { StyledLink } from "./page.styled";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  const handleAuthorExample = () => {
    setValue("email", "wemamat937@pbridal.com");
    setValue("password", "qwe12345");
  };

  const handleCommentatorExample = () => {
    setValue("email", "sifimo3356@pbridal.com");
    setValue("password", "qwe12345");
  };

  return (
    <Box
      sx={{
        width: 500,
        margin: "5% auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          InputLabelProps={{ shrink: true }}
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          error={errors.password ? true : false}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Button
              onClick={handleAuthorExample}
              type="button"
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2, minWidth: "200px" }}
            >
              Author exp data
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={handleCommentatorExample}
              type="button"
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2, minWidth: "200px" }}
            >
              Commentator exp data
            </Button>
          </Grid>
        </Grid>
        <StyledLink href="/register">
          {"Don't have an account? Sign Up"}
        </StyledLink>
      </Box>
    </Box>
  );
}
