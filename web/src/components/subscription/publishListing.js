import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs, Divider} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
import { create_hostel } from '../../api'
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
        addPhotos:{},
        numberOfRooms:0,//Issah add this
        name:'hostelname',//Issah add this

      
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

    _publish = async () => {
        /*
        this.storeToken(t)*/
        try {
            const data = {
                address:locationDetails.streetAddress,
                city:locationDetails.city,
                region:locationDetails.region,
                headline:propertyDetails.headline,
                hostel_type:propertyDetails.propertyType,
                price:pricing.price,
                rate_type:pricing.time,
                accomodates:propertyDetails.accomodates,
                description:propertyDetails.description,
                bathrooms:propertyDetails.bathrooms,
                bedrooms:propertyDetails.bedrooms,
               number_of_rooms:this.state.numberOfRooms,
               name:this.state.name,
            }
            console.log(data)
            const token = '286ffbb3abfacc19e516ae4327deae01bb7132b5'
          const response = await create_hostel(data,token);
          console.log('the response:'+ JSON.stringify(response)+response.result.id)
          this.setState({id:response.result.id})
          localStorage.setItem('id',response.result.id);
        }
        catch (err) {
          console.log(err.errMessage)
          this.setState({ error: err.errMessage, loading: false })
        }
      }
    render(){

        return(
            <div>
                <div className='dC'>
                <span className='medText'>Location Details</span>
                
        <div>{
            this.state.locationDetails?
            <div className='dC'>
            <span className='smallText1'>{this.state.locationDetails.region}</span>
            <span className='smallText1'>{this.state.locationDetails.streetAddress}</span>
            <span className='smallText1'>{this.state.locationDetails.city}</span>
            </div>
           
    :null
    }</div>

                </div>
                <div className='dC'>
                <span className='medText'>Property Details</span>
                
        <div>{
            this.state.propertyDetails?
            <div className='dC'>
            <span className='smallText1'>{this.state.propertyDetails.headline}</span>
            <span className='smallText1'>{this.state.propertyDetails.description}</span>
            <span className='smallText1'>{this.state.propertyDetails.propertyType}</span>
            <span className='smallText1'>{this.state.propertyDetails.bedrooms}</span>
            <span className='smallText1'>{this.state.propertyDetails.accomodates}</span>
            <span className='smallText1'>{this.state.propertyDetails.bathrooms}</span>
           
            </div>
           
    :null
    }</div>
                </div>
                <div className='dC'>
                <span className='medText'>Property Photos</span>
                <div className='dC'>{
            this.state.addPhotos.fileList?
            this.state.addPhotos.fileList.map(fileList=><span className='smallText1' key={fileList.uid}>{fileList.name}</span>)
            :null
    }</div>
                </div>
                <div>
                <span className='medText'>Security</span>
                <div className='dC'>{
            this.state.security.numbers?
                this.state.security.numbers.map(number=><span className='smallText1' key={number}>{number}</span>)
            :null
            }</div>
                </div>
                <div>
                <span className='medText'>Pricing</span>
                
        <div>{
            this.state.pricing?
            <div className='dC'>
            <span className='smallText1'>{this.state.pricing.price}</span>
            <span className='smallText1'>{this.state.pricing.time}</span>
       
            </div>
           
    :null
    }</div>                
                </div>
            <div className='dC1'>
                <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton' onClick={this._publish}>Finish</Button> 
            </div>
    
            </div>
        )
    }
}
export default PublishListing;