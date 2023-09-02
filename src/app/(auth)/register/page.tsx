"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/helpers/formValidationSchemas";
import { IRegisterForm } from "@/types/formTypes";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { registerUser } from "@/redux/authSlice/operations";
import { selectRegisterMessage } from "@/redux/selectors";
import { clearRegisterMessage } from "@/redux/authSlice/authSlice";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { StyledLink } from "./page.styled";

export default function Register() {
  const [accountType, setAccountType] = useState("");
  const isMessage = useSelector(selectRegisterMessage);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: SelectChangeEvent) => {
    setAccountType(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    dispatch(registerUser(data));
    setAccountType("");
    reset();
  };

  const handleAlertClose = () => {
    dispatch(clearRegisterMessage());
  };

  return (
    <>
      <Box
        sx={{
          width: 500,
          margin: "2% auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="nickame"
            label="Nickname"
            autoComplete="nickname"
            autoFocus
            error={errors.nickname ? true : false}
            helperText={errors.nickname?.message}
            {...register("nickname")}
          />

          <FormControl fullWidth sx={{ marginTop: "10px" }}>
            <InputLabel id="type">Account type</InputLabel>
            <Select
              labelId="type"
              id="type"
              value={accountType}
              label="Account type"
              error={errors.type ? true : false}
              {...register("type")}
              onChange={handleChange}
            >
              <MenuItem value={"author"}>Author</MenuItem>
              <MenuItem value={"commentator"}>Commentator</MenuItem>
            </Select>
            {errors.type && !accountType && (
              <FormHelperText error>{errors.type?.message}</FormHelperText>
            )}
          </FormControl>

          <TextField
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
            margin="normal"
            required
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
            Sign Up
          </Button>
          <StyledLink href="/login">
            {"Already have an account? Sign in"}
          </StyledLink>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMessage.length > 0}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleAlertClose}
            severity={
              isMessage ===
              "Registrated successfully! Please, verify your email"
                ? "success"
                : "error"
            }
            sx={{ width: "100%" }}
          >
            {isMessage}
          </MuiAlert>
        </Snackbar>
      </Box>
    </>
  );
}
