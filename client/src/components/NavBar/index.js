import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import {  Link } from 'react-router-dom';

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="appBar">
      <AppBar>
        <Tabs variant='fullWidth' value={value} onChange={handleChange}>
          <Tab
            label="Signup"
            component={Link}
            to={"/signup"}
          />
          <Tab
            label="Search Page"
            component={Link}
            to={"/search"}
          />
          <Tab
            label="Saved Notes"
            component={Link}
            to={"/savednotes"}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavBar;