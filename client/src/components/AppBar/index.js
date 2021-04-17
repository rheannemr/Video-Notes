import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Signup from '../pages/Signup';
import SearchPage from '../pages/SearchPage';
import VideoEditor from '../pages/VideoEditor';
import SavedNotes from '../pages/SavedNotes';

function NavBar() {
  const routes = ["/signup", "/search", "/videoeditor", "/savednotes"];

  return (
    <div className="appBar">
      <BrowserRouter>
        <Route path="/">
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
                label="Video Notes"
                value={routes[2]}
                component={Link}
                to={routes[2]}
              />
              <Tab
                label="Saved Notes"
                value={routes[3]}
                component={Link}
                to={routes[3]}
              />
            </Tabs>
          </AppBar>
        </Route>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/search" component={SearchPage} />
          <Route path="/videoeditor" component={VideoEditor} />
          <Route path="/savednotes" component={SavedNotes} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default NavBar;