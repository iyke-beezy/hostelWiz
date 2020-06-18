import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs} from 'antd';
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
         console.log(locationDetails);
         console.log(pricing);
         console.log(security);
         console.log(propertyDetails);
         console.log(addPhotos)
    };
    render(){

        return(
            <div></div>
        )
    }
}
export default PublishListing;