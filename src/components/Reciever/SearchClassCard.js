import React from "react";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"


class SearchClassCard extends React.Component {
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
    <Card.Header style={{fontSize:"30px"}}>{this.props.sclass.name}</Card.Header>
  <ListGroup style={{textAlign:"start",fontSize:"20px"}} variant="flush">
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Subject : {this.props.sclass.subject}</ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Fees : {this.props.sclass.fees} </ListGroup.Item>
    <ListGroup.Item style={{borderBottomWidth:"4px"}}>Time : {this.props.sclass.time} </ListGroup.Item>
  </ListGroup>
  <Card.Footer  style={{fontSize:"30px"}}>Enroll</Card.Footer>
</Card>
       
    );
  }
}


export default (SearchClassCard);
