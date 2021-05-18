
import React from 'react'
import PartyService from '../../services/parties.service'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import "./PartyDetails.css"
import Button from "@material-ui/core/Button";
import NavBar from '../../components/NavBar/NavBar';
import { withAuth } from '../../context/auth.context';
import AuthService from '../../services/auth.service'
import { Link } from "react-router-dom";


class PartyDetails extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          name: "",
          date:"",
          images:[],
          ateendees: [],
          price: 0,
          description:"",
          city:"",
          host:"",
          street:"",
          id:"",
          maxAttendees: 0
        }
        this.partyService = new PartyService();
      
        
      }



    refreshState(id) {
        console.log(id)
        this.partyService.getOne(id)
          .then(response => {
            console.log(response.data.name)
            console.log(response.data)
            this.setState({maxAttendees: response.data.maxAttendees, ateendees: response.data.attendees, id: response.data.id, host: response.data.host.email, name: response.data.name, date: response.data.date, images:response.data.images, description: response.data.description, city: response.data.city, street: response.data.street, price:response.data.price });
          })
          .catch(err => console.error(err))
      }
      
    joinparty(id, userId){
      console.log(id,userId)

      this.partyService.updateAttendees(id, userId)
      .then(() =>{
        console.log("updated")
      })
      .catch(err => console.log("error"))

       this.refreshState(this.props.match.params.id);


     }
    componentDidMount() {
        this.refreshState(this.props.match.params.id);
        
      }
    
   
      
  render() {
     

    const { name, description, images, price, host, ateendees, maxAttendees, street, date, city, id} = this.state;
    return (
      <div>
          <NavBar></NavBar>
          <div className="party-details">
        <h1 className="title">{name}</h1>{" "}
        <span className="calendar">{date.substring(0,15)}</span>
        <span>
          
        </span>
        
        <div className="gallery">
          <img
            border-radius="5px"
            className="images"
            width="564"
            height="376"
            src={images[0] ? images[0]: "https://lh3.googleusercontent.com/proxy/fDpqucFrfTh1PgQTIvyabkaAuwBeyvHkwV5qp01OEbygW2yOOx9iTiht3t7koUdAXCYcYOQz_9EJk4io7_wRFmP5OQyOaITKkBIDEPL9zN_kgZ1txVCa5e79jcv-bhCGkGDUYFVcR8g4OftlEF4qkv5IKimyMXtDSuoOY8T4Hn4i"}
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src={images[1] ? images[1]: "https://lh3.googleusercontent.com/proxy/fDpqucFrfTh1PgQTIvyabkaAuwBeyvHkwV5qp01OEbygW2yOOx9iTiht3t7koUdAXCYcYOQz_9EJk4io7_wRFmP5OQyOaITKkBIDEPL9zN_kgZ1txVCa5e79jcv-bhCGkGDUYFVcR8g4OftlEF4qkv5IKimyMXtDSuoOY8T4Hn4i"}
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src={images[2] ? images[2]: "https://lh3.googleusercontent.com/proxy/fDpqucFrfTh1PgQTIvyabkaAuwBeyvHkwV5qp01OEbygW2yOOx9iTiht3t7koUdAXCYcYOQz_9EJk4io7_wRFmP5OQyOaITKkBIDEPL9zN_kgZ1txVCa5e79jcv-bhCGkGDUYFVcR8g4OftlEF4qkv5IKimyMXtDSuoOY8T4Hn4i"}
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src={images[3] ? images[3]: "https://lh3.googleusercontent.com/proxy/fDpqucFrfTh1PgQTIvyabkaAuwBeyvHkwV5qp01OEbygW2yOOx9iTiht3t7koUdAXCYcYOQz_9EJk4io7_wRFmP5OQyOaITKkBIDEPL9zN_kgZ1txVCa5e79jcv-bhCGkGDUYFVcR8g4OftlEF4qkv5IKimyMXtDSuoOY8T4Hn4i"}
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src={images[4] ? images[4]: "https://lh3.googleusercontent.com/proxy/fDpqucFrfTh1PgQTIvyabkaAuwBeyvHkwV5qp01OEbygW2yOOx9iTiht3t7koUdAXCYcYOQz_9EJk4io7_wRFmP5OQyOaITKkBIDEPL9zN_kgZ1txVCa5e79jcv-bhCGkGDUYFVcR8g4OftlEF4qkv5IKimyMXtDSuoOY8T4Hn4i"}
            alt=""
          />
        </div>


        {/* <hr style="width:50%;text-align:left;margin-left:0"></hr> */}
        <div className="section2">
         
          <div className="information">
          <p className="city">Host:{host}</p>
          <p className="city">City:{city}</p>
          <p className="city">Direction:{street}</p>
          <p className="city">Description:{description}</p>
          <p className="city">People joined {ateendees.length} of {maxAttendees}</p> 

          </div>
          <div className="jointhisparty">
            <div id="price">
              Price: {price}€

            </div>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s mmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s.</p>
            <Button onClick={()=> this.joinparty(this.props.match.params.id, this.props.user.id)}  id="joinpartybutton" variant="contained" color="secondary">
            Join this Party
            </Button>
            <Link to={`/edit-party/${this.props.match.params.id}`}><Button>Edit Party</Button></Link>
            <Link to={`/stripe/${this.props.match.params.id}`}><Button>Buy Ticket</Button></Link>

            
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withAuth(PartyDetails);