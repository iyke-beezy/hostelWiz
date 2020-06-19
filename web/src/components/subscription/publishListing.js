import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs, Divider} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
let locationDetails;
let pricing
let security
let propertyDetails
let addPhotos
class PublishListing extends React.Component{
    
    state={
        locationDetails:{},
        pricing:{},
        security:{},
        propertyDetails:{},
        addPhotos:{}
    };
    componentDidMount(){
        locationDetails=JSON.parse(localStorage.getItem('locationDetails'));
        pricing=JSON.parse(localStorage.getItem('pricing'));
         security=JSON.parse(localStorage.getItem('security'));
         propertyDetails=JSON.parse(localStorage.getItem('propertyDetails'));
         addPhotos=JSON.parse(localStorage.getItem('addPhotos'));
        this.setState({
            locationDetails:locationDetails,
            pricing:pricing,
            security:security,
            propertyDetails:propertyDetails,
            addPhotos:addPhotos
        })
    };
    render(){

        return(
            <div>
                <div>
                <span className='medText'>Location Details</span>
                
        <div>{
            this.state.locationDetails?
            <div>
            <span>{this.state.locationDetails.region}</span>
            <span>{this.state.locationDetails.streetAddress}</span>
            <span>{this.state.locationDetails.city}</span>
            </div>
           
    :null
    }</div>

                </div>
                <div>
                <span className='medText'>Property Details</span>
                
        <div>{
            this.state.propertyDetails?
            <div>
            <span>{this.state.propertyDetails.headline}</span>
            <span>{this.state.propertyDetails.description}</span>
            <span>{this.state.propertyDetails.propertyType}</span>
            <span>{this.state.propertyDetails.bedrooms}</span>
            <span>{this.state.propertyDetails.accomodates}</span>
            <span>{this.state.propertyDetails.bathrooms}</span>
           
            </div>
           
    :null
    }</div>
                </div>
                <div>
                <span className='medText'>Property Photos</span>
      <div>{
            this.state.addPhotos.fileList?
            this.state.addPhotos.fileList.map(fileList=><span key={fileList.uid}>{fileList.name}</span>)
            :null
    }</div>
                </div>
                <div>
                <span className='medText'>Security</span>
                <div>{
            this.state.security.numbers?
                this.state.security.numbers.map(number=><span key={number}>{number}</span>)
            :null
            }</div>
                </div>
                <div>
                <span className='medText'>Pricing</span>
                
        <div>{
            this.state.pricing?
            <div>
            <span>{this.state.pricing.price}</span>
            <span>{this.state.pricing.time}</span>
       
            </div>
           
    :null
    }</div>                
                </div>
            <div className='dC1'>
            <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton'>Next</Button> 
            </div>
            </div>
        )
    }
}
export default PublishListing;