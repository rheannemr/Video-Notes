import React, { useEffect } from 'react';
import NavBar from './components/NavBar/index';
import SearchPage from './components/pages/SearchPage';
import VideoEditor from './components/pages/VideoEditor';
import Signup from './components/pages/Signup';
import SavedNotes from './components/pages/SavedNotes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    fetch("/api/notes").then(res => res.json()).then(res => console.log("Notes are: ", res));
  })

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Signup} />
        <Route path="/search" component={SearchPage} />
        <Route path="/videoeditor/*" component={VideoEditor} />
        <Route path="/savednotes" component={SavedNotes} />
      </Switch>
    </BrowserRouter>

  );
}


export default App;
