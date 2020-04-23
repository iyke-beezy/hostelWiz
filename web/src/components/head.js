import React from 'react';
import {Layout,Menu} from 'antd';
import 'antd/dist/antd.css';

const {Header}=Layout;

const Head=()=>{
    return(
        <Header className="pg-header">
        <div  className="header-first">
            <img src={require("../Assets/logo.png")} alt="lampopo"/>
        </div>
        <div className="header-second">
        <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">List Property</Menu.Item>
            <Menu.Item key="2">Help?</Menu.Item>
            <Menu.Item key="3">Login</Menu.Item>
            <Menu.Item key="4">Sign Up</Menu.Item>
            </Menu>
        </div>
        </Header>

    );
}
export default Head;
