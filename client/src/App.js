import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import TabPanel from './components/Tab';
import SearchPage from './components/pages/SearchPage';
import NoteSaver from './components/pages/VideoEditor';

function App() {
  useEffect(() => {
    fetch("/api/notes").then(res => res.json()).then(res => console.log("Notes are: ", res));
  })

  return (
    <div>
      <TabPanel />
      <SearchPage />
      <NoteSaver />
    </div>
  );
}


export default App;
