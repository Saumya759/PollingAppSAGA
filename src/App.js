import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PollList from "./pages/PollList";
// import PrivateRoute from "../src/components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Login} />
       
        <Route path="/signup" exact component={Signup} />

        <Route path="/pollist">
          {" "}
          {localStorage.getItem("token") ? (
            <PollList />
          ) : (
            <Redirect to="/" />
          )}{" "}
        </Route>

        {/* <Route path="/polllist" exact component={PollList} /> */}
      </Switch>
    </Router>
  );
};
export default App;
