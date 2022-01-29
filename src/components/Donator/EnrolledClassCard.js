import React from "react";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import axios from "axios";

import "../../css/card.css";


class EnrolledClassCard extends React.Component {
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
        <Card style={{ width:"90%",borderRadius:"10px",marginLeft:"0px" }}>
    <Card.Header style={{fontSize:"30px"}}>{this.props.subject}</Card.Header>
  <ListGroup style={{textAlign:"start",fontSize:"20px"}} variant="flush">
  <ListGroup.Item style={{borderBottomWidth:"4px"}}>Name : {this.props.name}</ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Address : {this.props.fees} </ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Time : {this.props.time} </ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Date : {this.props.date} </ListGroup.Item>
    <ListGroup.Item >Status : {this.props.status}</ListGroup.Item>
  </ListGroup>

</Card>
       
    );
  }
}


export default (EnrolledClassCard);
