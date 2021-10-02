import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import Allmeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <Route path="/">
        <Allmeetups />
      </Route>

      <Route path="/new-meetup">
        <NewMeetup />
      </Route>

      <Route path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
