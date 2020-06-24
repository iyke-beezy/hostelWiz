import React from 'react';
import Head from './head';
import Foot from './foot';
//import './homepage.css'
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';

const About = () => {
  return (
    <div className='root'>
      <Head></Head>
      
      <div className='bigdiv2'>

      </div>
    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
          <h1 style={{fontSize:45}}>Our Mission</h1>
          <p className='medText'> Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
        salami strip steak. Pancetta kielbasa ham hock andouille.</p>
        </div>
        <div>
          <h1 style={{fontSize:45}}>About HostelWiz</h1>
          <p className='medText'> Bacon ipsum dolor amet tail landjaeger corned beef chuck hamburger,
        salami strip steak. Pancetta kielbasa ham hock andouille. Tail cupim
        burgdoggen salami bacon jerky shankle strip steak turkey. Drumstick
        shoulder pork loin, filet mignon cupim alcatra tongue jowl. Cupim
        tenderloin rump t-bone. Picanha turducken short loin jowl, landjaeger
        shoulder t-bone buffalo spare ribs salami pastrami tri-tip ground round
        alcatra.</p>
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

export default About;