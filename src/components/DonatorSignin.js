
import React,{useState} from "react";
import "../css/login.css";
import { ToastProvider, useToasts } from 'react-toast-notifications'
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Form } from 'react-bootstrap';
import {login} from "../redux/ActionCreator"
const SigninForm = (props) => {
  const { addToast } = useToasts()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  let history = useHistory();

  const onSubmit = async value => {
    if(props.map.has(email))
    {
      const item =props.map.get(email)
      if(item.password!=password)
      {
        console.log("Email Error")
        addToast('Password Incorrect', { appearance:"error"})
      }
      else{
        console.log("Login Sucess")
        props.login(item)
        history.push("/Donator/")
      }
    }
    else
    {
      console.log("Password Error")
      addToast('Password Incorrect', { appearance:"error"})
    }

  }
 
  return (
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontSize:'30px'}}>Email address</Form.Label>
    <Form.Control style={{fontSize:'30px'}} 
    onChange={e => setEmail( e.target.value )}
    type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{fontSize:'30px'}}>Password</Form.Label>
    <Form.Control 
    onChange={e =>{
      console.log(e.target.value)
      setPassword( e.target.value )}}
    style={{fontSize:'30px'}} type="password" placeholder="Password" />
  </Form.Group>

  <Button onClick={()=>{onSubmit()}} style={{fontSize:'30px'}} variant="primary" type="submit">
    Sign In
  </Button>
</Form>
  )
}

class DonatorSignin extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        map:new Map()
      };
  }
  componentDidMount()
  {
    const arr=[
      {
        id:1,
        email:'shivammihsra@gmail.com',
        password:"password",
        noOfDonation:2,
        donations:[
          {
            name:"Shivam Mishra",
            subject:"Commodity 3",
            time:"12:20 PM",
            fees:"Address",
            status:"",
            date:"12/02/2022",
            id:"2",
          },
          {
            name:"Shivam Mishra",
            subject:"Commodity 1",
            time:"12:20 PM",
            fees:"Address",
            status:"",
            date:"12/02/2022",
            id:"1",
          },
        ]
      },
      {
        id:2,
        email:'nishit',
        password:"password",
        noOfDonation:2,
        donations:[
          {
            name:"Shivam Mishra",
            subject:"Commodity 3",
            time:"12:20 PM",
            fees:"Address",
            status:"",
            date:"12/02/2022",
            id:"2",
          },
          {
            name:"Shivam Mishra",
            subject:"Commodity 1",
            time:"12:20 PM",
            fees:"Address",
            status:"",
            date:"12/02/2022",
            id:"1",
          },
        ]
      },
    ]
    var map=new Map()
    arr.map((item,index)=>{
        map.set(item.email,item)
    })
    this.setState({map:map})
  }
  handleLogin=(email,password)=>{

  }
  render() {
    return (
          <div data-layer="097a4e4f-f9a2-4cfc-a180-fbf34cac993e" className="login">        <div data-layer="fb6bd486-1cbf-4078-bac2-4094a594d6c5" className="background"></div>
        <div data-layer="7b7489e6-d2f4-4276-a04d-3d717f5ee76a" className="header"></div>
        <div data-layer="41c1d55d-084a-4281-8d0e-562e88d0ade1" className="loginBox"></div>
<ToastProvider>
        <div className="signIn" >
          <SigninForm map={this.state.map}  login={this.props.login}/>
        </div>
</ToastProvider>
        <div data-layer="68ffe7aa-e32c-4b43-aa63-d4f8e43aad56" className="login2d0827ef">Donator Sign in</div>
        <div data-layer="32a32d8a-64de-46a5-a6ea-2ea9650b1791" className="digiAcharya"></div>
</div>

    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: (item) => dispatch(login(item)),
});

export default  connect(null,mapDispatchToProps)(DonatorSignin);
          