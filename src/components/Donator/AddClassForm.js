import React,{useState} from 'react';

import Select from "react-select";
import TimePicker from 'react-times';
 import axios from "axios"
// use material theme
import DatePicker from 'react-date-picker';
import { useHistory } from "react-router-dom";
import 'react-times/css/material/default.css';
import { Button, Form } from 'react-bootstrap';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { donation } from '../../redux/donation';
import "../../css/addClass.css"
const AddForm = (props) => {
  const { addToast } = useToasts()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [picker,setPicker]=useState("")
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

      }
    }
    else
    {
      console.log("Password Error")
      addToast('Password Incorrect', { appearance:"error"})
    }

  }
 
  return (
        <Form style={{display:'flex',alignItems:'flex-start',flexDirection:'column'}}>
  <Form.Group style={{width: "100%"}} className="mb-3" controlId="formBasicEmail">
  <Form.Label  style={{textAlign: "left",fontSize: "30px",width: "100%"}}>Commodity</Form.Label>
    <div style={{display:"flex",flexDirection:'row',width:'100%',}}>
   <Select onChange={(event)=>setPicker(event.label)} styles={props.customStyles} options={props.options}
         isSearchable={true}
       />
  </div>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  style={{textAlign: "left",fontSize: "30px",width: "100%"}}>Address</Form.Label>
    <Form.Control 
    onChange={e =>{
      console.log(e.target.value)
      setPassword( e.target.value )}}
    style={{fontSize:'30px'}} type="input" placeholder="Your Address" />
  </Form.Group>
  <Form.Group style={{width: "100%"}} className="mb-3" controlId="formBasicPassword">
    <Form.Label  style={{textAlign: "left",fontSize: "30px",width: "100%"}}>Time</Form.Label>
    <TimePicker

onTimeChange={props.onTimeChange}    
style={{width:'100%'}}
time={props.time} // initial time, default current time

timeMode="12" // use 24 or 12 hours mode, default 24
/> 
  </Form.Group>
  <Form.Group style={{width: "100%"}} className="mb-3" controlId="formBasicPassword">
    <Form.Label  style={{textAlign: "left",fontSize: "30px",width: "100%"}}>Time</Form.Label>
      <div style={{backgroundColor:'transparent',fontSize:'30px'}}>
      <DatePicker
      className="datePicker"
    style={{width:"100%",fontSize:"30px"}}
    format="dd-MM-y"
  onChange={(item)=>{}}
  value={new Date()}
      
/>
      </div>
  </Form.Group>
  <Button onClick={()=>{onSubmit()}} style={{fontSize:'30px'}} variant="primary" type="submit">
    Donate
  </Button>
</Form>

  )
}

class AddClassForm extends React.Component {
  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

    constructor(props) {
        super(props);
        this.state = {
            time:"12:00pm",
            subject:"",
            fees:"",
            id:0,
            date:new Date()
        };
        this.fromSelect = this.fromSelect.bind(this);
        this.handleFees=this.handleFees.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      
        this.onTimeChange=this.onTimeChange.bind(this)
      }
    customStyles = {
      container: provided => ({
        ...provided,
        display: "inline-block",
        width: "100%",
        minHeight: "1px",
        height:"50px",
        textAlign: "left",
        border: "none"
      }),
      control: provided => ({
        ...provided,
        border: "2px solid #757575",
        borderRadius: "10px",
        minHeight: "1px",
        height: "50px",
      }),
      input: provided => ({
        ...provided,
        minHeight: "1px",
        height: "40px",
        marginLeft: "0px",
        background: "#fff"
      }),
      placeholder: provided => ({
        ...provided,
        marginTop: "0px"
      }),
      dropdownIndicator: provided => ({
        ...provided,
        minHeight: "1px",
        paddingTop: "0",
        paddingBottom: "0",
        color: "#757575"
      }),
      indicatorSeparator: provided => ({
        ...provided,
        minHeight: "1px",
        height: "24px"
      }),
      clearIndicator: provided => ({
        ...provided,
        minHeight: "1px"
      }),
      valueContainer: provided => ({
        ...provided,
        minHeight: "1px",
        height: "20px",
        paddingTop: "0",
        paddingBottom: "0"
      }),
      singleValue: provided => ({
        ...provided,
        minHeight: "1px",
        paddingTop: "8px",
        fontSize:"20px"
        
      })
    };
    onTimeChange(options) {
      
      this.setState({time:options.hour +":"+ options.minute+" "+options.meridiem})
      
    }
    handleFees(event){
      
      this.setState({fees:event.target.value})
      
    }

    fromSelect(event) {
      
      this.setState({subject:event.label})
      
    }
    handleSubmit(){
      const newRequest={
        id:this.state.id,
        name:"",
        email:"test@g.com",
        subject:this.state.subject,
        fees:this.state.fees,
        time:this.state.time,
        date:this.state.date,
        status:"pending"
      }
      this.props.addData(newRequest)
      // console.log(newRequest)
      // const headers = {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin':'*'
      // }
      // axios
      // .post("http://localhost:3000/api/addclass/post", newRequest,{headers:headers})
      // .then(res => {
      //   console.log(res.data);
      // })
      // .catch(error => {
      //   console.log(error);
      //   console.log("Add Class Error");
      // });
    }
    render() {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
        axios
      .get("http://localhost:3000/api/getcounter/get",{
        params: {
          field:"Class"
        }},{headers:headers})
      .then(res => {
        this.setState({id:res.data[0].Counter});
      })
      return (
      <AddForm customStyles={this.customStyles}
      options={this.options}  time={this.state.time}/>
  
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
  export default AddClassForm;


//   <div  >
          
//   <form >
//   <div style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
//   <label style={styles.subject}>Commodity :</label>
//   <Select onChange={this.fromSelect} styles={this.customStyles} options={this.options}
//         isSearchable={true}
//       />
   
//    </div>
//   <div  style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
//   <label style={styles.fees}>
    
//     Address :</label>
//     <input type="text" onChange={this.handleFees} style={{paddingLeft:"20px",width:'300px',height:"45px",borderRadius:"10px"}} value={this.state.fees}  />
  
//   </div>
  
//   <div style={{paddingTop:"20px",paddingBottom:"20px",width:"500px",}}>
//     <table>
//     <tr>
//     <td>
//     <label style={{fontSize:"30px"}}>Time :</label> 
//     </td>
//     <td style={{width:"300px",height:"35px"}}>
// //     <TimePicker

// // onTimeChange={this.onTimeChange.bind(this)}    
// // customStyles
// // time={this.state.time} // initial time, default current time

// // timeMode="12" // use 24 or 12 hours mode, default 24
// /> </td>
// </tr>
// </table>
//   </div>
//   <div style={{paddingTop:"20px",paddingBottom:"20px",width:"500px",}}>
//     <table>
//     <tr>
//     <td>
//     <label style={{fontSize:"30px"}}>Date :</label> 
//     </td>
//     <td style={{width:"300px",height:"35px"}}>
//     <DatePicker
    
//     format="dd-MM-y"
//   onChange={(item)=>{this.setState({date:item})}}
//   value={this.state.date}
// />
//  </td>
// </tr>
// </table>
//   </div>
//   <div style={{paddingTop:"20px",paddingBottom:"20px"}}>
//   <button style={{fontSize:"40px"}} onClick={this.handleSubmit} type="button" >Donate</button>
//   </div>
// </form>
// </div>