import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Dashboard  from './Dashboard';
import Sidebar from './SideNav';
import { Container , Col , Row } from 'react-bootstrap'
import "../../css/Donator.css"
import SearchClass from "./SearchClass"
import MyClass from "./MyClass"
function Reciever() {
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
        
          <Route exact path="/Reciever/" component={Dashboard} />
          <Route exact path="/Reciever/SearchClass" component={SearchClass} />
          <Route exact path="/Reciever/MyClass" component={MyClass} />
          
      
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Reciever;
