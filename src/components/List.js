import React, { Component } from "react";
// import TileBack from './TileBack'
import Tile from './Tile'

class List extends Component {
    render(){
        

    return(
        <div className="ui grid container">
            {
                this.props.hogs.map(hog =>  <Tile key={hog.id} hog={hog} />  )
            }
        </div>
        )
    }
}

export default List