"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackBtn: FC<{ styles: {} }> = ({ styles }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{ ...styles }}
        onClick={handleClick}
      >
        Go back
      </Button>
    </>
  );
};
