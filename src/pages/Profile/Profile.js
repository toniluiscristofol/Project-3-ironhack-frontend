import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import AuthService from '../../services/auth.service'
import PartyService from '../../services/parties.service'
import PartyCard from '../../components/Party/PartyCard';
import { Link } from 'react-router-dom'
import PartyCard2 from '../../components/Party/PartyCard2';
import './Profile.css'

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

    render(){
       return(

       
        
    <div id="profile" class="row py-5 px-4">
        <div   class="col-xl-4 col-md-6 col-sm-10 mx-auto">
    
            
            <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 bg-dark">
                    <div class="media align-items-end profile-header">
                        <div class="profile mr-3"><img src={this.state.photo} alt="..." width="130" class="rounded mb-2 img-thumbnail"/><a href="#" class="btn btn-dark btn-sm btn-block"> <Link to="edit-user">
      Edit User
    </Link></a></div>
                        <div class="media-body mb-5 text-white">
                            <h4 class="mt-0 mb-0">{this.state.username}</h4>
                            <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>San Farcisco</p>
                        </div>
                    </div>
                </div>
    
                <div class="bg-light p-4 d-flex justify-content-end text-center">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
       <h5 class="font-weight-bold mb-0 d-block">{this.state.parties.length}</h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Number of parties hosted</small>
                        </li>
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Followers</small>
                        </li>
                    </ul>
                </div>
    
                <div class="py-4 px-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5 class="mb-0">Recent parties</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                    </div>
                    <div class="row">
                    <div class="cards-party">
        {this.state.parties.map((parties) => {
           return (
            
            <Link id="cards-party2" to={`/party-details/${parties.id}`}>
             <PartyCard2 description={parties.description} title={parties.name} image={parties.images[0] ? parties.images[0] : "https://onlyibizaboatparty.com/img/clubberPack.jpg"}></PartyCard2>
            </Link>
         
          );
        })}
           </div>
                    </div>
                    <div class="py-4">
                        <h5 class="mb-3">Recent posts</h5>
                        <div class="p-4 bg-light rounded shadow-sm">
                            <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <ul class="list-inline small text-muted mt-3 mb-0">
                                <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>12 Comments</li>
                                <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>200 Likes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
   

        

       )
    }
}

export default withAuth(Profile);