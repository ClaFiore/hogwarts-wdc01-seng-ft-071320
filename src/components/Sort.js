import React, {Component} from 'react'

const Sort = (props) => {
console.log(props)
    return(
        <div> SORT: <br></br>
            <label>
                <input type="radio" value="alphabetically" checked={props.sortValue === "alphabetically"} onChange={(e) => props.sortHogs(e.target.value)}/>
                Alphabetically
            </label>
            <label>
                <input type="radio" value="weight" checked={props.sortValue === "weight"} onChange={(e) => props.sortHogs(e.target.value)}/>
                Weight
            </label>
            <label>
                <input type="radio" value="all" checked={props.sortValue === "all"} onChange={(e) => props.sortHogs(e.target.value)}/>
                All
            </label>
        </div>
    )
}

export default Sort