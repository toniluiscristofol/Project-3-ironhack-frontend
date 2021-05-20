
import React from 'react'
import PartyService from '../../services/parties.service'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import "./PartyDetails.css"
import Button from "@material-ui/core/Button";
import HomeNavBar from '../../components/NavBar/HomeNavBar';
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
        
        this.partyService.getOne(id)
          .then(response => {
            
            this.setState({maxAttendees: response.data.maxAttendees, ateendees: response.data.attendees, id: response.data.id, host: response.data.host, name: response.data.name, date: response.data.date, images:response.data.images, description: response.data.description, city: response.data.city, street: response.data.street, price:response.data.price });
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
        <HomeNavBar></HomeNavBar>
        <div className="party-details">
          <h1 className="title">{name}</h1>
          <p></p>
          <p id="date">{date.substring(0, 15)}</p>

          {/* <span>
        <Link to={`/edit-party/${this.props.match.params.id}`}><Button >Edit Party</Button></Link>
        </span> */}

          <div className="gallery">
            <img
              border-radius="5px"
              className="images"
              width="564"
              height="376"
              src={
                images[0]
                  ? images[0]
                  : "https://faro.travel/blog/wp-content/uploads/2017/05/Fiesta.jpg"
              }
              alt=""
            />
            <img
              className="images"
              width="274"
              height="183"
              src={
                images[1]
                  ? images[1]
                  : "https://micasainn.com/wp-content/uploads/2016/06/IBIZA.jpg"
              }
              alt=""
            />
            <img
              className="images"
              width="274"
              height="183"
              src={
                images[2]
                  ? images[2]
                  : "https://assets.entrepreneur.com/content/3x2/2000/1594842136-Depositphotos-55474203-l-2015.jpg?width=700&crop=2:1"
              }
              alt=""
            />
            <img
              className="images"
              width="274"
              height="183"
              src={
                images[3]
                  ? images[3]
                  : "https://revistahsm.com/wp-content/uploads/2018/08/Fiestas.png"
              }
              alt=""
            />
            <img
              className="images"
              width="274"
              height="183"
              src={
                images[4]
                  ? images[4]
                  : "https://i.blogs.es/db2df3/fiestas-covid-en-mexico/1366_2000.jpg"
              }
              alt=""
            />
          </div>

          {/* <hr style="width:50%;text-align:left;margin-left:0"></hr> */}
          <div className="section2">
            <div className="information">
              <hr></hr>
              <div className="iconInfo">
                <img id="icons" src="/party-hat.png"></img>
                <div>
                  <p className="city">Host</p>
                  <p>{host.username}</p>
                </div>
              </div>
              <div className="iconInfo">
                <img id="icons" src="/dance.png"></img>
                <div>
                  <p className="city">City</p>
                  <p>{city}</p>
                </div>
              </div>
              <div className="iconInfo">
                <img id="icons" src="/mirror-ball.png"></img>
                <div>
                  <p className="city">Direction</p>
                  <p>{street}</p>
                </div>
              </div>
              <div className="iconInfo">
                <img id="icons" src="/toast.png"></img>
                <div>
                  <p className="city">Description</p>
                  <p>{description}</p>
                </div>
              </div>
              <div className="iconInfo">
                <img id="icons" src="/sound-system.png"></img>
                <div>
                  <p className="city">People joined </p>
                  <p>
                    {ateendees.length} of {maxAttendees}
                  </p>
                </div>
              </div>
              <hr></hr>
            </div>
            <div className="jointhisparty">
              <div id="price"> {price}€</div>
              <p>Payment is securely processed by stripe</p>
              <Link to={`/stripe/${this.props.match.params.id}`}>
                <Button
                  onClick={() =>
                    this.joinparty(
                      this.props.match.params.id,
                      this.props.user.id
                    )
                  }
                  id="joinpartybutton"
                  variant="contained"
                  color="secondary"
                >
                  Join this Party
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(PartyDetails);