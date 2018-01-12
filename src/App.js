import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to awesome.
        </p>
        <div>
          This is the Forecast API Key: {process.env.REACT_APP_FORECAST_IO_KEY}
        </div>
      </div>
    );
  }
}

export default App;
