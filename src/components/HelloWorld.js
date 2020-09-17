import React, { Fragment } from "react";
import List from './List'
import Filter from './Filter'
import hogsArray from '../porkers_data'
import Sort from './Sort'

class HelloWorld extends React.Component {

  state = {
    hogs: hogsArray,
    filter: 'all',
    sort: 'all'
  }

  sortHogs = (value) => {
    console.log(value)
    this.setState({
      sort: value
      })
    
    let sortedHogs = [...this.state.hogs]
    
    if(value === "alphabetically"){ 
        this.setState({
        hogs: sortedHogs.sort((a,b) => a.name > b.name ? 1: -1)
        })
    }else if (value === "weight") 
    {
        this.setState({
        hogs: sortedHogs.sort((a,b) => a.weight < b.weight ? 1: -1)
        })
    }else if (value === 'all'){
      this.setState({
        hogs: hogsArray
      })
    }
  }


  filterGreased = (value) => {
    let filteredHogs = hogsArray.filter(hog => hog.greased === true)
          if (value === 'greased'){
            this.setState({
              hogs: filteredHogs
            })
          }else if (value === 'all'){
            this.setState({
              hogs: hogsArray
            })
          }
  }

  render() {
    
    return (
      <div>
        <Filter filterGreased={this.filterGreased}/>
        <br></br>
        <Sort sortHogs={this.sortHogs} sortValue={this.state.sort}/>
        <br></br>
        <List hogs={this.state.hogs} />
      </div>
    );
  }
}

export default HelloWorld;
