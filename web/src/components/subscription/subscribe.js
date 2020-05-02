import React from 'react';
import {Layout} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import HostForm from './hostForm';
import Details from './details'
const {Header}=Layout;

const Subscribe=()=>{
    return(
        <div>
            <Header className="subHeader">
                <img src={require("../../Assets/logo.png")} alt="lampopo"/>
            </Header>
    
        <div className="subscribe">
            <div>
            <HostForm/>
            </div>
            
        </div>
        <Details ></Details>

        
        </div>


    );
}
export default Subscribe;