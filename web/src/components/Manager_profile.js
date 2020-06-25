import React from 'react';
import { Input, Button, Avatar, Divider, Space } from 'antd';
import '../UI/loginUI.css';
import 'antd/dist/antd.css';
import Head from './head';
import { UserOutlined } from '@ant-design/icons';
import { withCookies } from 'react-cookie';
import Hostel from './hostels';
import { getUser, getHostelManager, getHMProperties } from '../api'

class ManagerProfile extends React.Component {
    state = {
        loggedIn: false,
        token: '',
        properties : ''
    }

    logOut = () => {
        this.setState({ loggedIn: false })
        this.props.cookies.remove('mr-token')
    }


    componentDidMount() {
        if (this.props.cookies.get('mr-token'))
            this.setState({ loggedIn: true, token: this.props.cookies.get('mr-token') })
        this.getUser(this.props.cookies.get('mr-token'))
    }

    getUser = async (token) => {
        try {
            const data = await getUser(token)
            this.getProperties(token, data.user.id)
        }
        catch (err) {
            console.log(err.errMessage)
        }
    }

    getProperties = async (token) => {
        try {
            const manager = await getHostelManager(token)
            const properties = await getHMProperties(manager.id)
            //console.log(properties)
            this.setState({properties})
        }
        catch (err) {
            console.log(err.errMessage)
        }

    }

    render() {
        return (
            <div className="root">
                <Head loggedIn={this.state.loggedIn} logOut={this.logOut} />
                <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
                    <Avatar size={150} icon={<UserOutlined />} />

                </div>

                <span className="largeText" style={{ marginLeft: '100px' }}>Your Hostels</span>

                <div className="explore" style={{ justifyContent: 'start' }}>
                    <Hostel allowEdit={true} properties = {this.state.properties}/>
                </div>




            </div>
        );
    }
}
export default withCookies(ManagerProfile);