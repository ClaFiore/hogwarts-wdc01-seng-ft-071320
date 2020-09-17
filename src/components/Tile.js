import React from 'react'
 
class Tile extends React.Component {

    state = {
        specs: false
    }

    displayPig = () => {
        let pigImgName = this.props.hog.name.split(' ').join('_').toLowerCase()
        let pigImage = require(`../hog-imgs/${pigImgName}.jpg`) 
        
        
        if (this.state.specs === false){
            return( <div>
                        <h3>{this.props.hog.name}</h3>
                            <div className="ui eight wide column">
                                    <img src={pigImage} />
                            </div>
                    </div>)
        }else{
            return( <div>
                        <h3>{this.props.hog.name}</h3>
                        <h4>Greased: { this.props.hog.greased ? 'Yes' : "No" } </h4>
                        <h4>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h4>
                        <h4>Specialty: {this.props.hog.specialty}</h4>
                        <h4>Weight: {this.props.hog.weight}</h4>
                    </div>
            )
        }
    }

    displaySpecs = () => {
        if (this.state.specs === false){
            this.setState({
                specs: true
            })
        }
        else{
            this.setState({
                specs: false
            })
        }
    }

    render(){

        return(
            <div onClick={() => this.displaySpecs()}>
                {this.displayPig()}
            </div> 
        )
    }
}

export default Tile