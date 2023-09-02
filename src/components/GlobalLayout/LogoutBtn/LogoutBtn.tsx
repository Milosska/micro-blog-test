import { FC } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logoutUser } from "@/redux/authSlice/operations";

import Button from "@mui/material/Button";

export const LogoutBtn: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = async () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Button
        onClick={handleLogOut}
        variant="outlined"
        sx={{
          color: "#FFFFFF",
          fontWeight: 700,
          letterSpacing: 0.02857,
        }}
      >
        Log Out
      </Button>
    </>
  );
};
