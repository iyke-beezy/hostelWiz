import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
//import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';
import LoginUI from '../UI/loginUI';

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
    componentDidMount() {
        auth.getAuth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/dashboard');
            }
        });
    }

    render() {
        return (
            <LoginUI >
                <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
            </LoginUI>

            // <Layout contentCenter={true}>
            //     <p>Connect With</p>
            //     <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
            //     <Link to="/about">About</Link>
            // </Layout>
        );
    }
}

export default Login;