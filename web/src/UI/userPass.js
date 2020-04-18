import React from "react";
import PropTypes from 'prop-types';
import renderEmpty from "antd/lib/config-provider/renderEmpty";
import {Form,Button,Card,CardBody,Container,Row,Label,Input,FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withCookies } from 'react-cookie';

class UserPass extends React.Component {

    props={
        code:PropTypes.number,
        fname:PropTypes.string,
        email:PropTypes.string,
        number:PropTypes.string
      }

    state = {
            group_number:null,
          
            username: '',
            password: '',
            first_name:'',
            email:'',
            contact:'',
            groups:3,
           confirmPassword:'',

        
        isLoginView: true
    }



    handleSubmit(){
     
        // perform all neccassary validations
        if (this.password !== this.confirmPassword) {
            alert("Passwords don't match");
        } else {
          
            // make API call
           fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({username:this.state.username,
                                     password:this.state.password,
                                     first_name:this.props.fname,
                                     last_name:this.props.fname,
                                     email:this.props.email,
                                     groups:this.state.groups,
                                     contact:this.props.number,
                                     
                })
                }).then( resp => resp.json())
                .then( res => {
                    console.log(res);
                  this.login();
                   
                })
                .catch( error => console.log(error))
              }
         }

   //login user to get token from server
   login(){
    fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({username:this.state.username,password:this.state.password})
        }).then( resp => resp.json())
        .then( res => {
            this.props.cookies.set('mr-token', res.token);
            window.location.href = "/profile";
        })
        .catch( error => console.log(error))
   }
 


  inputChanged = event => {
     
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({state: cred});
    }


    render(){
        const{code,fname,email,number}=this.props;
    return(


            <div>
                <Card style={{width:400}}> 
            <CardBody>
            <Form>
                   <div  className="mt-8">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username"  name="username" value={this.state.username} onChange = {this.inputChanged} />
            </div>

            <div  className="mt-8">
                <label>Password</label>
                <input type="password"  name="password" value={this.state.password} onChange = {this.inputChanged}  className="form-control" placeholder="Enter password" />
            </div> 
            <div  className="mt-8">
                <label>Confirm Password</label>
                <input type="password"  name="confirmPassword" value={this.state.confirmPassword} onChange = {this.inputChanged}  className="form-control" placeholder="Enter password" />
            </div> 
                 <FormGroup>
                     <div  className="mt-8">
                    <Label for="exampleSelect">Are you here to rent or provide accomodation to others : </Label>
                    <select name="groups" onChange={this.inputChanged}> 
                    <option value={parseInt("3")}>I am here to rent</option>
                    <option value={parseInt("2")}>I am here to provide accomodation</option>
                </select>
                </div>
                </FormGroup>
                <FormGroup>
                <Button onClick={() => {this.handleSubmit()}} color="primary" className="btn btn-primary btn-block">Continues</Button>
                </FormGroup>
                </Form>
                </CardBody>

               

            </Card>
            </div>
    );


    }


}
export default withCookies(UserPass);