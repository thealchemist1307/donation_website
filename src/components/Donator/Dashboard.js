import React from 'react';
import { Container , Col , Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import RecentDonation from "./RecentDonation"
import Statistics from './Statistics';
class Dashboard extends React.Component {

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
            {
              name:"Shivam Mishra",
              subject:"Commodity 1",
              time:"12:20 PM",
              fees:"Address",
              status:"",
              date:"12/02/2022",
              id:"1",
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
  
    render() {
      return (
        <div style={{backgroundColor:"#dbdbdb",borderRadius:"25px",color:"black", height:"1070px",textAlign:"center"}}>
        <h1 style={{color:"black",fontSize:"50px"}}>Dashboard</h1>
        <div style={styles.div}>
          <Container fluid>
          <Row>
            <Col style={styles.enrolledCol}  >
              <div style={{}}>
              <RecentDonation data={this.props.user} />
              </div>
              </Col>
            <Col style={styles.form}>
              <Statistics user={this.props.user} addData={this.addData}/>
              </Col>
          </Row>
          </Container>
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
                  borderColor:"black",
                 display:'flex',
                flexWrap:'wrap'},
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
    const mapStateToProps = state => {
      return {
          user: state.userDetails.accDetails,
    
      }
    };
    export default connect(mapStateToProps)(Dashboard);