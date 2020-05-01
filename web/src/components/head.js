import React from 'react';
import {Layout,Menu} from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';

const {Header}=Layout;

const Head=({list})=>{
    let head;
    if(list){
        head=<Header className="pg-header">
        <div  className="header-first">
            <img src={require("../Assets/logo.png")} alt="lampopo"/>
        </div>
        <div className="header-second">
        <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">List Property</Menu.Item>
            <Menu.Item key="2">Help?</Menu.Item>
            <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="4">Sign Up</Menu.Item>
        </Menu>
        </div>
        </Header>


        
    }else{
        head=<Header className="pg-header">
        <div  className="header-first">
            <img src={require("../Assets/logo.png")} alt="lampopo"/>
        </div>
        <div className="header-second">
        <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">Account</Menu.Item>
        </Menu>       
        </div>
        </Header>       
    }
    return(
    <div>{head}</div>

    );
}
export default Head;
