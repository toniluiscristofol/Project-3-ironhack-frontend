import React from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/RoundButton/RoundButton'
import Text from '../../components/Text'

import SearchBar from '../../components/SearchBar/SearchBar'

function Home() {
  return (
    
      <div className="home-wrapper">
        <Text as="h1" uppercase size="xl" color="black" weight="gelionMedium">
          Hey <Text uppercase as="span" size="xl" weight="gelionMedium">Ironhacker</Text> PARTY.
        </Text>
        <SearchBar></SearchBar>
        <div className="button-container">
          <Link to="/todo-list">
            <h1>Parties Near You</h1>
          </Link>
          <Link to="/create-party">
            <h1>Create Party</h1>
          </Link>
        </div>
      </div>
   
  )
}

export default Home;