import React from 'react';
import {Card} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Selection from './selection'
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
                <h3 className="smallText">Step {this.state.step_no}</h3>
                <span className="largeText">Host With Us and Get More</span>
                <Selection setStepNo={this.setStepNo}/>
            </Card>
        );
    }
};
export default HostForm;