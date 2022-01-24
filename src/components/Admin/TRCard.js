import React from "react";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import axios from "axios";

import "../../css/card.css";


class TRCard extends React.Component {
  constructor(props) {
    super(props);

    this.onSend = this.onSend.bind(this);
    this.state = {
      requests: [],
      count: 0
    };
  }
  onSend() {
    
  }

  render() {

    return (
        <Card style={{ width: '300px',borderRadius:"10px" }}>
    <Card.Header style={{fontSize:"30px"}}>{this.props.subject}</Card.Header>
  <ListGroup style={{textAlign:"start",fontSize:"20px"}} variant="flush">
  <ListGroup.Item style={{borderBottomWidth:"4px"}}>ID : {this.props.id}</ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Subject : {this.props.subject}</ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Fees : {this.props.fees} </ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Time : {this.props.time} </ListGroup.Item>
    <ListGroup.Item >Status : {this.props.status}</ListGroup.Item>
  </ListGroup>
  <Card.Footer  style={{fontSize:"30px"}}>Delete</Card.Footer>
</Card>
       
    );
  }
}


export default (TRCard);
