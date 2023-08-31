"use client";
import { useState } from "react";

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

import { StyledLink } from "./page.styled";

export default function Register() {
  const [accountType, setAccountType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAccountType(event.target.value as string);
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nickame"
            label="Nickname"
            name="nickname"
            autoComplete="nickname"
            autoFocus
          />

          <FormControl fullWidth sx={{ marginTop: "10px" }}>
            <InputLabel id="type">Account type</InputLabel>
            <Select
              labelId="type"
              id="type"
              value={accountType}
              label="Account type"
              onChange={handleChange}
            >
              <MenuItem value={"author"}>Author</MenuItem>
              <MenuItem value={"commentator"}>Commentator</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
      </Box>
    </>
  );
}
