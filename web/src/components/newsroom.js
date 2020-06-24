import React from 'react';
import Head from './head';
import Foot from './foot';
//import './homepage.css'
import Layout from '../containers/Layout';
import NewsClass from './newsClass';
import Follow from './follow';
import Contact from './contact';

const NewsRoom = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
            <NewsClass forNews={true}/>
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

export default NewsRoom;