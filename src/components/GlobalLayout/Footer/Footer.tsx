import { FC } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export const Footer: FC = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          padding: "10px 24px",
          backgroundColor: "primary.main",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="#FFFFFF" fontSize={16}>
          {"Copyright "}
          <Link
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://github.com/Milosska"
            underline="hover"
            color="#FFFFFF"
            variant="overline"
            sx={{ fontWeight: "bold", fontSize: 16 }}
          >
            © Milosska
          </Link>
          {" 2023"}
        </Typography>
      </Box>
    </footer>
  );
};
