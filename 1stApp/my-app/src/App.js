import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './child1/child1.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {date: new Date(), language: '' };
  }

  getName(){
    return "ok";
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.getName()}</h1>
        </header>
        <div className="App-intro">
          To get started, <Child1 name='holly'/> edit <code>src/App.js</code> and save to reload.
          
        </div>
      </div>
    );
  }
}

export default App;
