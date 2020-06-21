import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header } = Layout;


class Head extends React.Component {
    state = {
        loggedIn: this.props.loggedIn
    }

    handleClicked = e => {
        const location = e.key
        if (location === 'logout') {
            this.props.logOut()
        } else {
            window.location.href = '/' + location
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.loggedIn ? (
                        <Header className="pg-header">
                            <div className="header-second">
                            <div className="header-first" >
                                <img src={require("../Assets/logo.png")} alt="hostelWiz" onClick={()=> window.location.href = "/" }/>
                            </div>
                                <Menu onClick={this.handleClicked} theme="light" mode="horizontal">
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
                                    <img src={require("../Assets/logo.png")} alt="hostelWiz" onClick={()=> window.location.href = "/" }/>
                                </div>
                                <div className="header-second">
                                    <Menu theme="light" mode="horizontal" onClick={this.handleClicked}>
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
}
export default Head;
