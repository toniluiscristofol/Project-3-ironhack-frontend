import React, {useState, useEffect} from 'react'
import PartyCard from '../../components/Party/PartyCard';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import "./PartyList.css"
import { Link, withRouter } from "react-router-dom";
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import Navbar from "../../components/NavBar/NavBar"
import { makeStyles } from "@material-ui/core/styles";

function PartyList(props) {
  
  const [city, setCity] = React.useState("");
  const [parties, setParties] = useState([]);
 
  const [marker, setSelectedMarker] = useState(null)
  
  const[viewport, setViewport] = useState({
    latitude: 41.390205,
    longitude: 2.154007,
        width: "48vw",
        height: "100vh",
        zoom: 12
  })
  
  const partyService = new PartyService();

  console.log()
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
  
  const displayMarkers = () => {
        
          parties.map((party) => {
            {
              console.log(party);
            }
            <Marker latitude={41.403706} longitude={2.173504}>
              <button
                className="marker-btn"
                // onClick={(e) => {
                //   e.preventDefault();
                //   setSelectedMarker(marker);
                // }}
              >
                <div>Hey IM A MARKER</div>
                <img src="https://picsum.photos/200/300" alt="" />
              </button>
            </Marker>;
          });
        
    }
    

  
  useEffect(() => {
     
    refreshState();
    
   }, [])
   
  useEffect(() => {
    displayMarkers();
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
        <div>
          <Navbar
            className="navbar"
            findByDate={(time) => findByDate(time)}
            findByCity={(query) => findByCity(query)}
            isHomePage={false}
          />
        </div>
        <h1 className="title">Parties in {city ? city : "..." }</h1>

        <div className="parties">{displayParties()}</div>
        <ReactMapGL
          className="map"
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11" //importar de mapbox styles
        >
          <Marker className="marker" latitude={41.403706} longitude={2.173504}>
            <div>im a marker</div>
          </Marker>
          {displayMarkers()}
          {parties.map((party) => {
            {console.log(party)}
            <Marker latitude={41.403706} longitude={2.173504}>
              <button
                className="marker-btn"
                // onClick={(e) => {
                //   e.preventDefault();
                //   setSelectedMarker(marker);
                // }}
              >
                <div >Hey IM A MARKER</div>
                <img src="https://picsum.photos/200/300" alt="" />
              </button>
            </Marker>;
          })} 
          {marker ? (
            <Popup
              latitude={marker.latitude}
              longitude={marker.longitude}
              onClose={() => {
                setSelectedMarker(null);
              }}
            >
              <div>
                {" "}
                <h2>{marker.name}</h2>
                <p>{marker.description}</p>
              </div>
            </Popup>
          ) : null} 
        </ReactMapGL>
      </div>
    );
  }


export default withAuth(PartyList);