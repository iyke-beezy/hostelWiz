import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs} from 'antd';
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
         console.log(locationDetails);
         console.log(pricing);
         console.log(security);
         console.log(propertyDetails);
         console.log(addPhotos);
         this._publish();
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
          
        }
        catch (err) {
          console.log(err.errMessage)
          this.setState({ error: err.errMessage, loading: false })
        }
      }
    render(){

        return(
            <div></div>
        )
    }
}
export default PublishListing;