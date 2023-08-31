import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { StyledContainer, StyledLink } from "./page.styled";

export default function Home() {
  return (
    <StyledContainer>
      <Box
        sx={{
          position: "relative",
          top: "40%",
          left: "45%",
          width: 800,
          textAlign: "center",
        }}
      >
        <Typography
          variant="overline"
          component="h1"
          sx={{
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          Welcome to the MicroBlog App!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            fontSize: "24px",
            marginTop: "10px",
          }}
        >
          Let&apos;s get started
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <StyledLink href="/register">Sign Up</StyledLink>
          <StyledLink href="/login">Sign In</StyledLink>
        </Box>
      </Box>
    </StyledContainer>
  );
}
