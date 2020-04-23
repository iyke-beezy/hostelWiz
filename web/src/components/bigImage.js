import React from "react";
import {Button} from 'antd';
import './homepage.css'

const BigImage=()=>{
    return(
    <div className="bigdiv">
        <div className="textArea">
            <span className="ta-sp-1">List your property on Hostel Wiz and enjoy &nbsp;</span>
            <span className="ta-sp-2">3 Free Months Subscription</span>
        </div>
        <Button className="buttonArea"> Host your property</Button>
    </div>
    );

}
export default BigImage;