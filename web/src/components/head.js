import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Header } = Layout;

const Head = (props) => {
    handleClicked = e => {
        const location = e.key
        if (location === 'logout') {
            props.logout()
        } else {
            window.location.href('/'+location)
        }
    }

    return (
        <div>
            {
                props.loggedIn ? (
                    <Header className="pg-header">
                        <div className="header-first">
                            <img src={require("../Assets/logo.png")} alt="hostelWiz" />
                        </div>
                        <div className="header-second">
                            <Menu onClick={} theme="light" mode="horizontal">
                                <Menu.Item key="listing">List Property</Menu.Item>
                                <SubMenu title="Account" icon={<UserOutlined />}>
                                    <Menu.Item key="logout">Logout</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="help">Help?</Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                ) : (
                        <Header className="pg-header">
                            <div className="header-first">
                                <img src={require("../Assets/logo.png")} alt="hostelWiz" />
                            </div>
                            <div className="header-second">
                                <Menu theme="light" mode="horizontal" onClick={handleClicked}>
                                    <Menu.Item key="listing">List Property</Menu.Item>
                                    <Menu.Item key="help">Help?</Menu.Item>
                                    <Menu.Item key="login">Login</Menu.Item>
                                    <Menu.Item key="register">Sign Up</Menu.Item>
                                </Menu>
                            </div>
                        </Header>
                    )
            }
        </div >

    );
}
export default Head;
