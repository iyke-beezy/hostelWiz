import React from 'react';
import Head from './head';
import Foot from './foot';
import { List,Avatar} from 'antd';
import {AimOutlined} from '@ant-design/icons';
//import './homepage.css'
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';
let data = [
  {
    title: 'Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,salami strip steak.',
  },
  {
    title: 'Pancetta kielbasa ham hock andouille.',
  },
  {
    title: 'Tail cupim burgdoggen salami bacon jerky shankle strip steak turkey.',
  },
  {
    title: ' Drumstick shoulder pork loin, filet mignon cupim alcatra tongue jowl.',
  },
];
const Terms = () => {
  return (
    <div className='root'>
      <Head></Head>
      
    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div style={{marginBottom:'10%'}}>
          <h1 style={{fontSize:60,fontWeight:'bolder'}}>Terms Of Services</h1>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={data => (
            <List.Item>
             <List.Item.Meta
               avatar={<Avatar style={{color:'#E7C654',backgroundColor:'white'}} icon={<AimOutlined/>} />}
                description={<span style={{fontSize:21}}>{data.title}</span>}
        />
        </List.Item>
       )}
      />
        </div>
        <div>
          <h1 style={{fontSize:50,fontWeight:'bold'}}>Privacy Statement</h1>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={data => (
            <List.Item>
             <List.Item.Meta
               avatar={<Avatar style={{color:'#E7C654',backgroundColor:'white'}} icon={<AimOutlined/>} />}
                description={<span style={{fontSize:21}}>{data.title}</span>}
        />
        </List.Item>
       )}
      />
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

export default Terms;