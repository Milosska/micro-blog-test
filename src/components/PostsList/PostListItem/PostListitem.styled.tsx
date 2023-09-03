"use client";
import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  min-width: 64px;
  padding: 6px 8px;

  color: rgb(25, 118, 210);
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover,
  :focus {
    background-color: rgba(25, 118, 210, 0.04);
  }
`;
