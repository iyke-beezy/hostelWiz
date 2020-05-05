import React from 'react';
import {Select,Button} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Amenities from './amenities'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
const {Option}=Select
class Selection extends React.Component{
    buildingData;
    state={
        page:"true",
        buildingType:"Hostel",
        buildingPurpose:"Rent"
    };
    handleTypeChange=(value)=>{

        this.setState({
            buildingType:value
        });
    }
    handlePurposeChange=(value)=>{

        this.setState({
            buildingPurpose:value
        });
    }

    handlePage=()=>{
    
            this.setState({
                page:false
            });
        }

 
    handleBack=()=>{
        this.setState({
            page:true
        });
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('selection',JSON.stringify(nextState));
    }

    render(){
        let show;
        if(this.state.page){
            show=<div>
            <div style={{minHeight:"250px", height:"auto"}}>
            <h2 className="medText">Tell us more about your property</h2>
            <div className="selectors">
                <div className="building">
                    <h3 className="smallText">Building Type</h3>
                    <Select defaultValue={this.state.buildingType}  size={'large'} style={{ width: 200 }} onChange={this.handleTypeChange}>
                      <Option value="Hostel">Hostel</Option>
                      <Option value="Apartment">Apartment</Option>
                    </Select>

                 </div>
                 <div className="location">
                    <h3 className="smallText">Location</h3>
                    <GooglePlacesAutocomplete 
                    onSelect={console.log}
                    autocompletionRequest={{
                        componentRestrictions: {
                          country: ['gh'],
                        }
                      }}
                    inputStyle={{
                        width:200,
                        height:40,
                        color: "#92A5A3",
                        marginBottom:"10px",
                        border:"0.5px solid #92A5A3",
                        boxShadow:"0px 0px 0px",
                    }}
                    
                    />
                 </div>

                <div className="purpose">
                    <h3 className="smallText">Sale Type</h3>
                    <Select defaultValue={this.state.buildingPurpose} size={'large'} style={{ width:200 }} onChange={this.handlePurposeChange}>
                       <Option value="Rent">For rent</Option>
                       <Option value="Sale">For sale</Option>
                    </Select>                   
                </div>
            </div>
            </div>

                <Button className="form-button" onClick={this.handlePage}>Next</Button>
            </div>
        }else{
            show=<Amenities goBack={this.handleBack}/>
        }
        return(
            <div>{show}</div>

        );
    }

};
export default Selection;