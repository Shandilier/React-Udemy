import react,{Fragment} from 'react';
import "./App.css";
import Home from "./pages/Home.js";
import Rooms from "./pages/Rooms.js";
import SingleRoom from "./pages/SingleRoom.js";
import Error from "./pages/Error.js";
import Navbar from "./Components/Navbar"
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Home}></Route>
          <Route exact path = "/rooms" component = {Rooms}></Route>
          <Route exact path = "/rooms/:slug" component = {SingleRoom}></Route>
          <Route component = {Error}></Route>
        </Switch>
      </Fragment>
  );
}

export default App;
