import { FC } from "react";
import { handleLogout } from "@/helpers/supabase/supabaseAuth";

import Button from "@mui/material/Button";

export const LogoutBtn: FC = () => {
  const handleLogOut = async () => {
    await handleLogout();
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
