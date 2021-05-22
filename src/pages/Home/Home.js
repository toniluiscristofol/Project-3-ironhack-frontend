import React from 'react'
import { Link } from 'react-router-dom'
import image from "./images/pexels-eberhard-grossgasteiger-2098428.jpg";
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
        <HomeNavBar id="navBBB" findByCity={() => console.log("hello")} isHomePage={true} />
      </div>

      <div className="home-wrapper">
        <ReviewForm />
        {/* <img display="inline" width="100%" height="100%" src={image} /> */}
        <h1 display="inline">Discover your next wild night.</h1>
        <div className="auth-btns">
          <Link style={{ textDecoration: "none" }} to="/signup">
            <Button
              style={{ borderRadius: "30px" }}
              variant="contained"
              color="secondary"
            >
              Sign Up
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button
              style={{ borderRadius: "30px" }}
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;