import React from 'react';
import {Layout} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import HostForm from './hostForm';
import Details from './details'
const {Header}=Layout;

const Subscribe=()=>{
    return(
        <div style={{flex: 1}}>
            <Header className="subHeader">
                <img src={require("../../Assets/logo.png")} alt="lampopo" onClick={()=> window.location.href="/"}/>
            </Header>
    
        <div className="subscribe">
            <HostForm/>
            
        </div>
        <Details ></Details>

        
        </div>


    );
}
export default Subscribe;