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

  displayTodos(){
    const { parties } = this.state;
    return parties.map(party => {
      // <Todo key={todo.id} todo={todo}/>
      // <Todo key={todo.id} name={todo.name} description={todo.description} done={todo.done} .../>
      return (
        <Todo refreshState={() => this.refreshState()} key={party.id} {...party}/>
      )
    })
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { parties } = this.state;
    return (
      <div className="party-card">
        <Link to="/create-party">
          <Button type="submit" variant="contained" color="secondary">
            Create a party
          </Button>
        </Link>
        <PartyCard
          name="Appartment in Barcelona"
          description="Great nightlife"
        />
        <hr />
        <PartyCard
          name="IronMansion"
          description="Wearing mask is not required"
        />
      </div>
    );
  }
}

export default withAuth(PartyList);