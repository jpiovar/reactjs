import React, { Component } from 'react';
import './searchInput.css';
import PropTypes from 'prop-types';

// var data1 = require('../dataResources/data1.json');

class SearchInput extends Component { 
    constructor(props){
        super(props);

        this.state = {
            date: new Date(), 
            inputSearch:'Please type input' 
        };

        this.getValueFromInput = this.getValueFromInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filteredItems = this.filteredItems.bind(this);
    }

  getValueFromInput(a){ debugger;
    let res;
    res = a;
    return res;
  }

  handleChange(event){ debugger;
    this.setState({inputSearch: event.target.value});
    this.props.triggerAppUpdateFromSearchInput(event.target.value);
  }

  filteredItems(a){ debugger;
    let res=[];
    let sub = this.state.inputSearch;

    for(let i in a){
        if(a[i].name.indexOf(sub)>-1){

            res.push(a[i]);

        }
    }

    return res;
  }


  render() {
    const listItems = this.props.dataItems.map((item)=>item.name);

    const listFiltered = this.filteredItems(this.props.dataItems).map((item)=>item.name);

    return (
      <div className="search-main">     
       
        <div>Search box for {this.props.name} ,  current date is {this.state.date.toLocaleTimeString()}
            <span > {this.getValueFromInput(this.state.inputSearch)}</span>
          
        </div>

        <div>
            <input type="text" value={this.state.inputSearch} name="inputSearch" id="inputSearch" onChange={this.handleChange} />
        </div>

        <div>
            {listItems}
        </div>


        <div>
            Filtered:
            {listFiltered}
        </div> 


        {/* <button onClick={this.props.triggerParentUpdate}>{this.increaseCounter(this.props.countProp)} update parent from child 1 </button> */}
      </div>
    );
  }
}

SearchInput.defaultProps = {
    name: 'Janko Hrasko'
}

SearchInput.propTypes = {
    name: PropTypes.string.isRequired,
    dataItems: PropTypes.array.isRequired,
    triggerAppUpdateFromSearchInput: PropTypes.func.isRequired
}

export default SearchInput;