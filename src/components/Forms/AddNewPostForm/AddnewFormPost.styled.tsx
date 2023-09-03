"use client";
import styled from "styled-components";

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 10px;
  justify-items: center;
  align-items: center;

  > div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  > div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  > div:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  > div:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }
`;

export const FormThumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;
