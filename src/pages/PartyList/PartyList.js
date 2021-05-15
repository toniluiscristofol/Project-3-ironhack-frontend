import React, { Component } from 'react'
import PartyCard from '../../components/Party/PartyCard';
import Text from '../../components/Text';
import Todo from '../../components/Todo/Todo';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import "./PartyList.css"
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import SearchBar from "../../components/SearchBar/SearchBar";
import Input from "@material-ui/core/Input";
import Navbar from "../../components/NavBar/NavBar"

class PartyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
      city: ""
    };
    this.partyService = new PartyService();
    // this.refreshState = this.refreshState.bind(this);
  }
  filterParties(event) {
    const arrayCopy = [...this.state.parties];
    const { city, value } = event.target;

    this.setState({
      name: value,
    });

    if (value) {
      console.log(value);
      const result = arrayCopy.filter((party) => party.city.toLowerCase().includes(value.toLowerCase()));
      this.setState({
        parties: result,
      });
    } else if (value.length === 0) {
      this.refreshState();
    }
  }
  refreshState() {
    this.partyService
      .get()
      .then((response) => {
        console.log(response.data);
        this.setState({ parties: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayParties() {
    const { parties } = this.state;
    console.log(parties);
    return parties.map((party) => {
      
      return (
        <div>
          <Link
            style={{ textDecoration: "none" }}
            key={party.id}
            to={`/party-details/${party.id}`}
          >
            <PartyCard
              refreshState={() => this.refreshState()}
              {...party}
              city={party.city}
            />
          </Link>
        </div>
      );
    });
  }

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="party-card">
        <div className="navbar">
          <Navbar className="nav" />
        </div>

        {/* <Input
          onChange={(e) => this.filterParties(e)}
          type="text"
          name="city"
          value={this.state.name}
          placeholder="City"
        /> */}
        {/* <TextField
          onChange={(e) => this.filterParties(e)}
          type="text"
          name="city"
          value={this.state.name}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        /> */}
        <div className="parties">{this.displayParties()}</div>
      </div>
    );
  }
}

export default withAuth(PartyList);