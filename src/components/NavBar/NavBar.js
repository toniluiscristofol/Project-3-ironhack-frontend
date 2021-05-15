import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./NavBar.css"
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade("#000", 0.8),
    // "&:hover": {
    //   backgroundColor: fade("#E3E3E3", 0.9),
    // },
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
    
    
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link style={{ textDecoration: "none" }} to="/create-party">
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </Link>
    </Menu>
  );

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
            <div className={classes.searchIcon}>
              <SearchIcon
                style={{
                  marginLeft: "300px",
                  background: "#f50057",
                  borderRadius: "50%",
                  padding: "4px",
                }}
              />
            </div>
            <InputBase
              style={{
                marginLeft: "300px",
                borderRadius: "30px 0px 0px 30px",
                width: "15vw",
                border: "2px solid #c7c7c7",
                color: "black",
                marginTop: "15px",
                marginRight: "0px",
                marginBottom: "10px",
                padding: "7px 5px",
                borderRight: "none",
              }}
              placeholder="Search by city"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              className="input"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{
                  marginLeft: "0px",
                  border: "2px solid #c7c7c7",
                  borderRadius: "0px 30px 30px 0px",
                  paddingBottom: "8px",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Search by date"
                // value={fields.date}
                // onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link style={{ textDecoration: "none" }} to="/create-party">
              <Button
                style={{
                  borderRadius: "30px",
                  padding: "10px 30px",
                  position: "absolute",
                  top: "25px",
                  right: "150px",
                  fontSize: "12px",
                }}
                variant="contained"
                color="secondary"
                className="post-btn"
              >
                Post a party
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/profile">
              <IconButton
                style={{
                  background: "#E6E6E6",
                  marginTop: "10px",

                  marginRight: "10px",
                  padding: "10px",
                }}
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="red"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <Link style={{ textDecoration: "none" }} to="/create-party">
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
