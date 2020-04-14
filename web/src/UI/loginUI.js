import React from 'react'
import PropTypes from 'prop-types';
import './loginUI.css'
import { Input, Button } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const propTypes = {
    children: PropTypes.node.isRequired,
};
const LoginUI = ({children }) => {
   
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
                <div className="mainForm">
                    <h1>Discover More</h1>
                    {/*  */}
                    <div className="mt-8">
                        <h2>Full Name</h2>
                        <Input placeholder="Enter Full Name" size="large" prefix={<UserOutlined />}
                        />
                    </div>

                    <div className="mt-8">
                        <h2>Email</h2>
                        <Input placeholder="Enter Email" size="large" prefix={<MailOutlined />} />
                    </div>

                    <div className="mt-8">
                        <h2>Phone Number</h2>
                        <Input placeholder="Enter Phone" size="large" prefix={<PhoneOutlined />} />
                    </div>
                    <div className="mt-8">
                        <Button size="large">
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
            </div>
        </section>
    )
}

LoginUI.propTypes = propTypes;
export default LoginUI