import React from 'react';
import { Input, Dropdown,Button,Select } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
const {Option}=Select

class LocConfirm extends React.Component{
    state={
        streetAddress:'',
        city:'',
        region:'Select Region'
    }
    handleRegionChange=(value)=>{

        this.setState({
            region:value
        });
    }
    handleChange= event => {
     
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({state: cred});
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('locationDetails',JSON.stringify(nextState));
    }
    handleNext=()=>{
        this.props.handleNext();
    }
    render(){

        return(
        <div style={{paddingLeft:20}}>
            <h2 className='medText'>Where is property located</h2>
            <div style={{display:'flex', flexDirection:'column',marginBottom:3}}>
            <span style={{fontSize:12}}>Street Address</span>
           <Input size='large' name="streetAddress" value={this.state.streetAddress}   onChange={this.handleChange} style={{width:'40%'}}/>
           </div>
        
        <div style={{display:'flex', flexDirection:'column',marginBottom:3}}>
            <span style={{fontSize:12}}>City</span>
           <Input size='large' name="city" value={this.state.city}   onChange={this.handleChange} style={{width:'40%'}}/>
        </div>
        <div style={{display:'flex', flexDirection:'column',marginBottom:3}}>
                    <span style={{fontSize:12}}>Region</span>
                    <Select defaultValue={this.state.region}  size={'large'} style={{ width: '40%' }} onChange={this.handleRegionChange}>
                      <Option value="Greater Accra">Greater Accra</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                      <Option value="Ashanti Region">Ashanti Region</Option>
                    </Select>

                 </div>
            <div>
                <Button hidden={true}>Back</Button>
                <Button onClick={this.handleNext}>Next</Button>
            </div>

        </div>        
        );


    }
}
export default LocConfirm;