import React from 'react';
import {Button,Card} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Selection from './selection'
import Amenities from './amenities';
import Uploads from './upload';
import Join from './join';
class HostForm extends React.Component{

    state = {
        step_no: 1
    }

    setStepNo = no => {
        this.setState({step_no: no})
    }

    render(){
        return(
            <Card className="form-wrapper">
                <h3 className="smallText">Step 1</h3>
                <span className="largeText">Host With Us and Get More</span>
                <Selection setStepNo={this.setStepNo}/>
            </Card>


        );
    }
};
export default HostForm;