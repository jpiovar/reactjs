import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchOutput extends Component { 
    constructor(props){
        super(props);

        
        this.filteredItems = this.filteredItems.bind(this);
        
    }

  
    filteredItems(a,b){ debugger;
        let res=[];
        let sub = b;

        for(let i in a){
            if(a[i].name.indexOf(sub)>-1){

                res.push(a[i]);

            }
        }

    return res;
    }


  render() {
    
    const listFiltered = this.filteredItems(this.props.dataOutput.items,this.props.dataOutput.filterInput).map((item)=>item.name);

    return (
      <div className="search-main">

        <div>
            Filtered Output:
            {listFiltered}
        </div> 
        
      </div>
    );
  }
}



SearchOutput.defaultProps = {
    dataOutput: {'items':[{'name':'Janko','age':35},{'name':'Hrasko','age':30}],'filterInput':''}
}

SearchOutput.propTypes = {
    dataOutput: PropTypes.object
}


export default SearchOutput;