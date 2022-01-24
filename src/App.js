import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/login"
import RecieverLogin from "./components/RecieverLogin"
import DonatorLogin from "./components/DonatorLogin"
import Donator from "./components/Donator/Donator"
import 'bootstrap/dist/css/bootstrap.css';
import Reciever from "./components/Reciever/Reciever"
import Admin from "./components/Admin/Admin"
import AdminLogin from "./components/Admin/AdminLogin"
function App() {
  return (
    <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/DonatorLogin" component={DonatorLogin}></Route>
            <Route exact path="/RecieverLogin" component={RecieverLogin}></Route>
            <Route path="/Donator/" component={Donator}></Route>
            <Route path="/Reciever/" component={Reciever}></Route>
            <Route exact path="/Admin/login/" component={AdminLogin} />
          <Route exact path="/Admin/tr" component={Admin} />
        </Router>
  );
}

export default App;
