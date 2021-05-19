import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./NavBar.css";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import PartyService from "../../services/parties.service";
import { LocationCitySharp } from "@material-ui/icons";

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

function NavBar(props) {
  const classes = useStyles();

  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState(new Date(Date.now()));

  
  
const handleChange = (event) => {
    setCity(event.target.value);
    
  };

  const handleDateChange = (date) => {
    const newDate = new Date(date);
    setDate(newDate)
    props.findByDate(date)
     
  }
  React.useEffect(() => {
props.findByCity(city)
  },[city])
  

  return (
    <div className={classes.grow}>
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
          <div className={classes.search}>
            //isHomePage
            {props.isHomePage ? (
              <div>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/parties"
                  className="home-link1"
                >
                  <Button variant="outlined" color="secondary">
                    Browse parties
                  </Button>
                </Link>
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
            ) : (
              //PARTYLIST

              <div>
                <div className={classes.searchIcon}>
                  <SearchIcon
                    className="icon"
                    style={{
                      background: "#f50057",
                      borderRadius: "50%",
                      padding: "4px",
                    }}
                  />
                </div>
                {/* <input
                    
                  className="city-input"
                  onChange={(e) => handleChange(e)}
                  value={city}
                  name="city"
                    style={{
                    
                    textAlign: "center",
                    marginLeft: "200px",
                    borderRadius: "30px 0px 0px 30px",
                    width: "15vw",
                    border: "2px solid #c7c7c7",
                    color: "black",
                    marginTop: "0px",
                    marginRight: "0px",
                    marginBottom: "10px",
                    padding: "0px 0px",
                    borderRight: "none",
                    height: "44px",
                  }}
                    placeholder="Search by city"
                    
                ></input> */}
                <InputBase
                  className="city-input"
                  onChange={(e) => handleChange(e)}
                  value={city}
                  name="city"
                  style={{
                    marginLeft: "200px",
                    borderRadius: "30px 0px 0px 30px",
                    width: "15vw",
                    border: "2px solid #c7c7c7",
                    color: "black",
                    marginTop: "0px",
                    marginRight: "0px",
                    marginBottom: "10px",

                    borderRight: "none",
                    height: "36px",
                    paddingBottom: "9px",
                  }}
                  placeholder="Search by city"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className="input"
                    style={{
                      marginLeft: "0px",
                      paddingLeft: "12px",
                      paddingRight: "0px",
                      marginRight: "100px",
                      border: "2px solid #c7c7c7",
                      borderRadius: "0px 30px 30px 0px",
                      paddingBottom: "0px",
                      marginTop: "0px",
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={date}
                    onChange={handleDateChange}
                    inputStyle={{ textAlign: "center" }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            )}
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link style={{ textDecoration: "none" }} to="/create-party">
              <Button
                style={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  position: "absolute",
                  top: "18px",
                  right: "100px",
                  fontSize: "12px",
                }}
                variant="outlined"
                color="secondary"
                className="post-btn"
                id="create-btn"
              >
                Post a party
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/profile">
              <img
                style={{ marginTop: "15px", width: "25px", height: "25px"}}
                src="/user.png"
                alt="user-profile"
              />
            </Link>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);



 