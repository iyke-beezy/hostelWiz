import React from 'react';
import {Layout, Divider, Space} from 'antd';
import 'antd/dist/antd.css';
import "./homepage.css";

const {Footer}=Layout;

const Foot=()=>{
    return(
    <Footer className="foot">
    <div className="first-foot-div">
        <div className="first-child-1">
            <h2 className="footer-content">About</h2>
            <h4 className="footer-content">About</h4>
            <h4 className="footer-content">Trust & Safety</h4>
            <h4 className="footer-content">Accessibility</h4>
            <h4 className="footer-content">NewsRoom</h4>
        </div>
        <div className="first-child-2">
            <h2 className="footer-content">Community</h2>
            <h4 className="footer-content">Invite A Friend</h4>
            <h4 className="footer-content">FAQ</h4>        
        </div>
        <div className="first-child-3">
            <h2 className="footer-content">Support</h2>
            <h4 className="footer-content">Help Center</h4>
          
        </div>

    </div>
    <Divider
    style={{
        color:"#0C0B0B",
    }}
    ></Divider>
    <div className="second-foot-div">
            <div className="second-child-1">
            <h4 className="footer-content"       
            style={{
               flexShrink:"0",
               marginRight:"10px"   
            }}>
               {'\u00A9'}2020 Slitcorp,     All Rights Reserved
            </h4>
            <h4 className="footer-content"
                style={{
                 marginRight:"10px"
                }}>
                Privacy
            </h4>
            <h4 className="footer-content">Terms</h4>
                
            </div>
         <div className="second-child-2">
         <Space>
            <img src={require('../Assets/facebook.png')}/>
            <img src={require('../Assets/twitter.png')}/>
            <img src={require('../Assets/instagram.png')}/>
        </Space>
         </div>
        
    </div>
    </Footer>
    );
}
export default Foot;