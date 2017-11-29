import React, { Component } from 'react';
import './child1.css';
import PropTypes from 'prop-types';

class Child1 extends Component {  
  constructor(props){
    super(props);
    this.state = {date: new Date()};
    
    this.getName = this.getName.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  getName(){
    return "ok child1";
  }


  increaseCounter(a){
    return a+1;
  }

  render() {
    return (
      <div>
        
        <div className="child1-class1">
          <div className="child1-class2">pre ok {this.props.name} + {this.state.date.toLocaleTimeString()}
            <span className="child1-title">child1 component {this.getName()}</span>
          </div>
        </div>
        <button onClick={this.props.triggerParentUpdate}>{this.increaseCounter(this.props.countProp)} update parent from child 1 </button>
      </div>
    );
  }
}

Child1.defaultProps = {
  name: 'whatever'
}

Child1.propTypes = {
  countProp: PropTypes.number.isRequired,
  triggerParentUpdate: PropTypes.func.isRequired,
  name: PropTypes.number.isRequired
}

export default Child1;