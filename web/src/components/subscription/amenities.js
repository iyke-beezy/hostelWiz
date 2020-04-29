import React from 'react';
import {Switch,Checkbox,Radio,Button} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Uploads from './upload';
import { ArrowLeftOutlined } from '@ant-design/icons';
class Amenities extends React.Component{
    amenities;
    state={
        page:true,
        value:1,
        wifi:false,
        carpark:false,
        gym:false,
        laundry:false,
        studyroom:false,
        tvroom:false,
        bath:1,
    }
    handleChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };


      handlePage=()=>{
            this.setState({
                page:false
            });
    }
    handleBackUp=()=>{
        this.setState({
            page:true
        });
    }

    onChange=(checked,event)=>{
        if(checked){
            this.setState({
                [event.target.name]:true
            })
        }

    }
    onCheck=e=>{
        this.setState({
            bath:e.target.value
        })
    }

    UNSAFE_componentWillUpdate(nextProps,nextState){
        localStorage.setItem('amenities',JSON.stringify(nextState));
    }
    handleBack=()=>{
       this.props.goBack();
    }

    render(){
        const plainOptions = ['Private', 'Shared'];
        let show;
        if(this.state.page){
            show=            <div>
            <div style={{minHeight:"250px", height:"auto"}}>
            <Button onClick={this.handleBack}><ArrowLeftOutlined/>Back</Button>
            <h2 className="medText">Tell us more about your property</h2>
            <div className="amenitiesWrap">
                <h3 className="smallText">Amenities</h3>
                <div className="innerAmenities">
                    <div className="innerColumns">
                        <div className="values">
                            <span className="smallText1">Wifi</span>
                            <Switch size="small" className="options" name="wifi" checked={this.state.wifi} onChange={this.onChange}/>
                        </div>
                        <div className="values">
                            <span className="smallText1">Car Park</span>
                            <Switch size="small" className="options" name="carpark"  checked={this.state.carpark} onChange={this.onChange}/>
                        </div>
                        <div className="values">
                            <span className="smallText1">Gym</span>
                            <Switch size="small" className="options" name="gym" checked={this.state.gym} onChange={this.onChange}/>
                        </div>
                        <div className="values">
                            <span className="smallText1">Laundry</span>
                            <Switch size="small" className="options" name="laundry" checked={this.state.laundry} onChange={this.onChange}/>
                        </div>
                        <div className="values">
                        <span className="smallText1">Study Room</span>
                        <Switch size="small" className="options"  name="studyroom" checked={this.state.studyroom} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="innerColumns">
                        <div className="values">
                        <span className="smallText1">TV Room</span>
                        <Switch size="small" className="options"  name="tvroom" checked={this.state.tvroom} onChange={this.onChange}/>
                        </div>
                        <div className="values">
                        <span className="smallText1">Bathroom</span>
                        <Radio.Group onChange={this.onCheck} value={this.state.bath} className="options">
                            <Radio value={1} className="smallText2">Private</Radio>
                            <Radio value={2} className="smallText2">Shared</Radio>
                        </Radio.Group>
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
            show=<Uploads goBack={this.handleBackUp}/>
        }
        return(
            <div>
                {show}
            </div>
            



        );
    }


};
export default Amenities;