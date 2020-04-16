import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form,Button,Card,CardBody,Container,Row,Label,Input,FormGroup} from 'reactstrap';
import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';
import { withCookies } from 'react-cookie';

const buttonList = {
    google: {
        visible: true,
        provider: () => auth.googleOAuth()
    },
    facebook: {
        visible: true,
        provider: () => auth.facebookOAuth()
    }
};

class Login extends Component {
    state = {
        group_number:null,
        credentials: {
            username: '',
            password: '',
            email:'',
            contact:'',
            groups:null,
           

        },
        isLoginView: true
    }
    inputChanged = event => {
     
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred},console.log(this.state.credentials.groups));
    }
   

    login = event => {
        if(this.state.isLoginView) {
            fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({username:this.state.credentials.username,password:this.state.credentials.password})
                }).then( resp => resp.json())
                .then( res => {
                    this.props.cookies.set('mr-token', res.token);
                    window.location.href = "/profile";
                })
                .catch( error => console.log(error))
        } else {
            
            fetch(`${process.env.REACT_APP_API_URL}/hostelwiz/users/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({username:this.state.credentials.username,
                                     password:this.state.credentials.password,
                                     first_name:this.state.credentials.first_name,
                                     last_name:this.state.credentials.last_name,
                                     email:this.state.credentials.email,
                                     groups:this.state.credentials.groups,
                                     contact:this.state.credentials.contact,
                                     
                })
                }).then( resp => resp.json())
                .then( res => {
                    this.setState({isLoginView: true})
                    window.location.href = "/";
                    alert(this.state.credentials.groups)
                })
                .catch( error => console.log(error))
        }
    }
    toggleView = () => {
        this.setState({isLoginView: !this.state.isLoginView});
    }


    componentDidMount() {
        auth.getAuth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/dashboard');
            }
        });
    }

    render() {
        return (
            <Container>
              <div>
       
            <Layout contentCenter={true}>
            
            <Card style={{width:400}}> 
            <CardBody>
            <Form>
            <h4> { this.state.isLoginView ? 'Sign In' : 'Register'}</h4>
            { this.state.isLoginView ? 
            
            //LOGIN FORM
            <React.Fragment>
            <div className="form-group">
                <label>Username</label>
                <input type="text"  name="username" value={this.state.credentials.username} onChange = {this.inputChanged}  className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={this.state.credentials.password} onChange = {this.inputChanged} className="form-control" placeholder="Enter password" />
            </div> </React.Fragment> : 
          //SIGN UP FORM   
        <React.Fragment>

<FormGroup>
        <Label for="exampleSelect">Are you here to rent or provide accomodation to others : </Label>
        <select name="groups" onChange={this.inputChanged}> 
          <option value={parseInt("3")}>I am here to rent</option>
          <option value={parseInt("2")}>I am here to provide accomodation</option>
      </select>
      </FormGroup>
            
            
            <div className="form-group">
                <label>First Name</label>
                <input type="text"  name="first_name" value={this.state.credentials.first_name} onChange = {this.inputChanged}  className="form-control" placeholder="Enter first name" />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text"  name="last_name" value={this.state.credentials.last_name} onChange = {this.inputChanged}  className="form-control" placeholder="Enter Last name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email"  name="email" value={this.state.credentials.email} onChange = {this.inputChanged}  className="form-control" placeholder="Enter email address" />
            </div>
            <div className="form-group">
                <label>Contact</label>
                <input type="text"  name="contact" value={this.state.credentials.contact} onChange = {this.inputChanged}  className="form-control" placeholder="Enter phone number" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username"  name="username" value={this.state.credentials.username} onChange = {this.inputChanged} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"  name="password" value={this.state.credentials.password} onChange = {this.inputChanged}  className="form-control" placeholder="Enter password" />
            </div> 

         

            </React.Fragment>
        
        }

           

            { this.state.isLoginView ? <Button onClick={this.login} color="primary" className="btn btn-primary btn-block">Sign In</Button> : <Button onClick={this.login} color="primary" className="btn btn-primary btn-block">Signup</Button>}
                <br></br>
           
        </Form>
        <Row style={{justifyContent:"center"}}>
            <p  className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p></Row>
    <Row style={{justifyContent:"center"}}>   { this.state.isLoginView ? <React.Fragment> 'Dont have an account?' <Button onClick={this.toggleView} size="sm" color="primary" style={{fontSize:10,height:30}}>Sign Up here</Button></React.Fragment> : <Button color="danger" onClick={this.toggleView}>Go back To Login Page</Button>} </Row>
          </CardBody>
            
              </Card>
             
            
                <p>Connect With</p>
                <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
                <Link to="/about">About</Link>
            </Layout>
            </div>
            </Container>

        );
    }
}

export default withCookies(Login);