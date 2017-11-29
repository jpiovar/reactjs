import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child2 extends Component {  
  constructor(props){
    super(props);
    this.state = {
        date: new Date(), 
        child2Data: 'ok'
    };

    this.onClickBtn = this.onClickBtn.bind(this);
    
  }

  onClickBtn(){
    this.props.triggerParentUpdateChild2("way2");
  }

  
  render() {
    return (
      <div>
        
        <div>
          child 2 
        </div>
        <button onClick={this.props.triggerParentUpdateChild2.bind(this,'oooo')}> update parent from child 2 </button>

        <button onClick={this.onClickBtn}> update parent from child 2 way2</button>
      </div>
    );
  }
}

Child2.defaultProps = {
    myProperty: 'whatever'
}

Child2.propTypes = {
    myProperty: PropTypes.string.isRequired,
    triggerParentUpdateChild2: PropTypes.func.isRequired
}

export default Child2;