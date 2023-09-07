import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { FC } from "react";

export const UpBtn: FC = () => {
  const handleClick = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <IconButton
        aria-label="go up"
        onClick={handleClick}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 50,
          right: 50,
          width: 70,
          height: 70,
        }}
      >
        <ArrowUpwardIcon
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </IconButton>
    </>
  );
};
