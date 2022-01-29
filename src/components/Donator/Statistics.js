import React from 'react';
import { Container , Col , Row } from 'react-bootstrap'

class Statistics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data:[
            {
              name:"Shivam Mishra",
              subject:"Commodity 1",
              time:"12:20 PM",
              fees:"Address",
              status:"",
              date:"12/02/2022",
              id:"1",
            }
          ]
        };
    }
    addData=(item)=>{
      this.setState({data:[...this.state.data,item]})
    }
    render() {
      return (
            <div  >
<h1 style={{color:"black",fontSize:"50px"}}>Statistics</h1>
          <div style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
          <label style={{fontSize:"30px"}}>No. of Donation :</label>
          <label style={{fontSize:"30px"}}>{this.props.user.noOfDonation}</label> 
           
           </div>
          <div  style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
          <label style={{fontSize:"30px"}}>Rewards : </label> 
          <label style={{fontSize:"30px"}}>3</label> 
          </div>
          
          <div  style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
          <label style={{fontSize:"30px"}}>Upcoming Donation : </label> 
          <label style={{fontSize:"30px"}}>1</label> 
          </div>


      </div>

  
      );
    }
  }
  
  const styles={
    div:{backgroundColor:"#dbdbdb",
            borderRadius:"25px",
            color:"black", 
            height:"1000px",
            textAlign:"center"},
    enrolledCol:{overflowY:'scroll',
                  marginTop:"50px",
                  marginBottom:"50px",
                  height:"900px",
                  borderWidth:"20px",
                  borderColor:"black"},
    form:{
    display:"flex",
    marginTop:"50px",
    marginBottom:"50px",
    height:"900px",
    borderWidth:"20px",
    borderColor:"black",
  alignItems:"flex-start",
justifyContent:"space-around"}

    
    }
  export default Statistics;