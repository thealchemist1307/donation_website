import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Sidebar from './SideNav';
import { Container , Col , Row } from 'react-bootstrap'
import "../../css/Donator.css"
import DonatorRequest from "./DonatorRequests"
import RecieverFeedback from "./RecieverFeedback"
import ClassRequest from "./ClassRequest"
function Admin() {
  return (
   <div className="Donator">
   <React.Fragment>
      <Router>
        <NavigationBar />
        <Container fluid>
        <Row>
        <Col xs={2} style={{alignItems:"flex-start",marginLeft:"-25px"}}>
        <Sidebar />
        </Col>
        <Col style={{marginRight:"50px",paddingTop:"50px"}}>
        
          <Route exact path="/Admin/tr" component={DonatorRequest} />
          <Route exact path="/Admin/sf" component={RecieverFeedback} />
          <Route exact path="/Admin/cr" component={ClassRequest} />
          
      
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Admin;
