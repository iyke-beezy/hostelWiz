import React from 'react';
import {Card } from 'antd';
import 'antd/dist/antd.css';
import "../components/homepage.css";
const { Meta } = Card;
let filter=require('../Assets/apart1.jpg');

const Filters=({image})=>{

return(

    <Card className="filt" hoverable cover={<img style={{borderRadius:"16px 16px 0px 0px"}} alt="example" src={image}/>}>
    <Meta className="filtMeta"
      title={<span className="filtTitle">Explore Hostels</span>}
        description={<span className="filtDesc">Find a hostel to rent to support your low budget plans</span>}
    />
    </Card>
    );
};
export default Filters;