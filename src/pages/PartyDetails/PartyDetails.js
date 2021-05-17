
import React from 'react'
import PartyService from '../../services/parties.service'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import "./PartyDetails.css"
import Button from "@material-ui/core/Button";

export default class PartyDetails extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          party: {
            name: "",
            description: "",
            images: [],
            price: 0,
            date: "",
            host: "",
            maxAttendees: "",
            attendees: [],
            street: "",
            city: ""
          }
        }
        this.partyService = new PartyService();
        
        console.log(this.state)
        
      }



    refreshState(id) {
       
        this.partyService.getOne(id)
          .then(response => {
              
            
            this.setState({ party: response.data });
          })
          .catch(err => console.error(err))
      }
      
    componentDidMount() {
        this.refreshState(this.props.match.params.id);
        
      }
    
   
      
  
  

  render() {
    const { name, description, images, price, host, attendees, maxAttendees, street, date, city } = this.state.party;
    console.log(typeof date)
    return (
      <div className="party-details">
        <h1 className="title">{name}</h1>{" "}
        <span className="calendar">{date.substring(0, 15)}</span>
        {/* <span>
          {attendees.length}/{maxAttendees}
        </span> */}
        <p className="city">{city}</p>
        <div className="gallery">
          <img
            border-radius="5px"
            className="images"
            width="564"
            height="376"
            src="https://a0.muscache.com/im/pictures/93b2e37b-9e4f-43f1-bab7-97aa11c8ce45.jpg?im_w=1200"
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src="https://a0.muscache.com/im/pictures/76665e67-73e9-40bb-b4c1-e54b8557ea6d.jpg?im_w=1440"
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src="https://a0.muscache.com/im/pictures/c0fbe432-7ba2-4d0d-923c-ad9a045fdad4.jpg?im_w=1440"
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src="https://a0.muscache.com/im/pictures/2b6cc4b6-9dab-43a7-9a20-19dcc396ef1c.jpg?im_w=1440"
            alt=""
          />
          <img
            className="images"
            width="274"
            height="183"
            src="https://a0.muscache.com/im/pictures/c8fb9f46-74e7-4b0f-bb67-7eca2381518e.jpg?im_w=1440"
            alt=""
          />
        </div>
        <p className="host">Host: {host.username}</p>
        <span>
          {" "}
          <Button variant="contained" color="secondary">
            Create party
          </Button>
        </span>
      </div>
    );
  }
}
