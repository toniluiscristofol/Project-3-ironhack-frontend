import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./SearchBar.css"
export default class SearchBar extends Component {

    state = {
      name: "",
      parties: this.props.parties
    }

  

    filterParties(event){
      

        const arrayCopy = [ ...this.state.parties ]
        const { name, value } = event.target;
    
        
    
        this.setState({
            name: value,
        });
        
    
      if (value) {
         console.log(value);
        const result = arrayCopy.filter((party) => party.name.includes(value))
        this.setState({
          
          parties: result
          
        })
        
      } else if (value.length === 0) { this.setState({ parties: this.props.parties }) }
      
      }
    render() {
        return (
          <div className = "search-container">
            <input
              onChange={(e) => this.filterParties(e)}
              type="text"
              name="name"
              value={this.state.name}
            />
            <Link to="/parties">
              <Button type ="submit" variant="contained" color="secondary">
                Search
              </Button>
            </Link>
          </div>
        );
    }
}
