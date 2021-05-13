import { Route, Switch } from 'react-router';
import './App.css';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PartyList from './pages/PartyList/PartyList';
import PartyDetails from './pages/PartyDetails/PartyDetails';
import CreateParty from './components/CreateParty/CreateParty';
import "@fontsource/roboto";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/create-party"
          component={CreateParty}
          redirectPath="/parties"
        />
        <Route path="/parties" exact component={PartyList} />
        <AnonRoute
          exact
          path="/signup"
          component={Signup}
          redirectPath="/parties"
        />
        <AnonRoute exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} redirectPath="/parties" />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/party-details/:id" component={PartyDetails} />
      </Switch>
    </div>
  );
}

export default App;
