import React from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/RoundButton/RoundButton'
import Text from '../../components/Text'
import  "./Home.css"
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
        <Text as="h1" uppercase size="l" color="black" weight="gelionMedium">
          Organize and find parties. Make friends. Have a great time together.
        </Text>

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