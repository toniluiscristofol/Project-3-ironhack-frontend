import React, { Component } from 'react'
import PartyCard from '../../components/Party/PartyCard';
import Text from '../../components/Text';
import Todo from '../../components/Todo/Todo';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import "./PartyList.css"
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class PartyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
    }
    this.partyService = new PartyService();
    // this.refreshState = this.refreshState.bind(this);
  }

  refreshState() {
    this.partyService.get()
      .then(response => {
        console.log(response.data);
        this.setState({ parties: response.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
  }

  displayParties(){
    const { parties } = this.state;
    console.log(parties)
    return parties.map(party => {
      console.log(party)
      // <Todo key={todo.id} todo={todo}/>
      // <Todo key={todo.id} name={todo.name} description={todo.description} done={todo.done} .../>
      return (
       
          <Link key={party.id} to={`/party-details/${party.id}`}><PartyCard refreshState={() => this.refreshState()} {...party}/></Link> 
        
    
      )
    })
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
 
    return (
      <div className="party-card">
        {this.displayParties()}
      </div>
    );
  }
}

export default withAuth(PartyList);