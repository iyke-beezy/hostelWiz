import React from 'react';
import {Layout, Divider} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Item from './item';
import Foot from '../foot.js'


const Details=({props})=>{

    props={
        details:[
            {
                title:"Set up your property",
                paragraph:"Tell us the various features that uniquely identifies your property. Add your property location for easier search."
            },
            {
                title:"Upload Photos",
                paragraph:"Upload unique photos of your building to show off."
            },
            {
                title:"Get the perfect match",
                paragraph:"Once everything is set up, we will connect you to customers nationwide and worldwide."
            }
        ]
    }
    return(
        <div>
        <div className="topTier">
            <div className="dtopWrap">
            <div className="dTopDiv">
            <div className='dImageDiv'>
            <img src={require("../../Assets/smart-key.png")} alt="lampopo"/>
            </div>
            
            <div className='dWhyDiv'>
                <h4>Why host on HostelWiz?</h4>
                <p className="dP" style={{width:"400px"}}>HostelWiz gives you simplicity in setting your prices, house rules, and offers you tools to ensure you're in control. You are given the opportunity to place your properties in front of a nationwide and global network of people looking for the perfect match.</p>
            </div>
            
            </div>
            <div style={{margin:"20px"}}></div>
            </div>
            <div style={{margin:"20px"}}></div>
            <div className="dMidDiv">
                <h1>Host in 3 easy steps </h1>
                <div style={{margin:"10px"}}></div>
                <div className="dMidDiv-1">
                    {props.details.map((detail)=>{
                        return <Item title={detail.title} paragraph={detail.paragraph}/>
                    })}
                </div>
            </div>
            <div className="dBotDiv">
                <h1>Payment plans</h1>
                <h4 style={{fontSize:"25px",textAlign:"center"}}>Host your property on HostelWiz and enjoy your first 3 months free</h4>
            </div>

        </div>
        <Foot/>
        </div>
    );
};
export default Details;