import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Tabs, Tab, AppBar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: '#d29679'
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginTop: "4.5px",
    marginRight: "43px"
  }
}));

function NavBar() {
  const classes = useStyles();
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const login = () => {
    loginWithRedirect();
    while (isLoading);
    console.log('test test test');
    if (isAuthenticated) {
      console.log(user.name);
    }
  }

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
          <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })} className={classes.toolbarButtons}>
            Log Out
			    </Button>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavBar;