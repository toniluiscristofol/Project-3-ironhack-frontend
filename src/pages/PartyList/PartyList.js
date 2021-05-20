import React, {useState, useEffect} from 'react'
import PartyCard from '../../components/Party/PartyCard';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import "./PartyList.css"
import { Link, withRouter } from "react-router-dom";
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import Navbar from "../../components/NavBar/NavBar"
import { makeStyles } from "@material-ui/core/styles";
import Map from "../../components/Map/Map"
// import mapboxgl from "!mapbox-gl";
// mapboxgl.workerClass =
//   require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
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

  // const displayMarkers = () => {

  //         parties.map((party) => {
  //           {
  //             console.log(party);
  //           }
  //           <Marker latitude={41.403706} longitude={2.173504}>
  //             <button
  //               className="marker-btn"
  //               // onClick={(e) => {
  //               //   e.preventDefault();
  //               //   setSelectedMarker(marker);
  //               // }}
  //             >
  //               <div>Hey IM A MARKER</div>
  //               <img src="https://picsum.photos/200/300" alt="" />
  //             </button>
  //           </Marker>;
  //         });

  //   }



  useEffect(() => {

    refreshState();

   }, [])

  // useEffect(() => {
  //   displayMarkers();
  // }, [parties])


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
          {/* <ReactMapGL
          className="map"
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11" //importar de mapbox styles
        >
          {/* <Marker className="marker" latitude={parties[0} longitude={2.173504}>
            <div>im a marker</div>
          </Marker> */}
          {/* {console.log(parties[7].latitude)} */}

          {/* {parties.map((party) => {


            //  let longitudeMy = party.longitude;
            //  let latitudeMy = party.latitude;
            return(
            <Marker latitude={party.latitude} longitude={party.longitude}>
              <button
                className="marker-btn"
                // onClick={(e) => {
                //   e.preventDefault();
                //   setSelectedMarker(marker);
                // }}
              >
                {/* <h1 >Hey IM A MARKER</h1>
                </ReactMapGL> 
                 */}
        </div>
      </div>
    );
  }


export default withAuth(PartyList);