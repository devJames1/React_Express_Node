import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  function callApi() {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setApiResponse(text);
      });
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
