import React, { useState, useEffect } from 'react'
import "./reset.css";
import PartyCard from '../../components/Party/PartyCard';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import "./PartyList.css"
import { Link, withRouter } from "react-router-dom";
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import Navbar from "../../components/NavBar/NavBar"

import Map from "../../components/Map/Map"

// import mapboxgl from "!mapbox-gl";
// mapboxgl.workerClass =
//   require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
function PartyList(props) {

  const [city, setCity] = React.useState("");
  const [parties, setParties] = useState([]);

 

  

  const partyService = new PartyService();

  
  const refreshState = () => {
    partyService
      .get()
      .then((response) => {

        setParties(response.data);

      })
      .catch((err) => console.error(err));
  }

  const findByCity = (query) => {
    if (query.length == 1) {
      return refreshState();
  }
    return setCity(query), setParties(

        parties.filter((party) => {
           return party.city.toLowerCase().includes(query.toLowerCase());
        }
        )
      );
  }
  const findByDate = (date) => {
    return setParties(
      parties.filter(party => {
        return party.date.substring(0,10) === String(date).substring(0,10)
      })
    )
  }

 



  useEffect(() => {

    refreshState();

   }, [])



  const displayParties = () => {


    return parties.map((party) => {

      return (
        <div>
          <Link
            style={{ textDecoration: "none" }}
            key={party.id}
            to={`/party-details/${party.id}`}
          >
            <PartyCard

              {...party}

            />
          </Link>
        </div>
      );
    });
  }




    return (
      <div>
        <div class="navbarfixed">
          <Navbar
            className="navbar"
            findByDate={(time) => findByDate(time)}
            findByCity={(query) => findByCity(query)}
            isHomePage={false}
          />
        </div>
        <div id="partiesList">
          <h1 className="title">Parties in {city ? city : "..."}</h1>

          <div className="parties">{displayParties()}</div>
        </div>
        <div class="mapdiv">
          <Map parties={parties}/>
         
        </div>
      </div>
    );
  }


export default withAuth(PartyList);