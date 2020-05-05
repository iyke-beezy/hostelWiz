import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
import Head from '../head';
import LocConfirm from './locConfirm';
import DetailsConfirm from './detailsConfirm';
const {Header}=Layout;
const {TabPane}=Tabs;

class LastStep extends React.Component{
    state={
        current:'1',
        percent:30,
    }
    handleBack=()=>{
        this.setState({
            current:'1',
            percent:30
            
        })
    }
        
    handleNext=()=>{

        this.setState({
            current:'2',
            percent:60
        })
    }

    
    render(){
        return(
        <div style={{fontFamily:'Baloo Paaji Medium'}}>
            <Header className='lStepHeaderCover' >
            <Head list={false}></Head>
            <div className='lStepHeader'>
                <div className='progress' >
                <h3 className='medText'>Progress</h3>
                <Progress percent={this.state.percent} status="active" showInfo={false}/>
                </div>
                <div className='lastInfo'>
                    <h2 className='medText2' >Welcome, verify the final details of your property </h2>
                    <h3>Just few steps remaining</h3>
                </div>
            </div>
            </Header>
            <div className="lastContent" >
            <Tabs  activeKey={this.state.current} tabPosition='left' className='taboo'   style={{ height:'auto',width:'70%',overflowY:'scroll'}}>
                <TabPane key={1}  tab={'Welcome'}>
                </TabPane>
                <TabPane tab={'Location'} key={1} style={{position:'relative'}}>
                  <LocConfirm handleNext={this.handleNext}></LocConfirm>
                </TabPane>
                <TabPane tab={'Details'} key={2}>
                 <DetailsConfirm handleBack={this.handleBack}></DetailsConfirm>
                </TabPane>
                <TabPane tab={'Photos'} key={3}>
                 
                </TabPane>                
                <TabPane tab={'Security'} key={4}>
                
                </TabPane>                
                <TabPane tab={'Pricing'} key={5}>
                 
                </TabPane>                
                <TabPane tab={'Publish Listing'} key={6}>
                 
                </TabPane>
            </Tabs>
            <div style={{marginBottom:500}}>
            </div>
        </div>

        
        
        </div>

        );
    }
}
export default LastStep;