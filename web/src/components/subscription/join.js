import React from 'react';
import {Input,Button} from 'antd';
import './hostForm.css';
import '../../UI/loginUI.css'
import { UserOutlined, MailOutlined, PhoneOutlined,IdcardOutlined } from '@ant-design/icons';





class Join extends React.Component{
    state={
        name:'',
        email:'',
        id:'',
        number:'',
    }
    handleChange= event => {
     
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({state: cred});
    }
    render(){
    return(
        <div>
        <div style={{minHeight:"260px", height:"auto"}}>
            <h2 className="medText">Join Us</h2>
            <div>
            <h3 className="smallText">Sign Up</h3>
            <div>
            <div className="mt-8">
            <Input placeholder="Enter Your Full Name" name="name" value={this.state.name}  prefix={<UserOutlined />} onChange={this.handleChange}
            style={{width:200}}/>
            </div>
             <div className="mt-8">
            <Input placeholder="Enter Email"  name="email" value={this.state.email}  prefix={<MailOutlined />} onChange={this.handleChange} style={{width:200}}/>
            </div>
            <div className="mt-8">
            <Input placeholder="Enter A Valid ID" name="id" value={this.state.id}  prefix={<IdcardOutlined />} onChange={this.handleChange} style={{width:200}}/>
            </div>  
            <div className="mt-8">
            <Input placeholder="Enter Phone"  name="number" value={this.state.number}  prefix={<PhoneOutlined />} onChange={this.handleChange} style={{width:200,marginBottom:10}}/>
            </div>           
        </div>
            </div>
        </div>
            <Button className="form-button">Next</Button>
        </div>
        

    );
    }
}
export default Join;