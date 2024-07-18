import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Let's Take a Stroller
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/listings">
          Listings
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
