import React from 'react';
import {Input,Button} from 'antd';
import './hostForm.css';



const Join =()=>{
    return(
        <div>
        <div style={{minHeight:"250px", height:"auto"}}>
            <h2 className="medText">Join Us</h2>
            <div>
            <h3 className="smallText">Sign Up</h3>
            <Input className="joInput"/>
            </div>
        </div>
            <Button className="form-button">Next</Button>
        </div>
        

    );
}
export default Join;