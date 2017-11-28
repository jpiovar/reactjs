import React, { Component } from 'react';
import './child1.css';

class Child1 extends Component {  
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  getName(){
    return "ok child1";
  }



  render() {
    return (
      <div className="child1-class1">
        <div className="child1-class2">pre ok {this.props.name} + {this.state.date.toLocaleTimeString()}
          <span className="child1-title">child1 component {this.getName()}</span>
        </div>
      </div>
    );
  }
}

export default Child1;