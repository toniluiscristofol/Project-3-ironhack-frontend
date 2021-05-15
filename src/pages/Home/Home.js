import React from 'react'
import { Link } from 'react-router-dom'

import Text from '../../components/Text'
import "./Home.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import Button from "@material-ui/core/Button";
import NavBar from '../../components/NavBar/NavBar'
function Home() {
  return (
    <div
      style={{ background: "/pexels-eberhard-grossgasteiger-2098428.jpg" }}
      className="search-bar"
    >
      <div className="navbar">
        <NavBar />
      </div>
      <div className="button-container"></div>

      <div className="home-wrapper">
        <h1>Discover your next wild night.</h1>
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
          <Link style={{ textDecoration: "none" }} to="/parties">
            <Button
              style={{ borderRadius: "30px" }}
              variant="contained"
              color="secondary"
            >
              All parties
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;