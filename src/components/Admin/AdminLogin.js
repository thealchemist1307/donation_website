import React from 'react';
 import axios from "axios"
import { Link } from 'react-router-dom';
// use material theme

class AdminLogin extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
        this.handleUsername=this.handleUsername.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      
        
      }

    
    handleUsername(event){
      
      this.setState({username:event.target.value})
      
    }
    handlePassword(event){
      
        this.setState({password:event.target.value})
        
      }
    
    handleSubmit(){
        if(this.state.username=="admin")
        {
        
    
    
        }
    }    
    render() {
      return (
        <div  >
          
        <form >
        <div  style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
        <label style={styles.fees}>
          
          Username :</label>
          <input type="text" onChange={this.handleUsername} style={{paddingLeft:"20px",width:'300px',height:"45px",borderRadius:"10px"}} value={this.state.fees}  />
        
        </div>
        
        <div  style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
        <label style={styles.fees}>
          
          Password :</label>
          <input type="text" onChange={this.handlePassword} style={{paddingLeft:"20px",width:'300px',height:"45px",borderRadius:"10px"}} value={this.state.fees}  />
        
        </div>
        <div style={{paddingTop:"20px",paddingBottom:"20px"}}>
        <Link to="/Admin/tr" >Sign In</Link>
        </div>
      </form>
    </div>
  
      );
    }
  }
  
  const styles={
      subject:{paddingRight:"50px",
            fontSize:"30px"},
      
      fees:{paddingRight:"85px",
            fontSize:"30px",
              },
    
    }
  export default AdminLogin;