import React from 'react'
import {Card, Row, Col, Input,Button } from 'antd';
import {SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "../components/homepage.css"

class SearchBar extends React.Component{

    render(){
        return(
        
        <div className="searchWrapper">
         <div className="innerWrap">

                <div className="locDiv">
                    <span>Location</span><br/>
                    <Input style={{borderWidth:"0px 0px 0px 2px",}} placeholder="Add city, Address or Landmark"/>
                </div>
                <div className="buildDiv">
                    <span>Building Type</span><br/>
                    <Input style={{borderWidth:"0px 0px 0px 2px",}} placeholder="Apply Building Type filter"/>
                </div>
                <Button className="searchButton">
                    {<SearchOutlined/>}
                    Search
                </Button>
              
 
            </div>
            </div>


 
        );
    }

}
export default SearchBar;