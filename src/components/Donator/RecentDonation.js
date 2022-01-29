import React from 'react';
import axios from "axios"
import {CardGroup, CardColumns} from "react-bootstrap"
import EnrolledClassCard from './EnrolledClassCard';

const data=[
  {
    name:"",
    subject:"",
    time:"",
    fees:"",
    status:"",
    id:"",
  },
  {
    name:"",
    subject:"",
    time:"",
    fees:"",
    status:"",
    id:"",
  },

]
class RecentDonation extends React.Component {

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
            ID: 12345,
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

      
      const cabcards = this.props.data.map((item, index) => {
       
       
        return (
          <EnrolledClassCard
            key={index}
            name={item.name}
            subject={item.subject}
            time={item.time}
            fees={item.fees}
            status={item.status}
            id={item.id}
          >/</EnrolledClassCard>
        );
        
      });
      return (
        <div style={{paddingLeft:"0px",width:"100%"}} >
        <h1 style={{color:"black",fontSize:"50px"}}>Recent Donations Made</h1>
      <CardColumns style={{paddingTop:"50px",width:'100%',display:'flex'
      ,flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
        {cabcards}
      </CardColumns>
    </div>
  
      );
    }
  }
  
  
  export default RecentDonation;