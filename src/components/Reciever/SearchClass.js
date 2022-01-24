import React from 'react';
import Select from "react-select";
import SearchClassCard from "./SearchClassCard"
import PlainList from "flatlist-react"
import axios from "axios"
class SearchClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requests:[],
            subject:""
        };
      this.fromSelect = this.fromSelect.bind(this);
      this.searchClass = this.searchClass.bind(this);
        
    }
    options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
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
    fromSelect(event) {
      
      this.setState({subject:event.label})
      console.log(this.stae)
      
    }
    searchClass(){
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
        axios
      .get("http://localhost:3000/api/searchclass/get",{
        params: {
          subject:this.state.subject
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
    renderClass = (sclass, idx) => {
      if(sclass.status)
      {
        return (
          <SearchClassCard key={idx} sclass={sclass}/>
          );
          
        }
    }
    render() {
      return (
        <div style={{backgroundColor:"#dbdbdb",borderRadius:"25px",color:"black", height:"1000px",textAlign:"center"}}>
        <h1 style={{paddingTop:"30px",color:"black",fontSize:"50px"}}>Search a Class</h1>
        <div style={{paddingLeft:"50px",display:"flex",alignItems:"start"}}>
        <Select placeholder="Subject List" onChange={this.fromSelect} styles={this.customStyles} options={this.options}
              isSearchable={true}
            />
            
        <button onClick={this.searchClass} style={{fontSize:"30px",marginLeft:"20px"}} >Search</button>
        
        </div>
          <div style={{marginTop:"50px",marginRight:"50px",marginLeft:"50px",width:"1825px"}}>
          <PlainList
              list={this.state.requests}
              renderItem={this.renderClass}
              renderOnScroll
              />
          </div>
        </div>
  
      );
    }
  }
  
  
  export default SearchClass;