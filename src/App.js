/** @format */

import React from "react";
//import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Logout from "./components/Logout";
import DocumentUpload from "./components/DocumentUpload";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/Registration' component={Registration} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Logout' component={Logout} />
          {/* <Route exact path="/form" component ={form} /> */}
          <Route exact path='/DocumentUpload' component={DocumentUpload} />
        </Switch>
        {/* <Registeration /> */}
      </Router>
    </>
  );
};

export default App;
