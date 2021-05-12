import { Route, Switch } from 'react-router';
import './App.css';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PartyList from './pages/PartyList/PartyList';
import CreateParty from './components/CreateParty/CreateParty';
import "@fontsource/roboto";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <AnonRoute path = "/create-party" component={CreateParty}/>
        <AnonRoute path="/parties" exact component={PartyList} />
        <AnonRoute exact path="/signup" component={Signup} redirectPath="/todo-list" />
        <AnonRoute exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
