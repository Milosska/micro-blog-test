"use client";
import { FC, useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TryIcon from "@mui/icons-material/Try";

import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import { StyledLink, LinksContainer, NavLink } from "./Header.styled";

export const Header: FC<{ user: User | null }> = ({ user }) => {
  console.log(user);
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <StyledLink href="/">
            <TryIcon sx={{ fontSize: 30 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              MicroBlog
            </Typography>
          </StyledLink>
          <LinksContainer>
            {user ? (
              <>
                <Typography
                  variant="button"
                  component="p"
                  sx={{ fontWeight: "bold" }}
                >
                  Hello, {user.email}
                </Typography>
                <LogoutBtn />
              </>
            ) : (
              <>
                <NavLink href="/register">Sign Up</NavLink>
                <NavLink href="/login">Sign In</NavLink>
              </>
            )}
          </LinksContainer>
        </Toolbar>
      </AppBar>
    </>
  );
};
