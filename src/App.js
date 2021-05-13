import { Route, Switch } from 'react-router';
import './App.css';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';
import PartyList from './pages/PartyList/PartyList';
import PartyDetails from './pages/PartyDetails/PartyDetails';
import CreateParty from './components/CreateParty/CreateParty';
import EditUser from './pages/EditUser/EditUser'
import "@fontsource/roboto";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/create-party" component={CreateParty}/>
        <Route path="/parties" exact component={PartyList} />
        <Route exact path="/signup" component={Signup} redirectPath="/parties" />
        <Route exact path="/login" component={Login} />
        <PrivateRoute  path="/party-details/:id" component={PartyDetails} />
        <PrivateRoute exact path="/profile/" component={Profile} />
        <PrivateRoute exact path="/edit-user/" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
