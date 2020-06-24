import React from 'react';
import Head from './head';
import Foot from './foot';
//import './homepage.css'
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';

const Accessibility = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
          <h1 style={{fontSize:55}}>Accessibility</h1>
          <p className='medText'> Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
        salami strip steak. Pancetta kielbasa ham hock andouille.</p>
        </div>
        <div>
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

export default Accessibility;