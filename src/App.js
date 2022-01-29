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
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import RecieverSignin from './components/RecieverSignin';
import DonatorSignin from './components/DonatorSignin';

const { persistor, store } = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <PersistGate
      persistor={persistor}

    >
    <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/DonatorLogin" component={DonatorLogin}></Route>
            <Route exact path="/DonatorSignin" component={DonatorSignin}></Route>
            <Route exact path="/RecieverSignin" component={RecieverSignin}></Route>
            <Route exact path="/RecieverLogin" component={RecieverLogin}></Route>
            <Route path="/Donator/" component={Donator}></Route>
            <Route path="/Reciever/" component={Reciever}></Route>
            <Route exact path="/Admin/login/" component={AdminLogin} />
          <Route exact path="/Admin/tr" component={Admin} />
        </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
