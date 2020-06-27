import React from 'react';
import Head from './head';
import Foot from './foot';
import { Tabs ,Steps} from 'antd';
import Layout from '../containers/Layout';
import Follow from './follow';
import Contact from './contact';

//import './homepage.css'

const { Step } = Steps;
const { TabPane } = Tabs;
const Trust = () => {
  return (
    <div className='root'>
      <Head></Head>
      

    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',margin:100}}>
      <div style={{flex:'60%',marginRight:'5%'}}>
        <div>
          <h1 style={{fontSize:60,fontWeight:'bolder'}}>Trust & Safety</h1>
        </div>
        <div>
        <Tabs defaultActiveKey="1" >
            <TabPane tab={<span style={{fontSize:23}}>Guests</span>} key="1" style={{fontSize:20}}>
              <div>
                <h1>Trust</h1>
                <Steps direction="vertical" current={'2'}>
                  <Step title={<span style={{fontSize:26}}>Reviews</span>} description={<p style={{fontSize:23}}>Vrbo has more than 7 million reviews from travelers like you that help match you with the perfect home for your needs. After your stay, both you and the homeowner will receive emails reminding you to review your experiences. Neither of you will be able to see each other’s ratings until you've both submitted your reviews.</p>} />
                  <Step title={<span style={{fontSize:26}}>Report Misconduct</span>}  description={<p style={{fontSize:23}}>If an owner has acted inappropriately or made you feel unsafe, Vrbo will help with rebooking support and will investigate your case to determine if our policies have been violated. Contact us if you need assistance or wish to submit a complaint. In case of emergency, immediately contact the appropriate authorities.</p>} />
                  
                </Steps>     
              </div>
              <div>
                <h1>Safety</h1>
                <Steps direction="vertical" current={'2'}>
                  <Step title={<span style={{fontSize:26}}>Reviews</span>} description={<p style={{fontSize:23}}>Vrbo has more than 7 million reviews from travelers like you that help match you with the perfect home for your needs. After your stay, both you and the homeowner will receive emails reminding you to review your experiences. Neither of you will be able to see each other’s ratings until you've both submitted your reviews.</p>} />
                  <Step title={<span style={{fontSize:26}}>Report Misconduct</span>}  description={<p style={{fontSize:23}}>If an owner has acted inappropriately or made you feel unsafe, Vrbo will help with rebooking support and will investigate your case to determine if our policies have been violated. Contact us if you need assistance or wish to submit a complaint. In case of emergency, immediately contact the appropriate authorities.</p>} />
                  
                </Steps> 
              </div>
            </TabPane>
            <TabPane tab={<span style={{fontSize:23}}>Hosts</span>} key="2" style={{fontSize:20}}>
            <div>
                <h1>Trust</h1>
                <Steps direction="vertical" current={'2'}>
                  <Step title={<span style={{fontSize:26}}>House Rules</span>} description={<p style={{fontSize:23}}>Set your house rules so travelers know what is and isn't allowed at your property. House rules may include stipulations such as quiet hours, whether parties or events are allowed, age restrictions or maximum occupancy. Travelers must accept your house rules before booking.</p>} />
                  <Step title={<span style={{fontSize:26}}>Reporting Misconduct</span>}  description={<p style={{fontSize:23}}>If a guest has acted inappropriately or made you feel unsafe, Vrbo will investigate your case to determine if our policies have been violated. Contact us if you need assistance or wish to submit a complaint. In case of emergency, immediately contact the appropriate authorities.</p>} />
                  
                </Steps>     
              </div>
              <div>
                <h1>Safety</h1>
                <Steps direction="vertical" current={'2'}>
                  <Step title={<span style={{fontSize:26}}>Reviews</span>} description={<p style={{fontSize:23}}>Vrbo has more than 7 million reviews from travelers like you that help match you with the perfect home for your needs. After your stay, both you and the homeowner will receive emails reminding you to review your experiences. Neither of you will be able to see each other’s ratings until you've both submitted your reviews.</p>} />
                  <Step title={<span style={{fontSize:26}}>Report Misconduct</span>}  description={<p style={{fontSize:23}}>If an owner has acted inappropriately or made you feel unsafe, Vrbo will help with rebooking support and will investigate your case to determine if our policies have been violated. Contact us if you need assistance or wish to submit a complaint. In case of emergency, immediately contact the appropriate authorities.</p>} />
                  
                </Steps> 
              </div>
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