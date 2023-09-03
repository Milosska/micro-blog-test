"use client";
import styled from "styled-components";

export const StyledNickname = styled.p`
  margin-bottom: 0;

  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.25;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
