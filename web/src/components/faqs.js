import React from 'react';
import Head from './head';
import Foot from './foot';
import Layout from '../containers/Layout';
import { Collapse } from 'antd';
import Follow from './follow';
import Contact from './contact';

const { Panel } = Collapse;

//import './homepage.css'


const FAQS = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
          <h1 style={{fontSize:50}}>FAQS</h1>
          
        </div>
        <div>
        <Collapse defaultActiveKey={['1']} >
            <Panel header="Why Hostel Wiz" key="1">
                <p>
                Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
            salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
            burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
            shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
            tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
            shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
            alcatra.
                </p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <p>
                Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
            salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
            burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
            shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
            tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
            shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
            alcatra.
                </p>
            </Panel>
            <Panel header="This is panel header 3" key="3" >
                <p>
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

export default FAQS;