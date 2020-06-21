import React from 'react';
import {Button,Input ,Select,Radio} from 'antd';
import 'antd/dist/antd.css';
import './hostForm.css';
const {Option}=Select;


class Pricing extends React.Component{
    state={
        time:'Monthly',
        price:'',
        value:null
    };
    handleTimeChange=(value)=>{
        this.setState({
            time:value,
        })
    }
    handleRadioChange=e=>{
        this.setState({
            value:e.target.value,
        })
    }
    handleChange= event => {
     
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({state: cred});
    };
    getSnapshotBeforeUpdate(nextProps,nextState){
        localStorage.setItem('pricing',JSON.stringify(nextState));
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){

    }
    render(){

        return(
            <div style={{paddingLeft:20}}>
                <div className='dC'>
                    <span className='medText'>How much do you want to charge?</span>
                    <span className='smallText'>We recommend starting with a low price to get a few bookings and earn some initial guest reviews. You can update your rates at any time.</span>
                </div>
                <div className='dC'>
                    <span className='medText'>Rate type</span>
                    <span className='smallText2'>Based on how frequent you accept payments. Per month, per annum or per semester for students</span>
                    <Select defaultValue={this.state.time} size={'large'} className='entries' onChange={this.handleTimeChange}>
                                            <Option value="Monthly">Monthly</Option>
                                            <Option value="Per Semester">Per Semester</Option>
                                            <Option value="Yearly">Yearly</Option>
                  </Select>                
                </div>
                <div className='dC'>
                    <span className='medText'>Amount</span>
                    <Input name="price" size='large' style={{border:'0.5px solid #E3E3E3'}} value={this.state.price} onChange={this.handleChange} className='entries' prefix={<span className='smallText'>GHc</span>} placeholder='0.00'/>
                </div>
                <div className='dC'>
                    <span className='medText'>Would you like to offer a 20% discount to your first three guests?</span>
                    <span className='smallText'>It can be tough to get bookings when your property has zero reviews. Give a discount on your base rate to gain more visibility for travelers searching in your area. Learn more about new listing discount</span>
                </div>
                <div className='dC'>
                <Radio.Group onChange={this.handleRadioChange} value={this.state.value}  className="dC">
                            <Radio value={1} className="smallText">Yes</Radio>
                            <span className="smallText">We’ll let travelers know your property is new to Vrbo and they’ll get 20% off for bookings with you. Your property will be eligible to be featured on the first page of traveler search results. Your discount will be active for 90 days or until you get three bookings - whichever comes first. When the discount is no longer active your base rate will return to the original amount. </span>
                            <Radio value={2} className="smallText">No</Radio>
                            <span className="smallText">If you choose not to offer this discount now, you won’t be able to offer it later. You can continue to offer your guests other discounts after your property goes live, but you won’t get additional benefits like more visibility with travelers.</span>
               

                </Radio.Group>                    
                </div>    
                <div className='dC1'>
                <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton' onClick={this.props.handleNext}>Next</Button>                 
               </div>            
            </div>
        );
    }
}
export default Pricing;