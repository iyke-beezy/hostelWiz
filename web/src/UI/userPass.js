import React from "react";
import PropTypes from 'prop-types';
import renderEmpty from "antd/lib/config-provider/renderEmpty";
import { Form, Card, CardBody, Container, Row, Label, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withCookies } from 'react-cookie';
import {Button} from 'antd'
import { loginUser, registerUser } from '../api'

const propTypes = {
    code: PropTypes.number,
    fname: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string
}
class UserPass extends React.Component {


    state = {
        group_number: null,
        loading: false,
        username: '',
        password: '',
        first_name: '',
        email: '',
        contact: '',
        groups: 3,
        confirmPassword: '',
        isLoginView: true
    }

 //login user to get token from server
 _login = async () => {
    try {
        const token = await loginUser(this.state.username, this.state.password)
        this.props.cookies.set('mr-token', token);
        this.setState({ loading: false })
        console.log(token)
        window.location.href = "/profile";
    }
    catch (err) {
        console.log(err.errMessage)
    }
}

    _signUp = async () => {
        try {
            const data = {
                username: this.state.username,
                password: this.state.password,
                first_name: this.props.fname,
                last_name: this.props.fname,
                email: this.props.email,
                groups: this.state.groups,
                contact: this.props.number,
            }
            const response = await registerUser(data)
            this.setState({loading: false})
            console.log(data)
            await this._login()
        }
        catch (err) {
            console.log(err.errMessage)
        }
    }

    handleSubmit = () => {
        // perform all neccassary validations
        if (this.password !== this.confirmPassword) {
            this.setState({ err: "Passwords don't match" });
        } else {
            //sign up
            this.setState({ loading: true })
            this._signUp()
        }
    }

    inputChanged = event => {

        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({ state: cred });
    }


    render() {
        const { code, fname, email, number } = this.props;
        return (

            <div>
                <Card style={{ width: 400 }}>
                    <CardBody>
                        <Form>
                            <div className="mt-8">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Enter username" name="username" value={this.state.username} onChange={this.inputChanged} />
                            </div>
                            <div className="mt-8">
                                <label>Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.inputChanged} className="form-control" placeholder="Enter password" />
                            </div>
                            <div className="mt-8">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.inputChanged} className="form-control" placeholder="Enter password" />
                            </div>
                            {/* <FormGroup>
                                <div className="mt-8">
                                    <Label for="exampleSelect">Are you here to rent or provide accomodation to others : </Label>
                                    <select name="groups" onChange={this.inputChanged}>
                                        <option value={parseInt("3")}>I am here to rent</option>
                                        <option value={parseInt("2")}>I am here to provide accomodation</option>
                                    </select>
                                </div>
                            </FormGroup> */}
                            <p>{this.state.err}</p>
                            <FormGroup>
                                <Button onClick={() => { this.handleSubmit() }} loading={this.state.loading} color="primary" className="btn btn-primary btn-block">Sign Up</Button>
                            </FormGroup>
                        </Form>
                    </CardBody>



                </Card>
            </div>
        );


    }

}
UserPass.propTypes = propTypes
export default withCookies(UserPass);