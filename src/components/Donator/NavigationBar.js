import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from "../../assets/header.png"
const Styles = styled.div`
.navbar { background-color: #e89b00;
            border-width:5px }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size:50px;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/Donator/"> <label style={{fontSize:"50px",color:'black',fontWeight:'bold'}}>
        Donation Website</label> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Sign Out</Nav.Link></Nav.Item> 
   
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)