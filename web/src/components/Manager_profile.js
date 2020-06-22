import React from 'react';
import { Input, Button, Avatar, Divider, Space } from 'antd';
import '../UI/loginUI.css';
import 'antd/dist/antd.css';
import Head from './head';
import { UserOutlined } from '@ant-design/icons';
import { withCookies } from 'react-cookie';
import Hostel from './hostels';

class ManagerProfile extends React.Component{
    state={
        loggedIn: false
    }

    logOut = () => {
        this.setState({loggedIn: false})
        this.props.cookies.remove('mr-token')
    }

    componentDidMount(){
        if(this.props.cookies.get('mr-token'))
            this.setState({loggedIn:true})
    }
    render(){
        return(
            <div className="root">
             <Head loggedIn = {this.state.loggedIn} logOut={this.logOut}/>
             <div style={{alignItems:'center',display:'flex',flexDirection:'column',marginBottom:20}}>
             <Avatar size={150} icon={<UserOutlined />} />
             
             </div>
             
             <span className="largeText" style={{marginLeft:'100px'}}>Your Hostels</span>
             
                 <div className="explore" style={{justifyContent:'start'}}>
                 <Hostel allowEdit={true}/>
                 </div>
                 
                 
             

            </div>
        );
    }
}
export default withCookies(ManagerProfile);