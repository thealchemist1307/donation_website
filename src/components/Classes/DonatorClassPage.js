import React from 'react';
import axios from 'axios';

class DonatorClassPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:0,
            requests:[]
        };
        console.log(this.props.match)
        console.log(this.props.location)
        this.setState({id:this.props.match.params.id})
        console.log(this.state.id)
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
          axios
        .get("http://localhost:3000/api/classpage/get",{
          params: {
            id:this.props.match.params.id
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
      return (
        <div style={{backgroundColor:"#dbdbdb",borderRadius:"25px",color:"black", height:"1000px",textAlign:"center"}}>
        <h1 style={{color:"black",fontSize:"50px"}}>Donator Class</h1>
        <div>
          
        </div>
    </div>
  
      );
    }
  }
  
  
  export default DonatorClassPage;