import React from 'react';
import TRCard from "./TRCard"
import axios from "axios"
import {CardGroup, CardColumns} from "react-bootstrap"

class DonatorRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requests:[]
        };
        axios
        .get("http://localhost:3000/api/tr/get"
          )
        .then(res => {
          this.setState({requests:res.data});

        })
        .catch(error => {
          console.log(error);
          console.log("Add Class Error");
        });
    }
    
  
    render() {
      const cabcards = this.state.requests.map((item, index) => {
       
       
        return (
          <TRCard
            key={index}
            name={item.name}
            subject={item.subject}
            time={item.time}
            fees={item.fees}
            status={item.status}
            id={item.id}
          ></TRCard>
        );
        
      });
      return (
        <div style={{backgroundColor:"#dbdbdb",borderRadius:"25px",color:"black", height:"1000px",textAlign:"center"}}>
        <h1 style={{color:"black",fontSize:"50px"}}>Donator Requests</h1>
        <CardColumns style={{paddingTop:"50px"}}>
        {cabcards}
      </CardColumns>
    </div>
  
      );
    }
  }
  
  
  export default DonatorRequest;