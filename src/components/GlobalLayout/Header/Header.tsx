"use client";
import { FC } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TryIcon from "@mui/icons-material/Try";

import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import { StyledLink, LinksContainer, NavLink } from "./Header.styled";

export const Header: FC = () => {
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
            <NavLink href="/register">Sign Up</NavLink>
            <NavLink href="/login">Sign In</NavLink>
            <LogoutBtn />
          </LinksContainer>
        </Toolbar>
      </AppBar>
    </>
  );
};
