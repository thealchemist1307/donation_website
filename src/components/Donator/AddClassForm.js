import React from 'react';

import Select from "react-select";
import TimePicker from 'react-times';
 import axios from "axios"
// use material theme
import DatePicker from 'react-date-picker';

import 'react-times/css/material/default.css';
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
      
        
      }
    customStyles = {
      container: provided => ({
        ...provided,
        display: "inline-block",
        width: "300px",
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
        marginLeft: "160px",
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
        <div  >
          
        <form >
        <div style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
        <label style={styles.subject}>Commodity :</label>
        <Select onChange={this.fromSelect} styles={this.customStyles} options={this.options}
              isSearchable={true}
            />
         
         </div>
        <div  style={{paddingTop:"20px",paddingBottom:"20px",textAlign:'start'}}>
        <label style={styles.fees}>
          
          Address :</label>
          <input type="text" onChange={this.handleFees} style={{paddingLeft:"20px",width:'300px',height:"45px",borderRadius:"10px"}} value={this.state.fees}  />
        
        </div>
        
        <div style={{paddingTop:"20px",paddingBottom:"20px",width:"500px",}}>
          <table>
          <tr>
          <td>
          <label style={{fontSize:"30px"}}>Time :</label> 
          </td>
          <td style={{width:"300px",height:"35px"}}>
          <TimePicker
   
    onTimeChange={this.onTimeChange.bind(this)}    
    customStyles
    time={this.state.time} // initial time, default current time
    theme="material"
    timeMode="12" // use 24 or 12 hours mode, default 24
      /> </td>
      </tr>
      </table>
        </div>
        <div style={{paddingTop:"20px",paddingBottom:"20px",width:"500px",}}>
          <table>
          <tr>
          <td>
          <label style={{fontSize:"30px"}}>Date :</label> 
          </td>
          <td style={{width:"300px",height:"35px"}}>
          <DatePicker
          
          format="dd-MM-y"
        onChange={(item)=>{this.setState({date:item})}}
        value={this.state.date}
      />
       </td>
      </tr>
      </table>
        </div>
        <div style={{paddingTop:"20px",paddingBottom:"20px"}}>
        <button style={{fontSize:"40px"}} onClick={this.handleSubmit} type="button" >Donate</button>
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
  export default AddClassForm;