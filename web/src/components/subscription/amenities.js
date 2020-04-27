import React from 'react';
import {Switch,Checkbox,Radio,Button} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Uploads from './upload';

class Amenities extends React.Component{
    state={
        page:true,
        value:1,
        wifi:false,
        carpark:false,
        gym:false,
        laundry:false,
        studyroom:false,
        tvroom:false,
        checkedItems:[]
    }
    handleChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };


      handlePage=()=>{
        if(this.state.page){
            this.setState({
                page:false
            });
        }
        else{
            this.setState({
                page:true
            });
        }

    }
    onChange=(checked,event)=>{
        if(checked){
            this.setState({
                [event.target.name]:true
            })
        }

    }
    onCheck=(checkedValue)=>{
        this.setState({
            checkedItems:checkedValue
        })
    }

    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('amenities',JSON.stringify(nextState));
    }


    render(){
        const plainOptions = ['Private', 'Shared'];
        let show;
        if(this.state.page){
            show=            <div>
            <div style={{minHeight:"250px", height:"auto"}}>
            <h2 className="medText">Tell us more about your property</h2>
            <div className="amenitiesWrap">
                <h3 className="smallText">Amenities</h3>
                <div className="innerAmenities">
                    <div className="innerColumns">
                        <div className="values">
                            <span className="smallText1">Wifi</span>
                            <Switch size="small" className="options" name="wifi" onChange={this.onChange}/>
                        </div>
                        <div className="values">
                            <span className="smallText1">Car Park</span>
                            <Switch size="small" className="options" name="carpark" onChange={this.onChange}/>
                        </div>
                        <div className="values">
                            <span className="smallText1">Gym</span>
                            <Switch size="small" className="options" name="gym" onChange={this.onChange}/>
                        </div>
                        <div className="values">
                            <span className="smallText1">Laundry</span>
                            <Switch size="small" className="options" name="laundry" onChange={this.onChange}/>
                        </div>
                        <div className="values">
                        <span className="smallText1">Study Room</span>
                        <Switch size="small" className="options"  name="studyroom" onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="innerColumns">
                        <div className="values">
                        <span className="smallText1">TV Room</span>
                        <Switch size="small" className="options"  name="tvroom" onChange={this.onChange}/>
                        </div>
                        <div className="values">
                        <span className="smallText1">Bathroom</span>
                        <Checkbox.Group options={plainOptions} className="options" onChange={this.onCheck}/>
                        </div>
                        <div className="values">
                        <span className="smallText1">Bedrooms</span>
                        <Radio.Group onChange={this.handleChange} value={this.state.value} className="options">
                            <Radio value={1} className="smallText2">Single</Radio>
                            <Radio value={2} className="smallText2">Duo</Radio>
                            <Radio value={3} className="smallText2">Trio</Radio>
                            <Radio value={4} className="smallText2">Quatro</Radio>
                        </Radio.Group>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                <Button className="form-button" onClick={this.handlePage}>Next</Button>
            </div>
        }else{
            show=<Uploads/>
        }
        return(
            <div>
                {show}
            </div>
            



        );
    }


};
export default Amenities;