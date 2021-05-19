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
import EditParty from './components/CreateParty/EditParty';
import EditUser from './pages/EditUser/EditUser'
import "@fontsource/roboto";
import 'bootstrap/dist/css/bootstrap.min.css';
import StripeContainer from './components/stripe/StripeContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stripe/:id" component={StripeContainer} />
        <PrivateRoute path="/edit-party/:id" component={EditParty}></PrivateRoute>
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
        <AnonRoute
          exact
          path="/login"
          component={Login}
          redirectPath="/parties"
        />
        <Route
          exact
          path="/signup"
          component={Signup}
          redirectPath="/parties"
        />

        <PrivateRoute path="/party-details/:id" component={PartyDetails} />
        <PrivateRoute exact path="/profile/" component={Profile} />
        <PrivateRoute exact path="/edit-user/" component={EditUser} />

      </Switch>
    </div>
  );
}

export default App;
