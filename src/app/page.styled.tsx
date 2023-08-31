"use client";
import styled from "styled-components";
import bg from "../../public/images/home/main-bg-min.jpg";
import Link from "next/link";

export const StyledContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${bg.src});
`;

export const StyledLink = styled(Link)`
  min-width: 64px;
  padding: 6px 24px;
  border-radius: 4px;
  background-color: #1976d2;

  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:focus {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
