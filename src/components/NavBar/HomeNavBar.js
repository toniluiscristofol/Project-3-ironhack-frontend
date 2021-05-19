import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withAuth } from "../../context/auth.context";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./HomeNavBar.css";



import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";


function HomeNavBar(props) {
  

  return (
    <div className="nav">
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              width="200px"
              height="38px"
              src="/PILLOWTALK (3) (2).png"
              alt=""
            />
          </Link>
          <div>
            <div>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/parties"
                className="home-link1"
              >
                Browse parties
              </Link>
              {props.isLoggedIn ? (
                <div>
                  <Link
                    className="user-icon"
                    style={{ textDecoration: "none" }}
                    to="/profile"
                  >
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "none",
                      }}
                      src="/user.png"
                      alt=""
                    />
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/signup"
                    className="home-link2"
                  >
                    Sign Up
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                    className="home-link3"
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/create-party"
            id="post-btn"
          >
            Post a party
          </Link>
        </Toolbar>
        {/* <Link
                  className="user-icon"
                  style={{ textDecoration: "none" }} to="/profile">
          <img
            style={{ width: "20px", height: "20px", background: "none" }}
            src="/user.png"
            alt=""
          />
        </Link> */}
      </AppBar>

      <div />
    </div>
  );
}

export default withAuth(HomeNavBar);
