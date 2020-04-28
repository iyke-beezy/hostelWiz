import React from 'react';
import {Layout} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import HostForm from './hostForm';
const {Header}=Layout;

const Subscribe=()=>{
    return(
        <div>
            <Header className="subHeader">
                <img src={require("../../Assets/logo.png")} alt="lampopo"/>
            </Header>
        <div className="subscribeCover">
        <div className="subscribe">
            <div className="divImage"></div>
            <HostForm/>
           
        </div>
        <h2 className="medText1" >A marketplace for all hostels and apartments</h2> 
        </div>

        
        </div>


    );
}
export default Subscribe;