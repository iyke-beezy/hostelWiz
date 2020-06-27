import React from 'react';
import Head from './head';
import Foot from './foot';
import {Pane} from 'evergreen-ui'
//import './homepage.css'
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';
import { Divider, Card ,Tabs} from 'antd';
 const {TabPane}=Tabs;
let details=[
  {
    title:'Improved accuracy',
    info:'Guests with mobility needs often rely on photos to make sure a listing will work for them. That’s why we require hosts to provide photos of every accessibility feature they have, and it’s why listings have a special section dedicated to showcasing these photos.',
  },
  {
    title:'Digital accessibility standards',
    info:'We’re working toward the digital accessibility standards laid out by the Web Content Accessibility Guidelines. We’re also investing in automated testing tools to help us catch more issues.',
  },
  {
    title:'More listings with accessibility features',
    info:'We’re working hard to get more listings with accessibility features on Airbnb, and we’re making them easier to find by improving our search features, including easier-to-use filters and better photos on the search results page.',
  }
];
let details1=[
  {
    title:'Find the right place',
    info:'Use the search filters to only show places or experiences that meet your accessibility needs. Once you’ve found a few listings, take a look at the “Accessibility features” section of each listing for photos and descriptions of the features that matter to you.',
  },
  {
    title:'Talk to potential hosts',
    info:'If you have any special concerns, be sure to message the host before you book to make sure they can accommodate you. You can message potential hosts from the “Contact host” link on their listing or experience page.',
  },
  {
    title:'Help other guests',
    info:'What would you have wanted to know before you booked? Let guests with mobility needs know what to expect by writing a detailed review.',
  }
];
let details2=[
  {
    title:'Make your listing more accessible',
    info:'You may not realize your listing already has accessibility features—like wide doorways or extra space around the toilet—or that you can add some of these features without much effort or expense.',
  },
  {
    title:'Add accessibility photos',
    info:'Add photos of your accessibility features to showcase your space to the guests with mobility needs who search on HostelWiz periodically. To get started, head to the Manage Your Space area for the listing you’d like to add accessibility features for. Be sure to write captions for each photo and check out our photo tips.',
  }
]

const Accessibility = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex',flexDirection:'column', margin:100}}>
      
          <div style={{height:'400px',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
            <span className='largeText' style={{fontSize:70,fontWeight:'bolder'}}>HostelWiz is accessible to ALL</span>
          </div>
          <Divider/>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          
            <span style={{fontSize:55,fontWeight:'bold'}}>We are working towards..</span>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginBottom:80}}>
            {
              details.map(detail=>
              (<Pane  
                height='auto'
                width={400}
                elevation={2} 
                padding={20}
                
                margin={30}
                
                justifyContent="center"
                border="default" 
                key={detail.title} >
                  <h2 style={{fontWeight:'bold'}}>{detail.title}</h2>
                  <Divider/>
                  <span style={{fontSize:21}}>{detail.info}</span>
                  </Pane>))
            }              
            </div>
            <div>
            <span style={{fontSize:60,fontWeight:'bold'}}>TIPS</span>
            </div>
            <Tabs style={{width:'90%'}}  type="card">
              <TabPane tab={<span style={{fontSize:20}}>Tips for Guests</span>} key="1">
                <h1 style={{fontSize:40,fontWeight:'bold'}}>Tips For Guests</h1>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginBottom:50}}>
            {
              details1.map(details1=>
              (<Pane  
                height='auto'
                width={400}
                elevation={2} 
                padding={20}
                
                margin={30}
                
                justifyContent="center"
                border="default" 
                key={details1.title} >
                  <h2 style={{fontWeight:'bold'}}>{details1.title}</h2>
                  <Divider/>
                  <span style={{fontSize:21}}>{details1.info}</span>
                  </Pane>))
            }              
            </div>
              </TabPane>
              <TabPane tab={<span style={{fontSize:20,}}>Tips for Hosts</span>} key="2">
              <h1 style={{fontSize:40,fontWeight:'bold'}}>Tips For Hosts</h1>
              <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginBottom:50}}>
            {
              details2.map(details2=>
              (<Pane  
                height='auto'
                width={400}
                elevation={2} 
                padding={20}
                
                margin={30}
                
                justifyContent="center"
                border="default" 
                key={details2.title} >
                  <h2 style={{fontWeight:'bold'}}>{details2.title}</h2>
                  <Divider/>
                  <span style={{fontSize:21}}>{details2.info}</span>
                  </Pane>))
            }              
            </div>
              </TabPane>
            </Tabs>
            
        </div>
        
 

      </div>
      <Foot></Foot>
    </div>
  );
};

export default Accessibility;