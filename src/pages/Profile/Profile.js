import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import AuthService from '../../services/auth.service'
import PartyService from '../../services/parties.service'
import PartyCard from '../../components/Party/PartyCard';
import { Link } from 'react-router-dom'
import PartyCard2 from '../../components/Party/PartyCard2';
import './Profile.css'
import HomeNavBar from '../../components/NavBar/HomeNavBar';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username:"",
          photo: "",
        parties:[],
          attendancees:[]
        

        }
        
        this.authService = new AuthService();
        this.partyService = new PartyService();

    
      }

    deleteParty(id) {

        this.partyService.deleteOne(id)
        .then(() => console.log("deleted"))
        .catch(err => console.log("Error delete" ,err))
        this.refreshState(this.props.user.id);
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
      .then(response => {
    
        console.log(response.data)
        this.setState({parties: response.data})
          console.log("STATE AFTER DATA", this.state.parties)
       
      })  
      .catch(err => console.log("HOLA SOy UN ERROR DEL SEGUNDO RESPONSE"))

      this.partyService.getUserAttendancees(id)
      .then(response => {
    
        console.log(response.data)
        this.setState({attendancees: response.data})
          console.log("I AM GOING TO THESE PARTYS", this.state.parties)
       
      })  
      .catch(err => console.log("HOLA SOy UN ERROR DEL SEGUNDO RESPONSE"))

    // this.partyService.getUserAttendancees(id)
    // .then(response => {
    //     console.log(response.data)
    //     this.setState({attendancees: response.data})
    // })
    // .catch(err => console.log(err))

    
  }

  
  

  componentDidMount() {
    this.refreshState(this.props.user.id);
   
  }

    render(){
    
       return(

       <div>
        <HomeNavBar/>
 
    
         <div className="cover">
             <div className="grey">
               
           </div>
           <div className="white">
           </div>
           <div className="picturebutton">
           <img id="profileimage" src={this.state.photo} style={{width:"200px"}}>
            </img> 
            <Link to="edit-user">
            <button style={{width:"200px"}}>
             edit user
            </button>
          
            </Link>
          
           </div>   
           </div>  
           <div className="section">
           {this.state.parties.slice(this.state.parties.length-4).map((parties) => {
           return (
            <div className="partiescreated">
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 userphoto={this.state.photo} date={parties.date} description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            
            </Link>
             <button onClick = {() => this.deleteParty(parties.id)} >Delete party</button>
             
         </div>

          );
        })}
        

           </div>
           <div className="section">
           {this.state.attendancees.slice(this.state.attendancees.length-4).map((parties) => {
           return (
            <div className="partiescreated">
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 userphoto={this.state.photo}  description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            
            </Link>
             
             
         </div>

          );
        })}
        

           </div>
           <button onClick = {() => this.props.logout()} >Log out</button>

    </div>
        

       )
    }
}

export default withAuth(Profile);