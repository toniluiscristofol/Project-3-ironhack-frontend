import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        input : ""
    }

    // filterParties(event){

    //     const arrayCopy = [ ...this.state.foods ]
    //     const { name, value } = event.target;
    
    //     console.log(value)
    //     console.log(typeof value)
    //     console.log(value.length)
    
    //     this.setState({
    //         input: value,
    //     });
        
    
    //     if(value){
    //     this.setState({
    //       foods: arrayCopy.filter((food3) =>
    //       food3.name.includes(value)
    //   )
    //     })
    //   }else if(value.length === 0){this.setState({foods:foodsDB})}
    //   }
    render() {
        return (
            <div>
             <input onChange={(e)=> this.filterParties(e)}  placeholder="Name.." type="text" name="input" value={this.state.input} />
    
            </div>
        )
    }
}
