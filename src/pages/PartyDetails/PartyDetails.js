import { id } from 'date-fns/locale';
import React from 'react'
import PartyService from '../../services/parties.service'
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import EventIcon from "@material-ui/icons/Event";
import { Gallery, Item } from "react-photoswipe-gallery";
import "./PartyDetails.css"
export default class PartyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      party: {
        name: "",
      },
    };
    this.partyService = new PartyService();
  }

  refreshState(id) {
    this.partyService
      .getOne(id)
      .then((response) => {
        console.log(response.data);
        this.setState({ party: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  
  

  render() {
    return (
      <div className="party-details">
        <h1 className="title">Central luxury penthouse with huge private terrace</h1> <h3>21th May</h3>
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
        <span>Host: Miguel</span>
      </div>
    );
  }
}
