import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TabPanel from './components/Tab';
import SearchPage from './components/pages/SearchPage';

function App() {
  return (
    <div>
      <TabPanel />
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    <SearchPage />
    </div>
  );
}


export default App;
