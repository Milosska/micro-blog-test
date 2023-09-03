"use client";
import { FC, useState, useEffect } from "react";

import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Loader: FC = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="indeterminate" color="primary" size="7rem" />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
          }}
        >
          <Typography
            component="div"
            color="text.secondary"
            sx={{
              fontSize: "32px",
            }}
          >{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
    </>
  );
};
