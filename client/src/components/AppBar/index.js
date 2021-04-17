import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Signup from '../pages/Signup';
import SearchPage from '../pages/SearchPage';
import VideoEditor from '../pages/VideoEditor';

function NavBar() {
  const routes = ["/signup", "/searchpage", "/videoeditor"];

  return (
    <div className = "appBar">
      <BrowserRouter>
        <Route path ="/">
        <AppBar>
          <Tabs>
            <Tab
            label = "Signup"
            value = {routes[0]}
            component = {Link}
            to = {routes[0]}
            />
            <Tab
            label = "Search Page"
            value = {routes[1]}
            component = {Link}
            to = {routes[1]}
            />
            <Tab
            label = "Video Notes Editor"
            value = {routes[2]}
            component = {Link}
            to = {routes[2]}
            />
          </Tabs>
        </AppBar>
        </Route>

        <Switch>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/searchpage" component = {SearchPage}/>
          <Route path = "/videoeditor" component = {VideoEditor}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default NavBar;