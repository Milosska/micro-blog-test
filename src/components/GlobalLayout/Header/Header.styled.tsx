"use client";
import styled from "styled-components";
import Link from "next/link";
import Box from "@mui/material/Box";

export const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const LinksContainer = styled(Box)`
  flex-grow: 1;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled(Link)`
  min-width: 64px;
  padding: 6px 8px;

  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;
