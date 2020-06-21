import React from 'react'
import PropTypes from 'prop-types';
import './loginUI.css'
import { Input, Button, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import { withCookies } from 'react-cookie'
import { loginUser } from '../api'
import { Link } from 'react-router-dom';

const propTypes = {
    children: PropTypes.node.isRequired,
};
class LoginUI extends React.Component {

    state = {
        username: '',
        password: '',
    }

    _login = async () => {
        try {
            const token = await loginUser(this.state.username, this.state.password)
            this.props.cookies.set('mr-token', token);
            this.setState({ loading: false })
            window.location.href = "/";
        }
        catch (err) {
            console.log(err.errMessage)
        }
    }

    handleChange = event => {
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({ state: cred });
    }

    Sign = () => {
        window.location.href = "/register"
    }

    render() {

        return (
            <section>
                <div className="imageBox">
                    <div>
                        <Tooltip title="Back">
                            <Button shape="circle" icon={<LeftOutlined />} onClick={() => window.location.href = "/"} />
                        </Tooltip>
                    </div>

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
                            <h2>Username</h2>

                            <Input type="text" size="large" className="form-control" placeholder="Enter username" prefix={<UserOutlined />} name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div className="mt-8">
                            <h2>Password</h2>

                            <Input type="password" size="large" name="password" prefix={<LockOutlined />} value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                        </div>


                        <div className="mt-8">
                            <Button size="large" onClick={this._login}>
                                Login
                        </Button>
                        </div>
                        <div className="login">
                            <h3>Create an Account <Button type="link" onClick={this.Sign}>Sign Up</Button></h3>
                        </div>
                        <p>
                            Or login with other accounts
        </p>
                        <div className="buttons">
                            {this.props.children}
                        </div>
                        <div className="footer">
                            <Link to="/"><p>Privacy Policy</p></Link>
                            <Link to="/"><p>Terms and Conditions</p></Link>
                            <p>{'\u00A9'}2020 Slitcorp. All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </section>


        );

    }
}

LoginUI.propTypes = propTypes;
export default withCookies(LoginUI)