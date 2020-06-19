import React from "react";
import {Button} from 'antd';
import './homepage.css'

const BigImage=()=>{
    return(
    <div className="bigdiv">
        <div className="textArea">
            <span className="ta-sp-1">List your property on Hostel Wiz today and &nbsp;</span>
            <span className="ta-sp-2">experience a new breeze of excellence.</span>
        </div>
        <Button className="buttonArea" onClick={()=>window.location.href = '/listing'}> Host your property</Button>
    </div>
    );
}
export default BigImage;