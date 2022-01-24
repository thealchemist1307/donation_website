import React from 'react';
import "../../css/Donator.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch,useLocation } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Dashboard  from './Dashboard';
import Sidebar from './SideNav';
import DonatorClassPage from "../Classes/DonatorClassPage"
import { Container , Col , Row } from 'react-bootstrap'

import AddClass from "./AddClass"
import MyClass from "./MyClass"
function Donator() {
  let location = useLocation();
  console.log("Donator "+location.pathname)
  return (
   <div className="Donator">
   <React.Fragment>
      <Router>
        <NavigationBar />
        <Container fluid>
        <Row>
        <Col xs={2} style={{alignItems:"flex-start",marginLeft:"-25px"}}>
        <Sidebar location={location.pathname} />
        </Col>
        <Col style={{marginRight:"50px",paddingTop:"50px"}}>
        
          <Route exact path="/Donator/" component={Dashboard} />
          <Route exact path="/Donator/AddClass/" component={AddClass} />
          <Route exact path="/Donator/MyClass/" component={MyClass} />
          <Route path="/Donator/Class/:id" component={DonatorClassPage}></Route>
          
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Donator;
