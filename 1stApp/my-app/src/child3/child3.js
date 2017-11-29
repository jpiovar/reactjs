import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child3 extends Component {  
  constructor(props){
    super(props);
    this.state = {
        child3State: 'child3 state'    
    };

    this.onClickBtn = this.onClickBtn.bind(this);
    
  }

  onClickBtn(){
    this.props.triggerParentUpdateChild3(this.state.child3State);
  }

  
  render() {
    return (
      <div>
        
        <div>
          child 3 
        </div>
        <button onClick={this.props.triggerParentUpdateChild3.bind(this,"ok")}> update parent from child 3 way1 </button>
        <br/>
        <button onClick={() => this.props.triggerParentUpdateChild3(this.state.child3State)}> update parent from child 3 way2 </button>
        <br/>
        <button onClick={this.onClickBtn}> update parent from child 3 way3</button>
      </div>
    );
  }
}

Child3.defaultProps = {
    myProperty: 'whatever'
}

Child3.propTypes = {
    myProperty: PropTypes.string.isRequired,
    triggerParentUpdateChild2: PropTypes.func.isRequired
}

export default Child3;