import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import Button from "@material-ui/core/Button";
import "./Signup.css";
import HomeNavBar from "../../components/NavBar/HomeNavBar";
const EMAIL_PATTERN = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 


const validators = {
  username: (value) => {
    let message;
    if(!value){
      message = 'Username is required';
    }

    return message;
  },
  email: (value) => {
    let message;
    if(!value){
      message = 'Email is required';
    } else if(!EMAIL_PATTERN.test(value)){
      message = 'Invalid email';
    }

    return message;
  },
  password: (value) => {
    let message;
    if(!value){
      message = 'Password is required';
    } else if(value.length < 3){
      message = 'Invalid password'
    }

    return message;
  },
}

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        username: "",
        email: "",
        password: ""
      },
      errors: {
        username: null,
        email: null,
        password: null
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields);
    this.props.signup(this.state.fields);
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value)
      }
    })
  }

  render() {
    const { fields } = this.state;
    return (
      <div className="signuppage">
        <HomeNavBar />
        <form id="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            <b>Username</b>
          </label>

          <div className="form-item">
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={fields.username}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <label htmlFor="email">
            <b>Email</b>
          </label>

          <div className="form-item">
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={fields.email}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <div className="form-item">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={fields.password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <Button form="signup-form" type="submit" variant="contained" color="secondary">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default withAuth(Signup);