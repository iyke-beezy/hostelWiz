import React from 'react'
import {Card } from 'antd';
import "../components/homepage.css";
import 'antd/dist/antd.css';
const { Meta } = Card;
const News=()=>{

return(
  <Card className="news" bordered={false}
   cover={<img alt="example" src={require('../Assets/apart4.jpg')} style={{borderRadius:"12px 12px 12px 12px"}}/>}
   >
    <Meta className="newsMeta"
      title={<span className="newsTitle">Explore Hostels</span>}
      description={<span >Find a hostel to rent to support your low budget plans</span>}
    />
    </Card>


    );


};
export default News;