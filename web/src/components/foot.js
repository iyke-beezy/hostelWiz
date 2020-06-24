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
            <h4 className="footer-content"><a href='/about'>About</a></h4>
            <h4 className="footer-content"><a href='/trust'>Trust & Safety</a></h4>
            <h4 className="footer-content"><a href='/accessibility'>Accessibility</a></h4>
            <h4 className="footer-content"><a href='/newsroom'>NewsRoom</a></h4>
        </div>
        <div className="first-child-2">
            <h2 className="footer-content">Community</h2>
            <h4 className="footer-content"><a href='/faqs'>FAQ</a></h4>        
        </div>
        <div className="first-child-3">
            <h2 className="footer-content">Support</h2>
            <h4 className="footer-content"><a href='/help'>Help Center</a></h4>
          
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
                <a href='/terms'>Privacy</a>
            </h4>
            <h4 className="footer-content"><a href='/terms'>Terms</a></h4>
                
            </div>
         <div className="second-child-2">
         <Space>
            <img src={require('../Assets/facebook.png')} alt="facebook-logo"/>
            <img src={require('../Assets/twitter.png')} alt="twitter-logo"/>
            <img src={require('../Assets/instagram.png')} alt="instagtam-logo"/>
        </Space>
         </div>
        
    </div>
    </Footer>
    );
}
export default Foot;