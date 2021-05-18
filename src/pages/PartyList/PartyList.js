import React, {useState, useEffect} from 'react'
import PartyCard from '../../components/Party/PartyCard';
import { withAuth } from '../../context/auth.context';
import PartyService from '../../services/parties.service'
import "./PartyList.css"
import { Link, withRouter } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl"
import Navbar from "../../components/NavBar/NavBar"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(2, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function PartyList(props) {
  

  const[parties, setParties] = useState([]);
  const[city, setCity] = useState("");
  const[viewport, setViewport] = useState({
    latitude: 41.38879,
        longitude: 2.15899,
        width: "50vw",
        height: "100vh",
        zoom: 10
  })
  
  const partyService = new PartyService();

  console.log(parties)
  const refreshState = () => {
    partyService
      .get()
      .then((response) => {
       
        setParties(response.data);
      })
      .catch((err) => console.error(err));
  }

  const findByCity = (query) => {
   
    return setParties(
        
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
      <div >
        <div className="navbar">
          <Navbar findByDate={(time => findByDate(time))} findByCity={(query) => findByCity(query)} isHomePage={false} />
        </div>
        <h1 className="title">Parties in Barcelona</h1>

        

        <div className="parties">{displayParties()}</div>
        {/* <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            setViewport( viewport);
          }}
          mapStyle="Frank"
        >
          {/* parties.map(party => <Marker></Marker>) */}
        {/* </ReactMapGL> */} 
      </div>
    );
  }


export default withAuth(PartyList);