import React from 'react';
import Head from './head';
import Foot from './foot';
import { Tabs } from 'antd';
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';

//import './homepage.css'

const { TabPane } = Tabs;
const Trust = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
          <h1 style={{fontSize:45}}>Trust & Safety</h1>
          <p className='medText'> Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
        salami strip steak. Pancetta kielbasa ham hock andouille.</p>
        </div>
        <div>
        <Tabs defaultActiveKey="1" >
            <TabPane tab={<span style={{fontSize:23}}>Overview</span>} key="1" style={{fontSize:20}}>
            Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
            salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
            burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
            shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
            tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
            shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
            alcatra.
            </TabPane>
            <TabPane tab={<span style={{fontSize:23}}>Home Safety</span>} key="2" style={{fontSize:20}}>
            Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
            salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
            burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
            shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
            tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
            shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
            alcatra.
            </TabPane>
            <TabPane tab={<span style={{fontSize:23}}>Hosting</span>} key="3" style={{fontSize:20}}>
            Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
            salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
            burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
            shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
            tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
            shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
            alcatra.
            </TabPane>
        </Tabs>
        </div>
        </div>
        <div style={{flex:'30%'}}>
          <h1>Follow Us</h1>
          <Follow/>
          <Contact/>
        </div>

      </div>
      <Foot></Foot>
    </div>
  );
};

export default Trust;