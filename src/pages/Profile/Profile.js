import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import AuthService from '../../services/auth.service'

import { Link } from 'react-router-dom'
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username:"",
          photo: ""
        }
        
        this.authService = new AuthService();
        
      }

    
  refreshState() {
    this.authService.isLoggedIn()
      .then(response => {
        console.log("hola",response.data);
        this.setState({ username: response.data.username, photo: response.data.photo});
      })
      .catch(err => console.error(err))

  }

  componentDidMount() {
    this.refreshState();
  }

    render() {
        return (
            <div>
                <img src={this.state.photo}></img>
                <p></p>
                WELCOME {this.state.username}
                <Link to='edit-user'><button>Edit User</button></Link>
            </div>
        )
    }
}

export default withAuth(Profile);