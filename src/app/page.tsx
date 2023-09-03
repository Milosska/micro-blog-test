"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser, selectIsLoading } from "@/redux/selectors";
import { redirect } from "next/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { StyledContainer, StyledLink } from "./page.styled";

export default function Home() {
  const user = useSelector(selectUser);
  const selectIsAuthLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!selectIsAuthLoading && user) {
      redirect("/general");
    }
  }, [user, selectIsAuthLoading]);

  return (
    <StyledContainer>
      <Box
        sx={{
          position: "relative",
          top: "40%",
          left: "45%",
          width: 800,
          textAlign: "center",
          padding: "10px 5px",
        }}
      >
        <Typography
          variant="overline"
          component="h1"
          sx={{
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          Welcome to the MicroBlog App!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            fontSize: "24px",
            marginTop: "10px",
          }}
        >
          Let&apos;s get started
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <StyledLink href="/register">Sign Up</StyledLink>
          <StyledLink href="/login">Sign In</StyledLink>
        </Box>
      </Box>
    </StyledContainer>
  );
}
