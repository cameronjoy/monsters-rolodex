import { Component } from "react";

class SearchBox extends Component{

    render() {
        return(
            <input className='search-box' type='search' placeholder='search monsters'
          onChange={this.onSearchChange}  
        />
        )
    }
}

export default SearchBox