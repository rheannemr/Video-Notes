import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import VideoNotes from "./pages/VideoNotes";
import Signup from "./pages/Signup";
import SavedNotes from "./pages/SavedNotes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("/api/notes").then(res => res.json()).then(res => console.log("Notes are: ", res));
  })

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signup" component={Signup} />
        <Route path="/search" component={SearchPage} />
        <Route path="/videonotes/*" component={VideoNotes} />
        <Route path="/savednotes" component={SavedNotes} />
      </Switch>
    </BrowserRouter>

  );
}


export default App;
