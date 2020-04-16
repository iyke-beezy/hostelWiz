import React from 'react'
import PropTypes from 'prop-types';
import './loginUI.css'
import { Input, Button } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Pin from './loginPin';

const propTypes = {
    children: PropTypes.node.isRequired,
};
const code= Math.floor(1000+Math.random()*9000);
class LoginUI extends React.Component{

    state={
        move:false,
        name:'',
        email:'',
        number:''
    }

    handleChange=({ target })=> {
        this.setState({
          [target.name]: target.value
        });
      }
      nextPage=()=>{
        this.setState({
           move: true
          });
    }



   render(){
    let display;
    if (move){
        display=
        <div className="mainForm">
        <h1>Discover More</h1>
        {/*  */}
        <div className="mt-8">
            <Pin code={code} fname={this.state.name} email={this.state.email} number={this.state.number}/>
        </div>
        <div className="login">
            <h3>Already have an account? <Button type="link">Login</Button></h3>
        </div>
        <p>
            Or login with other accounts
        </p>
            {children}
        <div className="footer">
            <Button type="link">Privacy Policy</Button>
            <Button type="link">Terms and Conditions</Button>
            <Button type="link" className="copyright">{'\u00A9'}2020 Slitcorp. All Rights Reserved</Button>
        </div>
    </div> 
        
    }else{
        display=
        <div className="mainForm">
        <h1>Discover More</h1>
        {/*  */}
        <div className="mt-8">
            <h2>Full Name</h2>
            <Input placeholder="Enter Full Name" size="large" name="name" prefix={<UserOutlined onChange={this.handleChange}/>}
            />
        </div>

        <div className="mt-8">
            <h2>Email</h2>
            <Input placeholder="Enter Email" size="large" name="email" prefix={<MailOutlined />} onChange={this.handleChange}/>
        </div>

        <div className="mt-8">
            <h2>Phone Number</h2>
            <Input placeholder="Enter Phone" size="large" name="number" prefix={<PhoneOutlined />} onChange={this.handleChange}/>
        </div>
        <div className="mt-8">
            <Button size="large" onClick={this.nextPage}>
                Continue
            </Button>
        </div>
        <div className="login">
            <h3>Already have an account? <Button type="link">Login</Button></h3>
        </div>
        <p>
            Or login with other accounts
        </p>
            {children}
        <div className="footer">
            <Button type="link">Privacy Policy</Button>
            <Button type="link">Terms and Conditions</Button>
            <Button type="link" className="copyright">{'\u00A9'}2020 Slitcorp. All Rights Reserved</Button>
        </div>
    </div>


    }

    return (
        <section>
            <div className="imageBox">
            </div>
            <div className="content">
                <div className="Header">
                    <img
                        src={require("../Assets/logo.png")}
                        alt="logo"
                    />
                </div>
                {display}

            </div>
        </section>
    );

   }
}

LoginUI.propTypes = propTypes;
export default LoginUI