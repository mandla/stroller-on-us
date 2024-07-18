import React from "react";
import { Container, Typography } from "@mui/material";
const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Let's Take a Stroller
      </Typography>
      <Typography variant="body1">
        Rent luxury strollers easily and affordably.
      </Typography>
    </Container>
  );
};
export default Home;
