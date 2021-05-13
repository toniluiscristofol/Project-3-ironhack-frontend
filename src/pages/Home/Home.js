import React from 'react'
import { Link } from 'react-router-dom'

import Text from '../../components/Text'
import "./Home.css"
import SearchBar from '../../components/SearchBar/SearchBar'
import Button from "@material-ui/core/Button";
function Home() {
  return (
    <div className="search-bar">
      <div className="button-container">
        <Link to="/signup">
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
        </Link>
      </div>
      <SearchBar />
      <div className="home-wrapper">
        <h1>Discover your next wild night.</h1>

        <div className="button-container">
          <Link to="/create-party">
            <Button variant="contained" color="secondary">
              Create party
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;