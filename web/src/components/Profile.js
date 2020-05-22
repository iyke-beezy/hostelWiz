import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import Layout from '../containers/Layout';
import {
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";

class Profile extends Component {
    constructor(props){
        super(props);
       this.state = {
         users:[],
         token: this.props.cookies.get('mr-token'),
         username : "",
         first_name:"",
         last_name:"",
         contact :"",
         Email: "",
         profile:"",
        uid:""
       };
     }

    componentDidMount() {
        if(this.state.token){
          fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/get_user/`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${this.state.token}`
            }
          }).then( resp => resp.json())
          .then(res =>  {this.setState({users:[...this.state.users, res.user]})})
          .then(console.log(this.state.users))
          .catch( error => console.log(error))
    
    
         console.log(this.state.users)
    
         
        } else {
          alert("User is not logged in");
        }
       
       
    
      }
   
    render() {
      return (
        <Container>
        <Layout>
     { this.state.users.map( user => {
          return (
            
        <Row className="justify-content-between">
        
          
          <Col md="4">
           
         
          
            <Row className="justify-content-between align-items-center">
            <div>
     
              <div key={user.id}  >
              <Row>
              <h5>
                Username : {user.username}
                   
                  </h5>
                  </Row>
              <Row className="justify-content-between align-items-center">


              <h5>Name:{user.first_name + " " + user.last_name}</h5>
             
            </Row>
              <Row>
                  <h5>
                    Contact : {user.contact}
                   
                  </h5>
               </Row>
               <Row>
                  <h5>
               Email: {user.email}
                
               </h5>
              
               </Row>
              <Row>
              <Button style={{height:40, width:100, fontSize:10 , marginRight:20}}  color="primary" onClick={() => {this.loadDetails(user.id,user.username,user.first_name,user.last_name,user.contact,user.email,this.state.profile)}}>
               Edit profile
               </Button>
               
               <Button style={{height:40, width:100, fontSize:10}}  color="danger" onClick={() => {this.fileUploadButton();}}>
               Delete account
               </Button>
      
              </Row>
                 
               
              </div>
   
     
  </div>
            
            </Row>
          
          </Col>
        
           
         
        </Row>
               )
              })}
     
    
     
     </Layout>
     </Container>
      );
    }
  }
  
  export default withCookies(Profile);