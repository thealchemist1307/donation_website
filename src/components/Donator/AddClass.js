import React from 'react';
import { Container , Col , Row } from 'react-bootstrap'
import AddClassForm from "./AddClassForm"
import EnrolledClass from "./EnrolledClass"
import {connect} from "react-redux"
import {donation} from "../../redux/donation"
import { ToastProvider, useToasts } from 'react-toast-notifications'

class AddClass extends React.Component {

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
            },
          ]
        };
    }
    addData=(item)=>{
      this.setState({data:[...this.state.data,item]})
    }
    render() {
      return (
        <div style={styles.div}>
          <ToastProvider>
          <Container fluid>
          <Row>
            <Col style={styles.enrolledCol}  ><EnrolledClass data={this.props.user} /></Col>
            <Col style={styles.form}><AddClassForm data={this.props.user} addData={this.addData}/></Col>
          </Row>
          </Container>
          </ToastProvider>
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
const mapDispatchToProps = dispatch => ({
  donation: (item) => dispatch(donation(item)),
});
const mapStateToProps = state => {
  return {
      user: state.userDetails.accDetails,

  }
};
export default connect(mapStateToProps,mapDispatchToProps)(AddClass);