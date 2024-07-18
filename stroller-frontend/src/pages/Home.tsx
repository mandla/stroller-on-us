import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/stroller.jpg";
const useStyles = makeStyles(() => ({
  hero: {
    position: "relative",
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    position: "relative",
    padding: "20px",
  },
}));
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <Container className={classes.content}>
        <Typography variant="h2" gutterBottom>
          Welcome to Let's Take a Stroller
        </Typography>
        <Typography variant="body1">
          Rent luxury strollers easily and affordably.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/listings"
        >
          Browse Listings
        </Button>
      </Container>
    </div>
  );
};
export default Home;
