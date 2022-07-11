import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Meghan Burton
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"
         href="https://www.google.com/"
         target="_blank"
         rel="noopener noreferrer"
         >Google</Button>
        
        <Button type="submit">Submit</Button>
        <Button type="submit" color = "primary" variant ="outlined">Submit</Button>

        <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
  </ButtonGroup>

      </header>
    </div>
  );
}

export default App;
