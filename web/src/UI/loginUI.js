import React from 'react'
import PropTypes from 'prop-types';
import './loginUI.css'
import { Input, Button, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import Pin from './loginPin';
import { withCookies } from 'react-cookie'
import RegisterUI  from './registerUI';
import {loginUser} from '../api'

const propTypes = {
    children: PropTypes.node.isRequired,
};
const code = Math.floor(1000 + Math.random() * 9000);
class LoginUI extends React.Component {

    state = {
        move: false,
        fname: '',
        full: '',
        email: '',
        number: '',
        login: false,
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
    nextPage = () => {
        if (this.state.login) {
            this._login()
        } else {
            this.setState({
                move: true
            });
        }

    }
    logSign = () => {
        this.setState({
            login: !this.state.login
        })
    }



    render() {

        let login;
        if (this.state.login) {
            login = <div>
                <div className="mt-8">
                    <h2>Username</h2>

                    <Input type="text" size="large" className="form-control" placeholder="Enter username" prefix={<UserOutlined />} name="username" value={this.state.username} onChange={this.handleChange} />
                </div>

                <div className="mt-8">
                    <h2>Password</h2>

                    <Input type="password" size="large" name="password" prefix={<LockOutlined />} value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>
            </div>
        } else {
            login = <RegisterUI handleChange={this.handleChange}/>
        };
        let linkName;
        let linkTitle;
        if (this.state.login) {
            linkName = "Sign up";
            linkTitle = "Create An Account"
        } else {
            linkName = "Login";
            linkTitle = "Already have an account?"
        }

        let display;
        if (this.state.move) {
            display =
                <div className="mainForm">
                    <h1>Discover More</h1>
                    {/*  */}
                    <div className="mt-8">
                        <Pin code={code} fname={this.state.name} email={this.state.email} number={this.state.number} />
                    </div>
                    <div className="login">
                        <h3>Already have an account? <Button type="link">Login</Button></h3>
                    </div>
                    <p>
                        Or login with other accounts
                    </p>
                    <div>
                        {this.props.children}
                    </div>
                    <div className="footer">
                        <Button type="link">Privacy Policy</Button>
                        <Button type="link">Terms and Conditions</Button>
                        <Button type="link" className="copyright">{'\u00A9'}2020 Slitcorp. All Rights Reserved</Button>
                    </div>
                </div>

        } else {
            display =
                <div className="mainForm">
                    <h1>Discover More</h1>
                    {/*  */}
                    {login}
                    <div className="mt-8">
                        <Button size="large" onClick={this.nextPage}>
                            Continue
                        </Button>
                    </div>
                    <div className="login">
                        <h3>{linkTitle} <Button type="link" onClick={this.logSign}>{linkName}</Button></h3>
                    </div>
                    <p>
                        Or login with other accounts
        </p>
                    <div>
                        {this.props.children}
                    </div>
                    <div className="footer">
                        <Button type="link">Privacy Policy</Button>
                        <Button type="link">Terms and Conditions</Button>
                        <Button type="link" className="copyright">{'\u00A9'}2020 Slitcorp. All Rights Reserved</Button>
                    </div>
                </div>
        };

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
                    {display}

                </div>
            </section>
        );

    }
}

LoginUI.propTypes = propTypes;
export default withCookies(LoginUI)