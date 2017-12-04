import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchInput from './searchInput/searchInput';
import SearchOutput from './searchOutput/searchOutput';

var dataRes = require('./dataResources/data1.json');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      dataOutputS: {'items':[{'name':'John','age':33},{'name':'Janko','age':30}],'filterInput':''}
    };

    this.appUpdateFromSearchInput = this.appUpdateFromSearchInput.bind(this);
  }

  appUpdateFromSearchInput(data){ debugger;
    this.setState({
      dataOutputS: {'items': dataRes, 'filterInput': data } 
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <SearchInput dataItems={dataRes} triggerAppUpdateFromSearchInput={this.appUpdateFromSearchInput} />
        </div>

        <div>
          <SearchOutput dataOutput={this.state.dataOutputS} />
        </div>

      </div>
    );
  }
}

export default App;
