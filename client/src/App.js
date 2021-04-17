import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/AppBar/index';
import SearchPage from './components/pages/SearchPage';
import NoteSaver from './components/pages/VideoEditor';

function App() {
  useEffect(() => {
    fetch("/api/notes").then(res => res.json()).then(res => console.log("Notes are: ", res));
  })

  return (
    <div>
      <NavBar />
    </div>
  );
}


export default App;
