import React, { Component,useState } from 'react';
import PropTypes from 'prop-types';

import Layout from '../containers/Layout';
import { withCookies } from 'react-cookie';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
 Media,
 Modal
} from "reactstrap";
import {Image} from 'react-bootstrap';



class Profilepage extends Component {
 
 constructor(props){
   super(props);
  this.state = {
    users:[],
    token: this.props.cookies.get('mr-token'),
    fileUploadState:"",
    username : "",
    first_name:"",
    last_name:"",
    contact :"",
    Email: "",
    profilepic:"",
   
  };
}




loadDetails(username,first_name,last_name,contact,email){
  this.setState({
    username : username,
    first_name:first_name,
    last_name:last_name,
    contact :contact,
    Email: email,
   }, this.dis());
   
}

dis(){
  console.log(this.state.contact)
}

fileUploadButton = ()=>
{
    document.getElementById('fileButton').click();
    document.getElementById('fileButton').onchange = () =>
    {   
this.setState({fileUploadState:document.getElementById('fileButton').value});
    }
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
      window.location.href = '/';
    }
   
   

  }

 
 
 

  

 

  render() {


   
   
    

    return (
     
      <Container>
         <Layout>
      { this.state.users.map( user => {
           return (
             
         <Row className="justify-content-between">
         
         <Col md = "4"></Col>
          <Col xs="6" md="4">
          <Image  height="100" width = "100" src={this.state.fileUploadState} roundedCircle />
          <div>
          <input  id="fileButton"  type="file"  hidden />
          <Button style={{height:40, width:100, fontSize:10}}  color="primary" onClick={this.fileUploadButton}>
          Image Upload
          </Button>
          {this.state.fileUploadState}
          </div>
          </Col>
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
               <Button style={{height:40, width:100, fontSize:10 , marginRight:20}}  color="primary" onClick={() => {this.loadDetails(user.username,user.first_name,user.last_name,user.contact,user.email)}}>
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

export default withCookies(Profilepage);