import React from 'react'
import { Link } from 'react-router-dom'
import image from "./images/eric-nopanen-3skLpaOBlMw-unsplash.jpg";
import Text from '../../components/Text'
import "./Home.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import Button from "@material-ui/core/Button";
import HomeNavBar from '../../components/NavBar/HomeNavBar'
import ReviewForm from "../../components/ReviewForm/ReviewForm"
function Home() {
  return (
    <div className="main">
      <div className="navbar">
        <HomeNavBar findByCity={() => console.log("hello")} isHomePage={true} />
      </div>

      <div className="home-wrapper">
        <img
          className="main-img"
          display="inline"
          width="100vw"
          height="100vh"
          src={image}
        />
        <h1 id="title">Discover your next wild night.</h1>

        <Link style={{ textDecoration: "none" }} to="/parties">
          <Button
            id="signup-button"
            style={{ borderRadius: "5px" }}
            variant="contained"
            color="secondary"
            
          >
           
            Search for parties
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;