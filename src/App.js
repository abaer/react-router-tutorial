import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Router Tutorial</h2>
        </div>
        <p className="App-intro">
          React Router!
        </p>

        <Link to="/city/1">City 1</Link><hr/>
        <Link to="/city/2">City 2</Link><hr/>
        <Link to="/city/3">City 3</Link><hr/>
        <Link to="/query?test=3">Query Example</Link><hr/>
        <Link to="/programmatic">Programmatic Example</Link><hr/>
        <Link to="/lkajsdklajdlkasjdkla">404 Example</Link><hr/>
      </div>
    );
  }
}

export default App;