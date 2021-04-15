import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TabPanel from './components/Tab';

function App() {
  return (
    <div>
      <TabPanel />
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    </div>
  );
}


export default App;
