import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {  Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: 'none'
  }
}));

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className={classes.navbar} elevation={0}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Sign In"
            component={Link}
            to={"/landing"}
          />
          <Tab
            label="Search Video"
            component={Link}
            to={"/search"}
          />
          <Tab
            label="My Video Notes"
            component={Link}
            to={"/savednotes"}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavBar;