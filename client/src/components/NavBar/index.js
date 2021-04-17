import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import {  Link } from 'react-router-dom';

function NavBar() {
  const routes = ["/signup", "/search", "/videoeditor"];

  return (
    <div className="appBar">
      <AppBar>
        <Tabs>
          <Tab
            label="Signup"
            value={routes[0]}
            component={Link}
            to={routes[0]}
          />
          <Tab
            label="Search Page"
            value={routes[1]}
            component={Link}
            to={routes[1]}
          />
          <Tab
            label="Video Notes Editor"
            value={routes[2]}
            component={Link}
            to={routes[2]}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavBar;