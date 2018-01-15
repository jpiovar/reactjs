import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './child1/child1';
import Child2 from './child2/child2';
import Child3 from './child3/child3';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(), 
      language: '' ,
      counter: 0,
      dataChild2: ''
    };

    this.updateParent = this.updateParent.bind(this);
    this.updateParent2 = this.updateParent2.bind(this);
  }

  getName(){
    return "ok";
  }


  updateParent(){
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }

  updateParent2(data){   debugger;
    this.setState( (prevState, props) => ( {dataChild2: prevState.dataChild2 + data}  ));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.ups}   Welcome to React {this.getName()}</h1>
        </header>
        <div className="App-intro">
          <p>child1 section
            <Child1 name='holly' countProp={this.state.counter} triggerParentUpdate={this.updateParent}/>
          </p>
          <p>
            update triggered {this.state.counter}
          </p>
           edit <code>src/App.js</code> and save to reload.
          
        </div>

        <p> 
          child2 section {this.state.dataChild2} <Child2 triggerParentUpdateChild2={this.updateParent2} />
        </p>

        <p class="child3-section">
          child3 section <Child3 triggerParentUpdateChild3={this.updateParent2} />
        </p>
      </div>
    );
  }
}




export default App;
