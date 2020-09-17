import React, {Component} from 'react'

const Filter = (props) => {
    
    return(
        <div>
            <select onChange={(e) => props.filterGreased(e.target.value)}>
                <option value='all'>All</option>
                <option value='greased'>Greased</option>
            </select>
            
        </div>
    )
}

export default Filter