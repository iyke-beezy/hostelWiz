import React from 'react';
import Head from './head';
import Foot from './foot';
import { Tabs ,Collapse, Divider} from 'antd';
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';

//import './homepage.css'
const { Panel } = Collapse;
const { TabPane } = Tabs;
const Help = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
          <h1 style={{fontSize:60,fontWeight:'bolder'}}>Help Center</h1>
          <Divider/>
        </div>
        <div>
        <Tabs tabPosition='left' defaultActiveKey="1" >
            <TabPane tab={<span style={{fontSize:23}}>Find A Property</span>} key="1">
                    <Collapse defaultActiveKey={['1']} >
                    <Panel header={<span style={{fontSize:20}}>Why Hostel Wiz</span>} key="1">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>Why Hostel Wiz</span>} key="2">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>Why Hostel Wiz</span>} key="3" >
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                </Collapse>
           </TabPane>
            <TabPane tab={<span style={{fontSize:23}}>Your Stay</span>} key="2" style={{fontSize:20}}>
            <Collapse defaultActiveKey={['1']} >
                    <Panel header={<span style={{fontSize:20}}>Why Hostel Wiz</span>} key="1">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>Why Hostel Wiz</span>} key="2">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>Why Hostel Wiz</span>} key="3" >
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                </Collapse>
            </TabPane>
            <TabPane tab={<span style={{fontSize:23}}>Your Review</span>} key="3" style={{fontSize:20}}>
            <Collapse defaultActiveKey={['1']} >
                    <Panel header={<span style={{fontSize:20}}>How do I review a property</span>} key="1">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>What should be included in my review</span>} key="2">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>Can you edit my review</span>} key="3" >
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                </Collapse>
            </TabPane>
            <TabPane tab={<span style={{fontSize:23}}>Your Account</span>} key="4" style={{fontSize:20}}>
            <Collapse defaultActiveKey={['1']} >
                    <Panel header={<span style={{fontSize:20}}>How do i create an account</span>} key="1">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>Can i delete my account</span>} key="2">
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                    <Panel header={<span style={{fontSize:20}}>How do i login</span>} key="3" >
                        <p style={{fontSize:18}}>
                        Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
                    salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
                    burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
                    shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
                    tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
                    shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
                    alcatra.
                        </p>
                    </Panel>
                </Collapse>
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

export default Help;