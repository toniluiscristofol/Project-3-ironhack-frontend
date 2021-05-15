import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import AuthService from '../../services/auth.service'
import PartyService from '../../services/parties.service'
import PartyCard from '../../components/Party/PartyCard';
import { Link } from 'react-router-dom'
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username:"",
          photo: "",
          parties:[],
          anteendances:[]

        }
        
        this.authService = new AuthService();
        this.partyService = new PartyService();
      }

    
  refreshState(id) {
    console.log("this.state.parties", this.state.parties)
    this.authService.isLoggedIn()
      .then(response => {
        console.log("LLEGAN BIEN LOS response.data",response.data);
        this.setState({ username: response.data.username, photo: response.data.photo});
      })
      .catch(err => console.error(err))

    this.partyService.getUserParties(id)
      .then(responseTwo => {
          console.log("responseTwo.data", responseTwo.data)
          console.log("responseTwo.data[0]", responseTwo.data[0])
          console.log("responseTwo.data[0].name:", responseTwo.data[0].name)
          console.log("responseTwo.data[1]", responseTwo.data[1])
          console.log("responseTwo.data[1].name:", responseTwo.data[1].name)
      
        // let NewArr = []
      
        // responseTwo.data.map((parties)=>{
            
        //     NewArr.push(parties.name)
        // })
        
        // console.log(NewArr)
        this.setState({parties: responseTwo.data})
          console.log("STATE AFTER DATA", this.state.parties)
       
      })  
      .catch(err => console.log("HOLA SOy UN ERROR DEL SEGUNDO RESPONSE"))


    this.partyService.getUserAtteendances(id)
    .then(response =>{
        this.setState({anteendances: response.data})
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.refreshState(this.props.user.id);
   
  }

    render() {
        console.log(this.state.parties)
        return (
          //RENDERITZAR EL COMPONENT PARTY CARD I PASARLI DE PROPS ELS NOMS AQUESTS SI S?HA DE RENDERITZAR VARIES VEGADES AQUEST COMPONENT EN FUNCIO DE QUANTES PARTIES TINGUI HAUREM DE FER UN MAP I A MES HAURA DE SER CADA UNA UN LINK
          <div>
            <h1>{this.state.username}</h1>
            <p></p>
            <img style={{ width: "200px" }} src={this.state.photo}></img>
            <p></p>
            <Link to="edit-user">
              <button>Edit User</button>
            </Link>
            <h2 style={{ color: "red" }}>Parties Created by this User</h2>
            {this.state.parties.map((parties) => {
              return (
                <Link to={`/party-details/${parties.id}`}>
                  <li>{parties.name}</li>
                </Link>
              );
            })}
            <h2 style={{ color: "red" }}>Parties this User is going to</h2>

            {this.state.anteendances.map((parties) => {
              return (
                <Link to={`/party-details/${parties.id}`}>
                  <li>{parties.name}</li>
                </Link>
              );
            })}
          </div>
        );
    }
}

export default withAuth(Profile);