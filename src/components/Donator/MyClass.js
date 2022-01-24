import React from 'react';
import axios from "axios"
import {CardGroup, CardColumns} from "react-bootstrap"

import MyClassCard from "./MyClassCard"

class MyClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        requests:[]
    };
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }
      axios
    .get("http://localhost:3000/api/addclass/get",{
      params: {
        email:"test@g.com"
      }},{headers:headers})
    .then(res => {
      this.setState({requests:res.data});
     console.log(this.state.requests)
    })
    .catch(error => {
      console.log(error);
      console.log("Add Class Error");
    });
}

  
    render() {
      const cabcards = this.state.requests.map((item, index) => {
       
       
        return (
          <MyClassCard
            key={index}
            name={item.name}
            subject={item.subject}
            time={item.time}
            fees={item.fees}
            status={item.status}
            id={item.id}
          >/</MyClassCard>
        );})
      return (
        <div style={{backgroundColor:"#dbdbdb",borderRadius:"25px",color:"black", height:"1000px",textAlign:"center"}}>
        <h1 style={{color:"black",fontSize:"50px"}}>My Class</h1>
        <CardColumns style={{paddingTop:"50px"}}>
        {cabcards}
      </CardColumns>
    </div>
  
      );
    }
  }
  
  
  export default MyClass;